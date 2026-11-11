// Cek metadata dan struktur heading setiap halaman hasil build.
//
//   node scripts/check-meta.mjs
//
// Batas mengikuti praktik umum: judul di bawah 65 karakter supaya tidak
// terpotong di hasil pencarian, deskripsi 60-160 karakter.
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = "dist";
const TITLE_MAX = 65;
const DESC_MIN = 60;
const DESC_MAX = 160;

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const pick = (html, pattern) => html.match(pattern)?.[1]?.trim();

const issues = [];
const seen = { title: new Map(), description: new Map() };
const pages = walk(DIST).filter((file) => file.endsWith(".html"));

for (const file of pages) {
  const html = readFileSync(file, "utf8");
  const page = relative(DIST, file).replace(/\\/g, "/");
  const noindex = /name="robots" content="noindex"/.test(html);
  const title = pick(html, /<title>([^<]*)<\/title>/);
  const description = pick(html, /<meta name="description" content="([^"]*)"/);
  const canonical = /rel="canonical"/.test(html);
  const lang = pick(html, /<html[^>]*\slang="([^"]*)"/);
  const h1 = [...html.matchAll(/<h1[ >]/g)].length;
  const add = (reason) => issues.push({ page, reason, noindex });

  if (!title) add("tanpa <title>");
  else if (title.length > TITLE_MAX) add(`judul ${title.length} karakter (maks ${TITLE_MAX})`);
  if (!description) add("tanpa meta description");
  else {
    if (description.length < DESC_MIN) add(`deskripsi ${description.length} karakter (min ${DESC_MIN})`);
    if (description.length > DESC_MAX) add(`deskripsi ${description.length} karakter (maks ${DESC_MAX})`);
  }
  if (!noindex && !canonical) add("tanpa canonical padahal halaman diindeks");
  if (lang !== "id") add(`lang="${lang ?? ""}" (harus id)`);
  if (h1 !== 1) add(`${h1} <h1> (harus 1)`);

  if (!noindex) {
    for (const [field, value] of [
      ["title", title],
      ["description", description],
    ]) {
      if (!value) continue;
      if (seen[field].has(value)) {
        add(`${field} sama dengan ${seen[field].get(value)}`);
      } else {
        seen[field].set(value, page);
      }
    }
  }
}

const real = issues.filter((issue) => !issue.noindex);
console.log(`${pages.length} halaman diperiksa`);

if (real.length === 0) {
  console.log("Metadata dan struktur heading sesuai batas.");
  process.exit(0);
}

console.log(`\n${real.length} masalah:`);
for (const { page, reason } of real) console.log(`  ${page}: ${reason}`);
process.exit(1);
