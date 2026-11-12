// Beri awalan slug pada id judul artikel prinsip.
//
// Bab 00 merender empat artikel prinsip dalam satu halaman. Setiap artikel
// punya bagian "Batas", jadi tanpa awalan halaman itu berisi empat
// `<h2 id="batas">` dan tautan `#batas` menunjuk bagian yang salah. Artikel
// prinsip tidak punya halaman sendiri, jadi id berscope aman.
//
// Id dibuat di sini, bukan menunggu rehype-slug, karena plugin pengguna
// berjalan sebelum rehype-slug menambahkan id.
const text = (node) =>
  (node.value ?? "") + (node.children ?? []).map(text).join("");

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-");

export function rehypeScopeHeadingIds() {
  return (tree, file) => {
    const frontmatter = file.data?.astro?.frontmatter;
    if (frontmatter?.type !== "prinsip" || !frontmatter.slug) return;

    const scope = `${frontmatter.slug}-`;
    const used = new Map();

    const visit = (node) => {
      if (/^h[1-6]$/.test(node.tagName ?? "") && !node.properties?.id) {
        const base = `${scope}${slugify(text(node))}`;
        const seen = used.get(base) ?? 0;
        used.set(base, seen + 1);
        node.properties = node.properties ?? {};
        node.properties.id = seen === 0 ? base : `${base}-${seen}`;
      }
      for (const child of node.children ?? []) visit(child);
    };

    visit(tree);
  };
}
