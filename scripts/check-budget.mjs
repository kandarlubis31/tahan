// Menegakkan tabel Performa di CONTEXT.md terhadap hasil build di dist/.
// Jalankan setelah `pnpm build`: node scripts/check-budget.mjs
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { gzipSync } from "node:zlib";

const KB = 1024;

const budgets = [
  {
    label: "HTML per halaman (gzip)",
    limit: 15 * KB,
    // CSS di-inline, jadi HTML mentah selalu lebih besar dari 30 KB. Yang
    // dibatasi adalah ukuran yang benar-benar dikirim di jaringan.
    measure: (files) =>
      files
        .filter((file) => file.endsWith(".html"))
        .reduce(
          (worst, file) => {
            const bytes = gzipSync(readFileSync(file), { level: 9 }).length;
            return bytes > worst.bytes ? { bytes, file } : worst;
          },
          { bytes: 0, file: "" },
        ),
    detail: (worst) => `terbesar ${worst.file}`,
  },
  {
    label: "Font total",
    limit: 110 * KB,
    measure: (files) => sum(files.filter((file) => file.endsWith(".woff2"))),
  },
  {
    label: "CSS total",
    limit: 25 * KB,
    measure: (files) => sum(files.filter((file) => file.endsWith(".css"))),
    detail: () => "0 berarti CSS di-inline penuh",
  },
  {
    label: "JS total",
    limit: 8 * KB,
    measure: (files) => sum(files.filter((file) => file.endsWith(".js"))),
  },
];

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function sum(files) {
  return files.reduce((total, file) => total + statSync(file).size, 0);
}

const files = walk("dist");
const rows = budgets.map((budget) => {
  const measured = budget.measure(files);
  const bytes = typeof measured === "number" ? measured : measured.bytes;
  return {
    label: budget.label,
    bytes,
    limit: budget.limit,
    ok: bytes <= budget.limit,
    detail: budget.detail?.(measured) ?? "",
  };
});

const pad = (text, width) => text.padEnd(width);
console.log(pad("Ukuran", 24) + pad("Hasil", 18) + "Batas");
for (const row of rows) {
  const result = `${(row.bytes / KB).toFixed(1)} KB`;
  const limit = `${(row.limit / KB).toFixed(0)} KB`;
  const mark = row.ok ? "ok" : "LEWAT";
  const note = row.detail ? `  (${row.detail})` : "";
  console.log(
    `${pad(row.label, 24)}${pad(result, 10)}${pad(limit, 8)}${mark}${note}`,
  );
}

const failed = rows.filter((row) => !row.ok);
if (failed.length > 0) {
  console.error(
    `\n${failed.length} budget lewat: ${failed
      .map((row) => row.label)
      .join(", ")}. Perbaiki atau perbarui tabel Performa di CONTEXT.md.`,
  );
  process.exit(1);
}

console.log("\nSemua budget di bawah batas CONTEXT.md.");
