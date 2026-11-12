# CONTEXT — TAHAN

Dokumen serah-terima untuk AI yang melanjutkan proyek ini.
Baca `PLAN.md` untuk rencana lengkap. Dokumen ini merangkum keputusan,
batasan, dan langkah berikutnya supaya konteks tidak hilang.

---

## 1. Apa yang sedang dibangun

**TAHAN** — situs statis berbahasa Indonesia berisi panduan bertahan diri.

Isinya teknik dari empat aliran:

- Brazilian Jiu-Jitsu (BJJ)
- Judo
- Gulat (wrestling)
- Krav Maga

Yang membedakan: materi disusun menurut **jarak**, bukan menurut aliran.
Pembaca diajak berpikir "saya sekarang di jarak mana, dan apa yang saya
butuhkan?" bukan "aliran mana yang paling hebat?".

Situs ini bukan blog pribadi, bukan jurnal perjalanan belajar, dan bukan
klaim sebagai instruktur. Bentuknya artikel manual: ada tesis, konteks,
langkah, batas aman, dan sumber.

Tagline:

> Bela diri bukan soal menang. Soal pulang utuh.

---

## 2. Status proyek

- Fase: **1 selesai (vertical slice)**, **fase 2 selesai untuk 12 teknik
  inti**, **fase 3 selesai untuk 7 artikel, 4 profil aliran, rujukan
  kuncian, 3 rutinitas, dan glosarium** — semua artikel sudah masuk
  content collection. Penanda progres localStorage dan OG image 1200x630
  juga sudah aktif.
- Rilis: **v1.0.0 core**, lalu **v1.1.0 modul**. Tidak ada v2 dalam rencana.
- Folder: `C:\Users\KandarLubis\Desktop\Project\nodejs\bukgebuk`
- Sudah ada: `PLAN.md`, `CONTEXT.md`, scaffold Astro 6, token, font,
  komponen, content collection Zod (teknik, artikel), rute dinamis
  `/teknik/[slug]`, 12 halaman teknik, 5 halaman bab, indeks teknik,
  halaman aliran, catatan, glosarium, latihan, sumber, tentang, katalog, 404,
  penanda progres localStorage di halaman teknik.
- Build terakhir: 34 halaman, 0 error; `pnpm check` 45 file, 0 error.
- Lighthouse mobile (2026-11-12): performance 100, accessibility 100,
  best-practices 100, SEO 100, CLS 0, TBT 0 ms. LCP: beranda 1.37 s,
  `panduan/03-clinch/` 1.36 s, `teknik/shrimp/` 1.53 s,
  `catatan/krav-maga-di-film/` 1.66 s (median 2–3 run). Tiga dari empat
  template sudah di bawah target 1.5 s; halaman catatan panjang masih di
  atas target, lihat §11.
  Perbaikan yang menyusul audit: `--muted` digelapkan `#6e675a` → `#6a6357`
  karena kontras di atas `--paper-2` hanya 4.37:1 (wajib 4.5:1).
- LCP 1.7 s → 1.37 s berasal dari dua hal: (1) font di-subset ulang
  145 KB → 100 KB (156 glyph per file: ASCII, Latin-1 minus `ÆØæøßðþ`, tanda
  baca tipografi), (2) CSS inline penuh lewat `inlineStylesheets: 'always'`
  di `astro.config.mjs`, jadi tidak ada stylesheet render-blocking. Efek
  samping: HTML mentah ikut membesar (beranda 39,6 KB, halaman dalam ~46–52
  KB), tetapi terkompresi hanya ~9–10 KB per halaman. Kalau menambah
  karakter di luar set subset, regenerate font dulu (perintah ada di §11).
- Sitemap aktif lewat `@astrojs/sitemap` (`/sitemap-index.xml`), dirujuk
  dari `robots.txt`, dan 404 tidak ikut. JSON-LD `WebSite`/`Organization`
  ada di setiap halaman; halaman teknik memakai `TechArticle`, catatan dan
  aliran memakai `Article`.
