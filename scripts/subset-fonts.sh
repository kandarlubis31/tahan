#!/usr/bin/env bash
# Regenerate the woff2 subsets in public/fonts from the original font files.
#
#   scripts/subset-fonts.sh /path/to/font-asli
#
# The originals (full Latin) are not committed; keep them outside the repo.
# Set is intentionally narrow: ASCII, common Latin-1 accents, typographic
# punctuation. Everything else falls back to the system font.
set -euo pipefail

src="${1:-}"
if [[ -z "$src" ]]; then
  echo "Pakai: scripts/subset-fonts.sh <direktori-font-asli>" >&2
  echo "Direktori harus berisi 7 file woff2 dengan nama yang sama." >&2
  exit 2
fi

if ! command -v pyftsubset >/dev/null 2>&1; then
  echo "pyftsubset tidak ada. Pasang dulu: pip install fonttools brotli" >&2
  exit 2
fi

# ASCII + Latin-1 minus Æ Ø æ ø ß ð þ + tipografi (en/em dash, kutip lengkung,
# bullet, ellipsis). Line break sengaja satu baris supaya mudah dibandingkan
# dengan CONTEXT.md.
unicodes="U+0020-007E,U+00A0,U+00B7,U+00C0-00C5,U+00C7-00CF,U+00D1-00D6,U+00D9-00DC,U+00E0-00E5,U+00E7-00EF,U+00F1-00F6,U+00F9-00FC,U+2013-2014,U+2018-201D,U+2022,U+2026"

faces=(
  barlow-condensed-600
  barlow-condensed-700
  ibm-plex-mono-400
  ibm-plex-mono-500
  newsreader-400
  newsreader-400-italic
  newsreader-500
)

for face in "${faces[@]}"; do
  input="$src/$face.woff2"
  if [[ ! -f "$input" ]]; then
    echo "Tidak ada: $input" >&2
    exit 1
  fi
  pyftsubset "$input" \
    --unicodes="$unicodes" \
    --layout-features='*' \
    --flavor=woff2 \
    --output-file="public/fonts/$face.woff2"
  printf '%-26s %6s B\n' "$face.woff2" "$(wc -c <"public/fonts/$face.woff2" | tr -d ' ')"
done

echo
echo "Total: $(cat public/fonts/*.woff2 | wc -c | tr -d ' ') B"
echo "Cek cakupan glyph: python scripts/check-glyphs.py"
