// Peta URL halaman konten -> tanggal `updated` dari frontmatter.
//
// Dipakai astro.config.mjs untuk mengisi <lastmod> di sitemap. Halaman yang
// tanggalnya tidak jelas (indeks, bab gabungan) sengaja dibiarkan tanpa
// lastmod daripada diberi tanggal tebakan.
import { readFileSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";

const SITE = "https://tahan-five.vercel.app";

function frontmatter(file) {
  const text = readFileSync(file, "utf8");
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([a-z]+):\s*"?([^"\n]*)"?\s*$/);
    if (field) fields[field[1]] = field[2];
  }
  return fields;
}

function collect(dir, prefix, pathFor) {
  const map = new Map();
  for (const name of readdirSync(dir)) {
    if (!name.endsWith(".md")) continue;
    const fields = frontmatter(join(dir, name));
    if (!fields.updated) continue;
    const id = basename(name, ".md");
    const path = pathFor(fields, id);
    if (path) map.set(`${SITE}${prefix}${path}/`, fields.updated);
  }
  return map;
}

export const lastmodByUrl = new Map([
  ...collect("./src/content/teknik", "/teknik/", (_fields, id) => id),
  ...collect("./src/content/artikel", "/catatan/", (fields, id) =>
    fields.type === "catatan" ? (fields.slug ?? id) : null,
  ),
  ...collect("./src/content/artikel", "/aliran/", (fields) =>
    fields.type === "aliran" ? fields.slug : null,
  ),
]);