- Font self-host manual: hanya `.woff2` di `public/fonts`, dua di antaranya
  di-preload. Paket `@fontsource` sudah dilepas.
- Katalog project: entri `tahan` sudah masuk `Desktop/Project/catalog`
  (JSON, Markdown, dashboard, dan override).
- OG image: `public/og.png`, 1200x630, 54 KB. Meta OG/Twitter ada di
  `BaseLayout`. `site` sudah diisi, jadi canonical dan URL OG absolute.
- Print: tombol "Cetak halaman" di aside teknik dan tautan "Cetak" di footer.
  CSS print menyembunyikan navigasi, tetapi mempertahankan langkah dan
  daftar sumber.
- Repo: https://github.com/kandarlubis31/tahan (publik).
- Produksi: https://tahan-five.vercel.app, project Vercel `tahan` di akun
  pribadi `kandarlubis31`. Hanya pemilik; tanpa anggota proyek lain.
- CI: push ke `main` otomatis deploy produksi lewat integrasi GitHub.
- Node lokal: v25.5.0 (package.json engines 22.x)
- pnpm: 12.5.1
- Stack: **Astro 6**, output statis, TypeScript strict, CSS vanilla.
- Storage C: sedang ketat (sekitar 8 GB bebas). Jangan tambah dependensi
  berat. Jangan install Playwright/Cypress untuk v1.0.0.

---

## 3. Keputusan yang sudah dikunci

Jangan ubah tanpa bertanya ke user.

1. **Nama publik:** TAHAN.
2. **Gaya:** artikel manual, netral, tanpa persona penulis.
3. **Stack:** Astro 6 + CSS vanilla, static output. Tanpa React, tanpa
   Tailwind.
4. **Struktur:** per jarak (Jauh, Berdiri, Clinch, Tanah), bukan per aliran.
5. **Cakupan:** BJJ, Judo, gulat, Krav Maga. Keempatnya harus terlihat,
   bukan hanya BJJ.
6. **Scope v1.0.0:** 12 teknik inti, 4 profil aliran, 7 artikel, 1 halaman
   rujukan kuncian, 3 rutinitas latihan, glosarium, tentang, sumber, 404.
7. **Scope v1.1.0:** Modul Pertahanan Perempuan + Panduan Keselamatan Anak
   untuk Orang Tua. Tidak masuk v1.0.0.
8. **Narasi:** setiap bab punya adegan pembuka 3-5 kalimat. Film action
   dipakai sebagai pembanding, bukan sumber teknik.
9. **Visual:** manual lapangan, kertas hangat, tinta gelap, satu aksen bata,
   tipografi besar, garis rambut, tanpa emoji dan tanpa foto stok. Gambar
   teknik berupa diagram SVG, bukan foto atau gambar AI.
10. **Repo dan deploy:** GitHub publik `kandarlubis31/tahan`, terhubung ke
    Vercel pribadi. AI boleh commit dan push untuk perubahan yang diminta.

---

## 4. Konsep inti

| Zona | Jarak | Pertanyaan | Isi |
|---|---|---|---|
| 0 Jauh | Sebelum kontak | Bisa keluar? | Sikap siap, pagar tangan, membaca situasi |
| 1 Berdiri | Jarak pukul | Bisa menghentikan? | Palm strike, tendangan, tangkisan 360 |
| 2 Clinch | Sudah menempel | Bisa melepas? | Lepas cengkeraman, bantingan, takedown, sprawl |
| 3 Tanah | Sudah jatuh | Bisa berdiri lagi? | Shrimp, bridge, stand-up, guard, lepas mount |

Peran tiap aliran:

- **Krav Maga** — jarak jauh dan berdiri: sikap, palm strike, tendangan,
  tangkisan 360. Bukan jaminan menang; disarm senjata tidak diajarkan lewat
  teks.
- **Judo** — clinch: cengkeraman, merusak keseimbangan, bantingan, ukemi.
  Bukan ajakan membanting kepala ke aspal.
