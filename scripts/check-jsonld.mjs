// Cek structured data (JSON-LD) di setiap halaman hasil build.
//
//   node scripts/check-jsonld.mjs
//
// JSON-LD yang tidak bisa di-parse atau kehilangan properti wajib membuat
// hasil pencarian kehilangan data terstruktur tanpa pesan error apa pun, jadi
// pemeriksaan ini dijalankan di CI setelah build.
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = "dist";
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

const ARTICLE_TYPES = ["Article", "TechArticle", "BlogPosting", "NewsArticle"];
const REQUIRED = {
  WebSite: ["url", "name"],
  Organization: ["url", "name"],
  BreadcrumbList: ["itemListElement"],
  Article: ["headline", "description", "dateModified", "image", "author", "publisher"],
  TechArticle: ["headline", "description", "dateModified", "image", "author", "publisher"],
};

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const isAbsoluteUrl = (value) => /^https?:\/\//.test(value);

const issues = [];
const pages = walk(DIST).filter((file) => file.endsWith(".html"));
let nodes = 0;

for (const file of pages) {
  const html = readFileSync(file, "utf8");
  const page = relative(DIST, file).replace(/\\/g, "/");
  const noindex = /name="robots" content="noindex"/.test(html);
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const add = (reason) => issues.push({ page, reason, noindex });

  if (blocks.length === 0) {
    if (!noindex) add("tanpa JSON-LD padahal halaman diindeks");
    continue;
  }
  if (blocks.length > 1) add(`${blocks.length} blok JSON-LD (cukup satu)`);

  const ids = new Set();
  const types = new Map();

  for (const [, raw] of blocks) {
    let data;
    try {
      data = JSON.parse(raw);
    } catch (error) {
      add(`JSON-LD tidak bisa di-parse: ${error.message}`);
      continue;
    }

    if (data["@context"] !== "https://schema.org") add(`@context "${data["@context"]}"`);
    if (!Array.isArray(data["@graph"]) || data["@graph"].length === 0) {
      add("tidak punya @graph berisi node");
      continue;
    }

    const pageUrl = new URL(
      relative(DIST, file).replace(/\\/g, "/").replace(/index\.html$/, ""),
      "https://example.invalid/",
    ).pathname;

    for (const node of data["@graph"]) {
      nodes += 1;
      const type = node["@type"];
      if (!type) {
        add("node tanpa @type");
        continue;
      }
      if (types.has(type)) add(`dua node bertipe ${type}`);
      types.set(type, node);

      if (node["@id"]) {
        if (ids.has(node["@id"])) add(`@id ganda ${node["@id"]}`);
        ids.add(node["@id"]);
        if (!isAbsoluteUrl(node["@id"])) add(`@id tidak absolut: ${node["@id"]}`);
      }

      for (const [key, value] of Object.entries(node)) {
        if (["url", "image", "mainEntityOfPage"].includes(key) && typeof value === "string") {
          if (!isAbsoluteUrl(value)) add(`${type}.${key} tidak absolut: ${value}`);
        }
      }

      const required = REQUIRED[type] ?? (ARTICLE_TYPES.includes(type) ? REQUIRED.Article : []);
      for (const key of required) {
        if (node[key] === undefined || node[key] === "" || node[key] === null) {
          add(`${type} tanpa ${key}`);
        }
      }

      if (node.dateModified && !ISO_DATE.test(node.dateModified)) {
        add(`${type}.dateModified bukan YYYY-MM-DD: ${node.dateModified}`);
      }

      if (node.author) {
        const author = node.author;
        const hasName = typeof author === "string" ? author.length > 0 : Boolean(author.name ?? author["@id"]);
        if (!hasName) add(`${type}.author tanpa name atau @id`);
        if (typeof author === "object" && author["@id"] && !data["@graph"].some((item) => item["@id"] === author["@id"])) {
          add(`${type}.author menunjuk @id yang tidak ada di halaman`);
        }
      }

      if (node.publisher?.["@id"] && !data["@graph"].some((item) => item["@id"] === node.publisher["@id"])) {
        add(`${type}.publisher menunjuk @id yang tidak ada di halaman`);
      }

      if (type === "BreadcrumbList") {
        const items = node.itemListElement ?? [];
        items.forEach((item, index) => {
          if (item.position !== index + 1) add(`remah roti posisi ${item.position} di urutan ${index + 1}`);
          if (!item.name) add(`remah roti ${index + 1} tanpa name`);
          if (!item.item || !isAbsoluteUrl(item.item)) add(`remah roti ${index + 1} tanpa URL absolut`);
        });
        const last = items.at(-1);
        if (last?.item) {
          const lastPath = new URL(last.item).pathname.replace(/\/$/, "/");
          if (lastPath !== pageUrl) add(`remah roti terakhir ${lastPath} bukan ${pageUrl}`);
        }
      }
    }
  }
}

const real = issues.filter((issue) => !issue.noindex);
console.log(`${pages.length} halaman, ${nodes} node JSON-LD diperiksa`);

if (real.length === 0) {
  console.log("Structured data lengkap dan valid.");
  process.exit(0);
}

for (const issue of real) console.error(`  ${issue.page}: ${issue.reason}`);
console.error(`${real.length} masalah structured data.`);
process.exit(1);
