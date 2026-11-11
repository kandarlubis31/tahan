"""Pastikan setiap karakter yang dipakai hasil build ada di subset font.

Jalankan setelah `pnpm build`:

    python scripts/check-glyphs.py

Karakter yang hilang akan dirender font sistem. Itu bukan selalu bug: panah
pada tautan memang sengaja memakai fallback sejak font aslinya tidak punya
glyph tersebut. Karakter seperti itu didaftarkan di FALLBACK_OK.
"""
from pathlib import Path
import sys

from fontTools.ttLib import TTFont

FALLBACK_OK = {
    "\u2192": "panah .link-arrow, memang dari font sistem sejak awal",
}

root = Path(__file__).resolve().parent.parent
dist = root / "dist"
fonts = sorted((root / "public" / "fonts").glob("*.woff2"))

if not dist.is_dir():
    sys.exit("dist/ belum ada. Jalankan pnpm build dulu.")
if not fonts:
    sys.exit("Tidak ada woff2 di public/fonts.")

used = set()
pages = list(dist.rglob("*.html"))
for page in pages:
    text = page.read_text(encoding="utf-8")
    used.update(ch for ch in text if ord(ch) > 0x2E)

coverage = {}
for font in fonts:
    tt = TTFont(font)
    cmap = set()
    for table in tt["cmap"].tables:
        cmap.update(chr(code) for code in table.cmap)
    coverage[font.name] = cmap
    tt.close()

problems = []
for ch in sorted(used):
    if ch in FALLBACK_OK:
        continue
    missing = [name for name, cmap in coverage.items() if ch not in cmap]
    if missing:
        problems.append((f"U+{ord(ch):04X} {ch!r}", missing))

total = sum(font.stat().st_size for font in fonts)
print(f"{len(used)} karakter unik dipakai di {len(pages)} halaman")
print(f"{len(fonts)} file font diperiksa, total {total} B")

if not problems:
    print("Semua karakter tersedia di setiap face.")
    sys.exit(0)

print("\nKarakter yang tidak ada di sebagian face:")
for name, missing in problems:
    print(f"  {name}: {', '.join(missing)}")
sys.exit(1)