- **Gulat** — clinch: kontrol tubuh, double leg, sprawl. Bukan solusi untuk
  lawan bersenjata.
- **BJJ** — tanah: shrimp, bridge, guard, lepas mount, stand-up. Bukan
  "bela diri paling lengkap"; cekikan tetap berbahaya.

BJJ lebih banyak di bab tanah karena di situlah keahliannya. Judo dan gulat
lebih banyak di clinch. Krav Maga mengisi jarak berdiri dan mendapat panggung
naratif sendiri lewat profil aliran dan artikel film action. Pembagian ini
disengaja, bukan karena salah satu aliran lebih hebat.

---

## 5. Copy inti

Kicker:

> PANDUAN BERTAHAN DIRI / EDISI 01

H1:

> Bela diri bukan soal menang.
> Soal pulang utuh.

Deck:

> Panduan lapangan untuk membaca jarak, memilih respons, dan keluar dari
> situasi. Teknik dari BJJ, Judo, gulat, dan Krav Maga, dijelaskan untuk
> orang biasa.

CTA:

- `Mulai dari prinsip`
- `Buka peta jarak`

Judul bagian: "Jarak menentukan jawaban.", "Bab", "Aliran", "Catatan",
"Latihan mingguan", "Yang perlu dikenali", "Batas aman", "Sumber".

---

## 6. Konten v1.0.0

### 12 teknik inti

**Bab 02 — Berdiri**
1. Palm strike (Krav Maga)
2. Tendangan depan ke selangkangan (Krav Maga)
3. Tangkisan 360 (Krav Maga)

**Bab 03 — Clinch**
4. Lepas cengkeraman (Judo/gulat)
5. Bantingan pinggul / O-goshi (Judo)
6. Double leg takedown (Gulat)
7. Sprawl: bertahan dari double leg (Gulat)

**Bab 04 — Tanah**
8. Shrimp / hip escape (BJJ)
9. Bridge dan roll / upa (BJJ)
10. Technical stand-up (BJJ)
11. Bertahan di guard (BJJ)
12. Lepas dari mount (BJJ)

Ukemi diajarkan sebagai prasyarat di halaman O-goshi, bukan halaman terpisah.

### Artikel

**Bab 00 — Prinsip (4)**
- Hindari dulu.
- Jarak adalah keputusan.
- Posisi sebelum kuncian.
- Tap bukan kalah.

**Bab 01 — Jauh (1)**
- Sikap siap dan pagar tangan.

**Catatan (2)**
- "Krav Maga di film: apa yang benar dan apa yang dilebih-lebihkan."
- "Soal ngesot: guard pull hanya untuk aturan sport."

### Profil aliran (4)

- Krav Maga: dari lapangan ke layar action.
- Judo: melempar tanpa ikut jatuh.
- Gulat: kontrol tanpa kain.
- BJJ: bertarung dari bawah.

### Lainnya

- Rujukan "Kuncian yang perlu dikenali": RNC, armbar, triangle, kimura.
  Fokus pada mekanisme, bahaya, dan tap. Bukan tutorial menyerang.
- 3 rutinitas: dasar lantai, berdiri dan jarak, mobilitas.
- Glosarium sekitar 30 istilah.
- Halaman tentang, sumber, disclaimer, 404.

### Modul v1.1.0

**Modul Pertahanan Perempuan** (`/modul/perempuan`)

- 5 skenario: ditindih, dicekik dari bawah, rambut ditarik, tangan
  ditangkap, ditarik atau dipaksa pergi.
- 3 teknik baru: lepas rambut, lepas pegangan tangan, bertahan dari cekikan.
- 2 artikel: "Setelah keluar" dan "Titik sasaran".
- Hierarki sasaran: latih telapak ke hidung/rahang, lutut/tendangan ke
  selangkangan, hentakan ke instep. Mata dan jakun hanya penjelasan risiko,
  bukan tutorial. Tidak diajarkan ke anak.
