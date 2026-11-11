# TAHAN

Panduan bertahan diri. BJJ, Judo, gulat, dan Krav Maga disusun menurut jarak,
bukan menurut aliran.

> Bela diri bukan soal menang. Soal pulang utuh.

## Status

Edisi **1.0.0** — fase 1 (vertical slice).

Halaman yang sudah ada:

- `/` — beranda
- `/panduan` — indeks bab
- `/panduan/04-tanah` — Bab 04 Tanah
- `/teknik` — indeks 12 teknik
- `/teknik/shrimp` — halaman teknik shrimp + 3 diagram SVG
- `/tentang`
- `/404`

Belum ada: bab 00-03, teknik lain, profil aliran, latihan, glosarium, sumber,
modul 1.1.0.

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

## Stack

- Astro 6, output statis
- TypeScript strict
- CSS vanilla, tanpa framework UI
- Font self-host: Barlow Condensed, Newsreader, IBM Plex Mono
- Diagram SVG inline, bukan foto atau gambar AI

## Deploy ke Vercel

Repo sudah disiapkan untuk Vercel:

- `vercel.json` memakai framework Astro, build `pnpm build`, output `dist`.
- `pnpm-lock.yaml` ada di root project, jadi Vercel bisa memakai pnpm.
- Tidak perlu adapter; situs sepenuhnya statis.

Langkah:

1. Push repo ke GitHub sendiri.
2. Di Vercel: **Add New → Project → Import Git Repository**.
3. Pilih repo, biarkan preset Astro terdeteksi.
4. Deploy.

Domain belum dikunci. Setelah dapat domain, isi `site` di `astro.config.mjs`
supaya canonical dan sitemap bisa dibuat.

## Struktur

```
src/
  components/
    diagrams/ShrimpFigure.astro
    Figure.astro
    RangeScale.astro
    SafetyBox.astro
    StepList.astro
    SiteHeader.astro
    SiteFooter.astro
  layouts/BaseLayout.astro
  pages/
    index.astro
    panduan/index.astro
    panduan/04-tanah.astro
    teknik/index.astro
    teknik/shrimp.astro
    tentang.astro
    404.astro
  styles/global.css
public/
  favicon.svg
  robots.txt
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

Belum ditentukan. Jangan deploy publik sebelum lisensi dan review teknis
selesai.
