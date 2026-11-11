# TAHAN

Panduan bertahan diri. BJJ, Judo, gulat, dan Krav Maga disusun menurut jarak,
bukan menurut aliran.

> Bela diri bukan soal menang. Soal pulang utuh.

## Status

Edisi **1.0.0** — situs lengkap, 34 halaman statis.

- `/` — beranda
- `/panduan` — 5 bab menurut jarak
- `/teknik` — 12 teknik inti dengan langkah, kesalahan umum, dan batas aman
- `/aliran` — 4 profil aliran
- `/catatan` — 7 artikel
- `/katalog` — satu daftar untuk seluruh isi situs
- `/kuncian`, `/latihan`, `/glosarium`, `/sumber`, `/tentang`

Modul 1.1.0 (pertahanan perempuan dan panduan keselamatan anak) belum ada.

## Jalankan

Butuh Node 22+ dan pnpm.

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:4321`.

```bash
pnpm check   # TypeScript + Astro
pnpm build   # output statis di dist/
pnpm preview # cek hasil build
```

## Alur kerja perubahan

Setiap perubahan lewat pull request, termasuk di repo sendiri. Bukan birokrasi:
PR adalah tempat `pnpm check` dan `pnpm build` berjalan otomatis, dan `main`
tetap bisa dibaca sebagai daftar perubahan yang sudah lolos.

1. Branch dari `main`, namanya `fix/<ringkas>`, `feat/<ringkas>`, atau
   `chore/<ringkas>`.
2. Commit kecil dengan pesan bahasa Indonesia yang menyebut alasannya.
3. Push branch, buka PR. Template terisi otomatis dari
   `.github/pull_request_template.md`.
4. CI (`.github/workflows/ci.yml`) menjalankan `pnpm install --frozen-lockfile`,
   `pnpm check`, dan `pnpm build` di Node 22.
5. Merge setelah CI hijau. Jangan commit langsung ke `main`.

## Stack

- Astro 6, output statis
- TypeScript strict
- CSS vanilla, tanpa framework UI
- Font self-host (.woff2 di `public/fonts`): Barlow Condensed, Newsreader,
  IBM Plex Mono
- Sitemap otomatis (`@astrojs/sitemap`), dirujuk dari `robots.txt`
- Diagram SVG inline, bukan foto atau gambar AI

## Deploy

- Produksi: https://tahan-five.vercel.app
- Repo: https://github.com/kandarlubis31/tahan
- Vercel project `tahan` di akun pribadi `kandarlubis31`.
- Push ke `main` otomatis memicu deploy produksi.

`vercel.json` memakai framework Astro, build `pnpm build`, output `dist`.
Tidak ada adapter; situs sepenuhnya statis. Domain produksi juga diisi sebagai
`site` di `astro.config.mjs` untuk canonical dan URL OG absolute.

## Struktur

```
src/
  components/        komponen UI dan diagram SVG
  content/           collection teknik dan artikel (Markdown)
  layouts/           BaseLayout
  pages/             rute statis dan dinamis
  scripts/           progres localStorage
  styles/global.css
public/
  fonts/
  favicon.svg
  og.png
  robots.txt
vercel.json
```

## Aturan konten

- Netral, tanpa persona "saya" atau "kami". Tanpa emoji.
- Setiap teknik punya langkah, "kalau gagal", kesalahan umum, latihan, dan
  batas aman.
- Teknik berpasangan hanya di matras dan dengan pengawasan.
- Tidak ada tutorial disarm senjata tajam, kuncian kaki tingkat lanjut, atau
  serangan yang bertujuan melumpuhkan.
- Materi anak ditujukan untuk orang tua/wali, bukan anak.
- Tidak ada foto stok, foto teknik, atau gambar AI. Diagram garis SVG.

## Lisensi

Belum ditentukan. Tanpa berkas lisensi, hak cipta tetap pada penulis; repo
publik bukan berarti bebas dipakai ulang. Review teknis konten masih perlu
dilanjutkan.