- Semua teknik core ditautkan, bukan diduplikasi.

**Panduan Keselamatan Anak untuk Orang Tua** (`/modul/orang-tua`)

- Untuk orang tua/wali, usia 8-12. Bukan halaman untuk anak membuka sendiri.
- 6 pelajaran: body autonomy, tricky people, lepas pegangan, teriak dan
  lari, kalau diangkat, cari orang dewasa aman dan ceritakan.
- Format: penjelasan singkat, latihan 5 menit, kartu cetak.
- Tanpa foto/video anak, tanpa ilustrasi menakutkan.

Aturan: escape-first, tanpa tutorial disarm, tanpa janji lumpuh, tanpa
victim-blaming, wajib review pengajar dan praktisi keamanan anak/psikolog.

---

## 7. Gaya menulis

### Struktur artikel

1. **Lead** — adegan konkret 3-5 kalimat.
2. **Konteks** — kenapa teknik ini bekerja, kapan dipakai, kapan tidak.
3. **Langkah** — instruksi langsung.
4. **Kegagalan** — apa yang terjadi kalau lawan merespons.
5. **Batas** — risiko, keselamatan, hal yang tidak diajarkan.

### Aturan suara

- Tidak memakai "saya" atau "kami".
- Tidak ada cerita personal.
- "Anda" dipakai hemat, maksimal sekali per paragraf.
- Instruksi memakai kalimat perintah tanpa subjek: "Tarik dagu", "Geser
  pinggul".
- Tidak ada "mari kita", "yuk", "sobat", atau sapaan akrab.
- Tidak ada pertanyaan retoris untuk membangun suasana.
- Tanpa emoji. Tanpa tanda seru.
- Setiap artikel minimal punya satu batas atau koreksi diri.

### Aturan narasi

- Adegan harus menyampaikan satu ide teknis. Kalau tidak, potong.
- Adegan adalah situasi, bukan klaim kejadian nyata.
- Film action boleh dipakai dengan pola "Di film, ... Di kehidupan nyata,
  ...". Film bukan sumber teknik.
- Klaim sejarah harus punya sumber.
- Jangan mengarang statistik.
- Akhiri adegan dengan pertanyaan teknis yang dijawab bagian berikutnya.

Contoh pembuka bab clinch:

> Di film, satu bantingan sudah cukup. Lawan terkapar, pahlawan berdiri,
> kamera berhenti. Di dunia nyata, lantai tidak empuk, keringat membuat
> cengkeraman licin, dan lawan tidak jatuh tepat di tempat yang direncanakan.
> Yang menentukan bukan bantingannya, tapi siapa yang masih berdiri
> setelahnya.

Contoh pembuka bab tanah:

> Semua orang bisa jatuh. Yang membedakan adalah tiga detik setelahnya:
> apakah tubuh langsung mengunci karena panik, atau pinggul mulai bergerak
> mencari ruang.

### Anti-slop

Yang tidak dipakai:

- Gradien ungu-biru, glassmorphism, blob, kartu bayangan.
- Foto stok orang berteriak di gym.
- Baris tiga kartu dengan ikon generik.
- Testimoni palsu, angka pembaca palsu.
- Teks hero "Tingkatkan dirimu ke level berikutnya".
- Animasi scroll, parallax, cursor effect.
- Emoji di mana pun, termasuk metadata.

---

## 8. Sistem visual

Arah: **manual lapangan**. Kertas hangat, tinta gelap, satu aksen bata,
tipografi yang bekerja, garis rambut, nomor bab besar.

### Palet

| Token | Nilai | Pakai |
|---|---|---|
| `--paper` | `#F4F1E8` | Latar utama |
| `--paper-2` | `#E9E3D5` | Bab clinch, blok catatan |
| `--ink` | `#17140F` | Teks, garis tebal |
| `--muted` | `#6E675A` | Metadata, keterangan |
| `--rule` | `#D5CEBE` | Garis 1px |
| `--accent` | `#B83A22` | Tautan, penanda, peringatan |
| `--accent-dark` | `#8A2A18` | Hover, teks aksen di kertas |
| `--mat` | `#17140F` | Bab tanah (band gelap) |
| `--mat-text` | `#F4F1E8` | Teks di band gelap |

