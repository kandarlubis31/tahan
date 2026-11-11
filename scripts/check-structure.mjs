// Cek struktur HTML yang dipakai pembaca layar dan tautan anchor.
//
//   node scripts/check-structure.mjs
//
// Semua pemeriksaan di sini tidak butuh browser: id ganda, satu <main>, tautan
// "lewati ke isi", nama aksesibel tombol dan tautan, serta urutan judul.
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = "dist";

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const plain = (html) =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

const issues = [];
const pages = walk(DIST).filter((file) => file.endsWith(".html"));

for (const file of pages) {
  const html = readFileSync(file, "utf8");
  const page = relative(DIST, file).replace(/\\/g, "/");
  const add = (reason) => issues.push({ page, reason });

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) add(`id "${id}" dipakai lebih dari sekali`);
    seen.add(id);
  }

  const mains = [...html.matchAll(/<main\b/g)].length;
  if (mains !== 1) add(`${mains} <main> (harus 1)`);

  const skip = html.match(/<a class="skip"[^>]*href="#([^"]+)"/);
  if (!skip) add('tanpa tautan "lewati ke isi"');
  else if (!seen.has(skip[1])) add(`tautan lewati menuju #${skip[1]} yang tidak ada`);

  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="[^"]*"/.test(tag)) add("gambar tanpa alt");
  }

  for (const [, attributes, body] of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
    if (!plain(body) && !/aria-label=/.test(attributes)) add("tautan tanpa nama aksesibel");
  }

  for (const [, attributes, body] of html.matchAll(
    /<button\b([^>]*)>([\s\S]*?)<\/button>/g,
  )) {
    if (!plain(body) && !/aria-label=/.test(attributes)) add("tombol tanpa nama aksesibel");
  }

  for (const [, inner] of html.matchAll(/<nav\b[^>]*>([\s\S]*?)<\/nav>/g)) {
    const current = [...inner.matchAll(/aria-current="page"/g)].length;
    if (current > 1) add(`${current} tautan bertanda aktif dalam satu navigasi`);
  }

  let previous = 0;
  for (const [, level] of html.matchAll(/<h([1-6])\b/g)) {
    const depth = Number(level);
    if (previous && depth - previous > 1) add(`judul melompat dari h${previous} ke h${depth}`);
    previous = depth;
  }
}

console.log(`${pages.length} halaman diperiksa`);

if (issues.length === 0) {
  console.log("Struktur HTML dan nama aksesibel sesuai.");
  process.exit(0);
}

for (const issue of issues) console.error(`  ${issue.page}: ${issue.reason}`);
console.error(`${issues.length} masalah struktur.`);
process.exit(1);
