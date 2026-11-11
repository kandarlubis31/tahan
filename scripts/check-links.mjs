// Cek tautan internal dan anchor di hasil build.
//
//   node scripts/check-links.mjs
//
// Tautan luar tidak diperiksa: butuh jaringan dan bikin CI rapuh.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const pages = walk(DIST).filter((file) => file.endsWith(".html"));

/** Petakan URL halaman (seperti /teknik/shrimp/) ke file HTML-nya. */
function pageFile(url) {
  const clean = url.replace(/\/+$/, "");
  const candidate = join(DIST, clean, "index.html");
  if (existsSync(candidate)) return candidate;
  const direct = join(DIST, clean);
  if (existsSync(direct) && statSync(direct).isFile()) return direct;
  if (existsSync(`${direct}.html`)) return `${direct}.html`;
  return null;
}

const idsByPage = new Map();
function idsOf(file) {
  if (!idsByPage.has(file)) {
    const html = readFileSync(file, "utf8");
    const ids = new Set(
      [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]),
    );
    idsByPage.set(file, ids);
  }
  return idsByPage.get(file);
}

const broken = [];
let links = 0;
let anchors = 0;

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  for (const [tag] of [...html.matchAll(/<a\b[^>]*>/g)].map((match) => [
    match[0],
  ])) {
    const href = tag.match(/\shref="([^"]*)"/)?.[1];
    if (!href || href.startsWith("http") || href.startsWith("mailto:")) continue;
    if (href.startsWith("#")) {
      anchors += 1;
      const id = href.slice(1);
      if (id && !idsOf(page).has(id)) {
        broken.push({ page, href, reason: "anchor tidak ada di halaman ini" });
      }
      continue;
    }
    links += 1;
    const [path, hash] = href.split("#");
    const target = pageFile(path);
    if (!target) {
      broken.push({ page, href, reason: "halaman tujuan tidak ada" });
      continue;
    }
    if (hash) {
      anchors += 1;
      if (!idsOf(target).has(hash)) {
        broken.push({ page, href, reason: "anchor tidak ada di halaman tujuan" });
      }
    }
  }
}

console.log(`${pages.length} halaman, ${links} tautan internal, ${anchors} anchor`);

if (broken.length === 0) {
  console.log("Tidak ada tautan atau anchor yang mati.");
  process.exit(0);
}

console.log(`\n${broken.length} tautan bermasalah:`);
for (const { page, href, reason } of broken) {
  console.log(`  ${page} -> ${href}  (${reason})`);
}
process.exit(1);