Tidak ada putih murni, hitam murni, atau gradien.

### Tipografi

- **Display:** Barlow Condensed 600. Judul, nomor bab.
- **Body:** Newsreader 400/400 italic. Paragraf, deck, kutipan.
- **Label:** IBM Plex Mono 400/500. Kicker, metadata, tombol.

Font self-host (woff2 saja, di `public/fonts`), subset latin 156 glyph per
file (ASCII + Latin-1 minus `ÆØæøßðþ` + tanda baca tipografi), preload display
dan body.

### Layout dan komponen

- Container maksimum 1240px, 12 kolom, gutter 24px.
- Padding luar `clamp(20px, 4vw, 64px)`.
- Sudut kotak maksimum 2px. Tanpa shadow.
- Garis pemisah 1px.
- Tombol kotak, border 1px, teks mono uppercase; hover invert.
- Tag border 1px, mono 10px, uppercase, tanpa pil.
- Baris teknik: nomor mono, judul condensed, label asal, risiko berupa teks.
- Catatan pinggir: border kiri 2px accent.
- Kotak "Batas aman": border 1px accent.
- Fokus keyboard: outline 2px accent, offset 3px.

### Motif

- **Skala jarak**: garis horizontal dengan empat titik (Jauh, Berdiri,
  Clinch, Tanah). Muncul di beranda, halaman bab, dan halaman teknik.
- **Diagram garis**: sosok abstrak (kepala lingkaran, badan kotak, anggota
  garis), stroke 1.5px. Bukan ilustrasi manusia realistis, bukan foto.
- **Band gelap** untuk bab tanah. Bukan dark mode; penanda turun ke lantai.

### Ilustrasi

- v1.0.0 memakai diagram garis SVG, bukan foto, bukan gambar AI.
- Dua sosok abstrak: kepala lingkaran, badan kotak, anggota garis; stroke
  1.5px; peserta utama memakai aksen, lawan memakai tinta.
- Per teknik 2-4 frame: posisi awal, grip/frame, gerakan, hasil.
- Panah menunjukkan arah gerak atau tekanan. Label mono uppercase.
- Setiap gambar punya caption, nomor (`Gambar 04.2`), dan alt text yang
  menjelaskan aksi.
- Harus terbaca dalam grayscale untuk cetak.
- Tanpa wajah, tanpa ciri gender, tanpa detail tubuh berlebihan.
- Budget v1.0.0: 1 skala jarak, 4 peta posisi, 24-30 frame teknik.
- Mulai dari shrimp sebagai pilot; jangan produksi semua diagram sebelum
  gaya disetujui.
- Modul perempuan memakai figur abstrak yang sama; panduan orang tua memakai
  ikon dan kartu, tanpa foto anak.
- Foto teknik bukan untuk v1.0.0. Kalau nanti dipakai: pengajar sebagai
  model, latar netral, izin tertulis, 2-3 sudut, hanya untuk posisi.

### Gerak

- 140-200ms, ease-out.
- Hanya hover, buka-tutup, penanda aktif.
- Tanpa scroll reveal, parallax, atau animasi dekoratif.
- Hormati `prefers-reduced-motion`.

### Print

Halaman teknik harus bisa dicetak bersih: navigasi/footer hilang, langkah
tidak terpotong, sumber tetap terlihat.

---

## 9. Arsitektur dan teknis

### Rute

```
/                         Beranda
/panduan                  Daftar bab + progres
/panduan/[bab]            Halaman bab
/teknik/[slug]            Halaman teknik
/aliran                   Daftar aliran
/aliran/[slug]            Profil aliran
/catatan/[slug]           Artikel dan esai
/latihan                  Rutinitas latihan
/glosarium                Istilah
/tentang                  Metode, transparansi, disclaimer
/sumber                   Bacaan dan referensi
/modul                    Daftar modul (v1.1.0)
/modul/perempuan          Modul Pertahanan Perempuan (v1.1.0)
/modul/orang-tua          Panduan Keselamatan Anak (v1.1.0)
/404
```

Navigasi: `Panduan · Aliran · Latihan · Glosarium · Tentang`.
Modul ditautkan dari beranda dan footer, bukan navigasi utama.

### Struktur folder target

```
src/
  content.config.ts
  content/
    teknik/*.md
    artikel/*.md
  components/
    SiteHeader.astro
    SiteFooter.astro
    RangeScale.astro
    Figure.astro
    ChapterRow.astro
    TechniqueRow.astro
    StepList.astro
    SafetyBox.astro
    MarginNote.astro
    ProgressToggle.astro
  layouts/
    BaseLayout.astro
    ArticleLayout.astro
    TechniqueLayout.astro
  pages/
    index.astro
    panduan/index.astro
    panduan/[bab].astro
    teknik/[slug].astro
    aliran/index.astro
    aliran/[slug].astro
    catatan/[slug].astro
    latihan.astro
    glosarium.astro
    tentang.astro
    sumber.astro
    404.astro
  styles/
    global.css
public/
  fonts/
```

### Content collection

Teknik memakai frontmatter tervalidasi Zod:

- title, chapter, order, range, origin, goal, level, risk
- partner, mat
- summary, principle
- steps: `{ cue, detail }[]`
- failure, mistakes, drill, safety
- sources, related, updated

Artikel memakai:

- type: `prinsip | aliran | catatan`
- title, slug, order, dek, lead
- sources, updated, related
- discipline untuk profil aliran

Schema harus menolak halaman teknik yang tidak punya `safety` atau `sources`.

### Performa

| Metrik | Target |
|---|---|
| HTML per halaman | < 30 KB |
| CSS total | < 25 KB |
| JS v1.0.0 | < 8 KB |
| Font | < 180 KB |
| LCP mobile 4G | < 1.5 s |
| CLS | 0 |
| Lighthouse mobile | >= 95 performance, a11y, SEO |

Catatan ukuran HTML: sejak CSS di-inline penuh (§2), HTML mentah memuat CSS
27 KB utuh, jadi berkas mentah beranda 39,6 KB dan halaman dalam 46–52 KB.
Yang dibatasi adalah ukuran yang dikirim di jaringan: HTML gzip terbesar saat
ini 13,1 KB (`/panduan/00-prinsip/`). Patokan gzip-nya 15 KB per halaman.

Angka di tabel ini dijaga otomatis. `pnpm build && pnpm check:budget`
(`scripts/check-budget.mjs`) mengukur HTML gzip terbesar, total font, total
CSS, dan total JS, lalu keluar dengan exit 1 kalau ada yang lewat. CI
menjalankan langkah itu setelah build, jadi budget tidak bisa dilanggar tanpa
ketahuan.

Metadata dijaga `pnpm check:meta` (`scripts/check-meta.mjs`): judul maks 65
karakter termasuk akhiran "— TAHAN", deskripsi 60–160 karakter, canonical ada
untuk halaman yang diindeks, `lang="id"`, tepat satu `<h1>`, dan tidak ada
judul atau deskripsi kembar antarhalaman. Temuan pertama sudah diperbaiki:
judul catatan Krav Maga dipendekkan, dua dek artikel ditambah satu klausa.

Tautan juga dijaga: `pnpm check:links` (`scripts/check-links.mjs`) membaca
`dist/`, memastikan setiap tautan internal menuju halaman yang ada, dan
memastikan setiap `#anchor` benar-benar ada di halaman tujuan. Tautan luar
tidak diperiksa karena butuh jaringan. Kondisi awal: 34 halaman, 639 tautan
internal, 124 anchor, tanpa temuan.

Structured data dijaga `pnpm check:jsonld` (`scripts/check-jsonld.mjs`).
Setiap halaman yang diindeks harus punya satu blok JSON-LD yang bisa
di-parse, `@context` schema.org, dan node bertipe jelas: `WebSite`,
`Organization`, satu artikel (`Article`/`TechArticle`), dan `BreadcrumbList`
kalau ada remah roti. Artikel wajib punya `headline`, `description`,
`dateModified` berformat `YYYY-MM-DD`, `image` absolut, `author`, dan
`publisher`; remah roti wajib berurutan 1..n dan butir terakhirnya harus
halaman itu sendiri. Penulisnya `Organization` TAHAN karena situs ini tidak
punya profil penulis perorangan, jadi jangan mengarang nama orang.

Struktur HTML dijaga `pnpm check:structure` (`scripts/check-structure.mjs`):
tidak ada `id` ganda dalam satu halaman, tepat satu `<main>`, tautan "lewati ke
isi" menuju id yang ada, setiap tautan dan tombol punya nama aksesibel, satu
navigasi hanya punya satu `aria-current`, dan judul tidak melompat tingkat.
Pemeriksaan ini menemukan satu masalah nyata: bab 00 merender empat artikel
prinsip dan semuanya memakai `id="batas"`. Id judul artikel prinsip sekarang
diberi awalan slug lewat `scripts/rehype-scope-heading-ids.mjs`, karena
artikel prinsip tidak punya halaman sendiri sehingga id berscope aman.

### Interaksi

- Peta jarak: tautan anchor + JS kecil, tetap jalan tanpa JS.
- Progres: localStorage, key `tahan:progress:v1`. State disimpan sebagai
  `{ version: 1, trained: [slug] }`. Tombol ada di aside halaman teknik;
  ringkasan hitungan ada di `/panduan` dan `/teknik`.
- Print: CSS.
- Timer drill dan pencarian: v1.1.0, jangan sekarang.

### Deploy

- Static. Cloudflare Pages atau Vercel.
- User push repo sendiri. Jangan push.
- Domain belum dikunci.

---

## 10. Keselamatan dan akurasi

Aturan keras:

- Teknik berpasangan wajib di matras dan dengan pengawasan.
- Cekikan tidak dilatih tanpa pelatih.
- Tidak ada tutorial disarm senjata tajam. Hanya prinsip: lari, lindungi,
  ciptakan jarak, cari bantuan.
- Tidak ada kuncian kaki tingkat lanjut (heel hook, kneebar).
- Setiap halaman teknik punya "Batas aman".
- Disclaimer di footer dan halaman teknik.
- Situs bukan nasihat hukum. Jangan cantumkan nomor pasal sebelum
  diverifikasi.
- Modul perempuan dan anak: escape-first, tanpa tutorial mata/jakun, tanpa
  victim-blaming, wajib review ahli.
- Materi anak ditujukan untuk orang tua/wali, bukan anak.
- Tidak ada foto anak atau foto orang dalam posisi terancam.

Klaim dari chat referensi yang harus dikoreksi:

| Klaim | Tindakan |
|---|---|
| "Mayoritas perkelahian jalanan berakhir di tanah" | Jangan pakai tanpa sumber. |
| "RNC membuat pingsan dalam 3-5 detik" | Jangan janjikan angka. Cekikan berbahaya. |
| "Heel hook merobek ACL" | Terlalu disederhanakan. Tidak masuk v1.0.0. |
| "Banting lawan ke aspal" | Jangan anjurkan. Bisa mematikan. |
| "Krav Maga bisa dipelajari sendiri dari 3 gerakan" | Gerakan refleks boleh; pembelaan senjata tidak. |
| Daftar gym dari Google Maps | Jangan tampilkan direktori. |
| "BJJ non-lethal" | Cekikan bisa mematikan. |
| "Orang pendek selalu untung" | Kecenderungan, bukan jaminan. |
| "Krav Maga di film = realitas" | Film adalah koreografi. |
| "Sistem militer paling efektif" | Asal militer bukan jaminan. |

Sumber yang direncanakan:

- Saulo Ribeiro, *Jiu-Jitsu University*.
- Renzo Gracie dan Royler Gracie, *Brazilian Jiu-Jitsu: Theory and Technique*.
- Jigoro Kano, *Kodokan Judo*.
- Imi Sde-Or dan Eyal Yanilov, *Krav Maga*.
- Rory Miller, *Meditations on Violence*.
- Peraturan IBJJF untuk konteks sport.
- Sumber sejarah dan hukum: verifikasi sebelum dikutip.

Jangan mengutip klaim yang belum dibaca. Kalau ragu, tulis sebagai
keterbatasan, bukan fakta.

---

## 11. Langkah berikutnya: fase 3

12 teknik inti, 7 artikel, 4 profil aliran, halaman rujukan kuncian, 3
rutinitas, 30 istilah glosarium, dan penanda progres localStorage sudah
selesai. Yang belum masuk v1.0.0:

1. `site` sudah diisi (`https://tahan-five.vercel.app`); canonical dan URL OG
   absolute aktif. Ganti nilainya kalau domain kustom dikunci.
2. Lighthouse mobile sudah dijalankan (2026-11-12): performance 100,
   accessibility 100, best-practices 100, SEO 100. LCP beranda 1.37 s,
   halaman bab 1.36 s, halaman teknik 1.53 s, halaman catatan panjang
   1.66 s. Sisa pekerjaan: halaman catatan panjang masih di atas target
   1.5 s karena `styleLayout` ~620 ms saat render pertama halaman panjang
   pada throttling 4G (bukan bandwidth font atau CSS). Opsi yang belum
   diambil: kurangi satu file font, atau `font-display: optional` untuk
   heading — keduanya keputusan desain, harus dikonfirmasi dulu.
   Regenerate subset font: `scripts/subset-fonts.sh <dir-font-asli>`
   (butuh `pip install fonttools brotli`), lalu `python
   scripts/check-glyphs.py` setelah build untuk memastikan setiap karakter
   yang dipakai halaman masih ada di semua face. Butuh font asli versi penuh;
   file itu tidak disimpan di repo. Menjalankan script pada set glyph yang
   sama menghasilkan 99.896 B, byte per byte identik dengan yang ter-commit.
3. Sitemap aktif dan terverifikasi di build. Cek ulang setelah domain kustom.
4. Perbarui `PLAN.md` bila scope berubah.

Jangan sentuh modul v1.1.0 sebelum v1.0.0 selesai.

---

## 12. Cara bekerja dengan user

- User berbahasa Indonesia santai. Balas santai, tapi jangan mengorbankan
  kejelasan.
- Jangan mengganti keputusan yang sudah dikunci tanpa bertanya.
- Jangan menambah fitur atau halaman di luar scope tanpa izin.
- Jangan push ke GitHub.
- Jaga storage C: tetap lega. Dependensi minimal.
- Kalau ada klaim teknis yang meragukan, bilang ragu dan verifikasi. Jangan
  mengarang.
- Kalau ada dua pilihan desain, tunjukkan contoh singkat dan jelaskan
  tradeoff-nya, bukan langsung menulis ratusan baris kode.

---

## 13. Prompt singkat untuk AI berikutnya

> Baca `CONTEXT.md` dan `PLAN.md` di folder proyek. Lanjutkan **v1.0.0**:
> 12 teknik inti, artikel, profil aliran, rujukan kuncian, rutinitas,
> glosarium, progress localStorage, dan OG image sudah selesai. Kerjakan
> `site`/domain, Lighthouse mobile, dan sitemap setelah domain ada. Jangan
> sentuh modul v1.1.0 dulu. Jangan memakai foto stok atau gambar AI. Jangan
> ubah keputusan yang sudah dikunci. Jangan push ke GitHub.
