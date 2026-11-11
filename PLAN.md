# TAHAN - Rencana Produk v1.0.0

Status: dikunci 10 November 2026
Nama: **TAHAN** — panduan bertahan diri
Gaya: artikel manual, netral, tanpa persona penulis
Stack: Astro 6 + CSS vanilla
Rilis: v1.0.0 core; v1.1.0 modul perempuan dan panduan orang tua
Scope v1.0.0: 12 teknik inti + 4 profil aliran + 7 artikel + 3 rutinitas + glosarium
Scope v1.1.0: modul pertahanan perempuan + panduan keselamatan anak untuk orang tua

---

## 1. Ringkasan

Satu situs statis berbahasa Indonesia yang mengajarkan bertahan diri lewat
urutan **jarak**, bukan urutan aliran bela diri.

Isinya teknik dari BJJ, Judo, gulat, dan Krav Maga yang disusun seperti manual
lapangan: ringkas, punya langkah, punya batas aman, dan jujur soal apa yang
tidak bisa dipelajari dari teks.

Ditulis sebagai artikel: setiap halaman punya tesis, konteks, langkah, dan
batas. Tidak ada persona "saya", tidak ada cerita perjalanan pribadi, tidak
ada klaim sebagai instruktur.

Cerita tetap dipakai, tapi sebagai pintu masuk: satu adegan konkret di awal
bab, lalu prinsip, lalu teknik. Film action boleh jadi pembanding, bukan
sumber kebenaran.

Bukan ensiklopedia jurus. Bukan konten "jurus rahasia" yang panjang dan tidak
bisa dipertanggungjawabkan.

Kalimat posisi:

> Bela diri bukan soal menang. Soal pulang utuh.

---

## 2. Ide inti: susun per jarak, bukan per aliran

Kebanyakan situs bela diri dimulai dengan "BJJ vs Krav Maga vs Judo". Di
situasi nyata, pertanyaan pertama bukan itu. Pertanyaan pertama: **berapa jarak
saya dari ancaman, dan apa yang saya butuhkan sekarang?**

Karena itu seluruh situs memakai satu tulang punggung:

| Zona | Jarak | Pertanyaan | Isi |
|---|---|---|---|
| 0 Jauh | Sebelum kontak | Bisa keluar? | Sikap siap, pagar tangan, membaca situasi |
| 1 Berdiri | Jarak pukul | Bisa menghentikan? | Palm strike, tendangan, tangkisan |
| 2 Clinch | Sudah menempel | Bisa melepas? | Lepas cengkeraman, bantingan, takedown |
| 3 Tanah | Sudah jatuh | Bisa berdiri lagi? | Shrimp, bridge, stand-up, guard, lepas mount |

Setiap teknik diberi label zona. Jadi pembaca selalu tahu **kapan** teknik itu
masuk akal, bukan cuma **bagaimana** melakukannya.

Ini juga yang membedakan situs dari artikel AI biasa: ada sudut pandang, ada
keputusan editorial, dan ada alasan kenapa urutannya begini.

### Peran tiap aliran

Situs tidak menempatkan BJJ sebagai pusat. Empat aliran dipakai sesuai
kekuatannya masing-masing:

| Aliran | Zona utama | Yang diambil | Yang tidak diklaim |
|---|---|---|---|
| Krav Maga | Jauh dan berdiri | Sikap siap, palm strike, tendangan, tangkisan 360 | Bukan jaminan menang; disarm senjata tidak diajarkan lewat teks |
| Judo | Clinch | Cengkeraman, merusak keseimbangan, bantingan, ukemi | Bukan ajakan membanting kepala ke aspal |
| Gulat | Clinch | Kontrol tubuh, double leg, sprawl | Bukan solusi untuk lawan bersenjata |
| BJJ | Tanah | Shrimp, bridge, guard, lepas mount, stand-up | Bukan "bela diri paling lengkap"; cekikan tetap berbahaya |

BJJ memang lebih banyak di bab tanah karena di situlah keahliannya. Judo dan
gulat lebih banyak di bab clinch. Krav Maga mengisi jarak berdiri. Pembagian
ini disengaja, bukan karena salah satu aliran lebih hebat.

---

## 3. Audiens dan non-goals

### Audiens

- Pemula 18-35 di Indonesia yang ingin belajar bertahan diri, bukan ikut
  kompetisi.
- Orang dengan postur biasa yang ingin teknik yang masuk akal untuk tubuhnya,
  bukan teknik yang hanya bekerja untuk atlet besar.
- Pembaca yang skeptis pada konten bela diri alay dan ingin penjelasan jujur.

### Non-goals v1.0.0

- Tutorial melawan senjata tajam langkah per langkah.
- Direktori gym (cepat basi, dan rekomendasi gym bukan tanggung jawab situs).
- Forum, komentar, newsletter, login, database.
- Video embed. Video bisa menyusul sebagai tautan kurasi, bukan embed.
- Kuncian kaki tingkat lanjut (heel hook, kneebar). Terlalu berisiko untuk
  pemula dan tidak bisa diajarkan lewat teks.
- Klaim "bisa menang melawan siapa saja".
- Chatbot AI di dalam situs.

---

## 4. Prinsip editorial (anti-slop)

Ini aturan menulis, bukan sekadar selera.

1. **Satu halaman, satu ide.** Kalau sebuah halaman bisa dibaca dalam 4 menit,
   itu tanda bagus.
2. **Konkret.** Tulis "tarik dagu, buka pinggul, geser 20 cm", bukan
   "optimalkan leverage tubuh".
3. **Tanpa emoji. Tanpa tanda seru.** Termasuk di judul dan tombol.
4. **Tanpa statistik tanpa sumber.** Kalau tidak ada sumber yang bisa
   ditunjuk, angka itu tidak dipakai.
5. **Bedakan sport dan jalanan.** Guard pull masuk akal di kompetisi BJJ;
   tidak masuk akal di parkiran.
6. **Tunjukkan batasnya.** Setiap teknik punya bagian "kalau gagal" dan
   "batas aman".
7. **Kekerasan adalah pilihan terakhir.** Prioritas: hindari, keluar, minta
   bantuan. Bukan "hajar dulu".
8. **Proporsional.** Pembelaan harus sesuai ancaman. Situs tidak menyarankan
   melumpuhkan orang untuk konflik kecil.
9. **Jangan jual mimpi.** Tidak ada "dijamin menang", tidak ada "jurus
   rahasia", tidak ada "3 detik lumpuh".
10. **Tulis seperti editor, bukan pemasar.** Kalimat pendek. Kata kerja.
    Sedikit metafora. Tidak ada "kita" yang memaksa pembaca setuju.

### Prinsip naratif

Cerita dipakai supaya pembaca masuk, bukan supaya artikel terasa panjang.

- Setiap bab dibuka dengan satu adegan konkret 3-5 kalimat: situasi, bukan
  ceramah.
- Adegan harus menyampaikan satu ide teknis. Kalau tidak, potong.
- Tidak ada cerita personal. Adegan memakai "seseorang", "dua orang", atau
  situasi umum.
- Film action boleh dipakai sebagai pembanding: "Di film, ... Di kehidupan
  nyata, ...". Film bukan sumber teknik.
- Sejarah aliran boleh diceritakan, tapi klaim faktual harus punya sumber.
- Jangan mengarang statistik atau menyamar-nyamarkan fiksi sebagai kejadian
  nyata.
- Akhiri adegan dengan pertanyaan teknis yang dijawab bagian berikutnya.

Contoh pembuka bab clinch:

> Di film, satu bantingan sudah cukup. Lawan terkapar, pahlawan berdiri, kamera
> berhenti. Di dunia nyata, lantai tidak empuk, keringat membuat cengkeraman
> licin, dan lawan tidak jatuh tepat di tempat yang direncanakan. Yang
> menentukan bukan bantingannya, tapi siapa yang masih berdiri setelahnya.

Contoh pembuka bab tanah:

> Semua orang bisa jatuh. Yang membedakan adalah tiga detik setelahnya: apakah
> tubuh langsung mengunci karena panik, atau pinggul mulai bergerak mencari
> ruang.

### Yang secara sadar tidak dipakai

- Gradien ungu-biru, glassmorphism, blob, atau kartu bayangan.
- Foto stok orang berteriak di gym.
- Baris tiga kartu dengan ikon generik.
- Testimoni palsu dan angka "10.000+ pembaca".
- Teks hero "Tingkatkan dirimu ke level berikutnya".
- Animasi scroll, parallax, atau cursor effect.
- Emoji di mana pun, termasuk di metadata.

### Gaya artikel

Semua halaman berbentuk artikel, bukan catatan pribadi. Struktur dasarnya:

1. **Lead** - masalah atau situasi yang membuat topik ini penting.
2. **Konteks** - kenapa teknik ini bekerja, kapan dipakai, kapan tidak.
3. **Langkah** - instruksi langsung, tanpa basa-basi.
4. **Kegagalan** - apa yang terjadi kalau lawan merespons.
5. **Batas** - risiko, keselamatan, dan hal yang tidak diajarkan.

Aturan tambahan:

- Tidak memakai "saya" atau "kami".
- "Anda" dipakai hemat, maksimal sekali per paragraf. Instruksi memakai
  kalimat perintah tanpa subjek: "Tarik dagu", "Geser pinggul".
- Tidak memulai paragraf dengan "Apakah Anda pernah...".
- Tidak ada pertanyaan retoris untuk membangun suasana.
- Tidak ada "mari kita", "yuk", "sobat", atau sapaan akrab.
- Setiap artikel minimal punya satu batas atau koreksi diri.

### Contoh gaya penulisan

> "Kalau dada ditindih, jangan dorong. Geser pinggul, ciptakan ruang."

> "Tap bukan tanda kalah. Tap adalah cara kembali latihan besok."

> "Bantingan di aspal bukan show. Itu cara cepat membuat orang cedera
> permanen. Latih di matras; di jalan, pakai hanya untuk keluar."

---

## 5. Nama dan copy

### Nama

Nama dikunci: **TAHAN**, dengan label "Panduan bertahan diri" dan "Edisi 01".

| Alternatif | Kesan | Alasan tidak dipakai |
|---|---|---|
| JARAK | Editorial, konseptual | Terasa abstrak sebagai nama situs |
| PULANG | Emosional, unik | Bagus untuk tagline, kurang jelas sebagai nama |
| BUKGEBUK | Playful | Mudah terbaca sebagai meme |

Nama folder repo tidak harus sama dengan nama publik.

### Copy hero

Kicker: `PANDUAN BERTAHAN DIRI / EDISI 01`

H1:

> Bela diri bukan soal menang.
> Soal pulang utuh.

Deck:

> Panduan lapangan untuk membaca jarak, memilih respons, dan keluar dari
> situasi. Teknik dari BJJ, Judo, gulat, dan Krav Maga, dijelaskan untuk orang
> biasa.

CTA:

- `Mulai dari prinsip`
- `Buka peta jarak`

### Judul bagian

- "Jarak menentukan jawaban."
- "Bab"
- "Aliran"
- "Catatan"
- "Latihan mingguan"
- "Yang perlu dikenali"
- "Batas aman"
- "Sumber"

### Judul artikel contoh

- "Krav Maga di film: apa yang benar dan apa yang dilebih-lebihkan."
- "Judo: melempar tanpa ikut jatuh."
- "Gulat: kontrol tanpa kain."
- "BJJ: bertarung dari bawah."
- "Soal ngesot: guard pull hanya untuk aturan sport."
- "Tiga detik setelah jatuh."

---

## 6. Arsitektur informasi

```
/                         Beranda
/panduan                  Daftar bab + progres
/panduan/[bab]            Halaman bab
/teknik/[slug]            Halaman teknik
/aliran                   Daftar aliran
/aliran/[slug]            Profil Krav Maga, Judo, gulat, BJJ
/catatan/[slug]           Artikel dan esai
/latihan                  Rutinitas latihan mandiri
/glosarium                Istilah
/tentang                  Metode, transparansi, disclaimer
/sumber                   Bacaan dan referensi
/modul                    Daftar modul (v1.1.0)
/modul/perempuan          Modul Pertahanan Perempuan (v1.1.0)
/modul/orang-tua          Panduan Keselamatan Anak (v1.1.0)
/404
```

Navigasi utama: `Panduan · Aliran · Latihan · Glosarium · Tentang`.
Footer: `Sumber · Disclaimer · Cetak`.
Modul masuk v1.1.0, bukan v1.0.0, dan ditautkan dari beranda serta footer.

### Beranda

1. Hero tipografis. Tanpa gambar.
2. Peta jarak interaktif (4 zona).
3. Daftar bab dan aliran, progress ringkas.
4. "Mulai dari sini": 3 tautan (prinsip, latihan dasar, etika gym).
5. Pernyataan metode singkat: "Cara kami menulis".
6. Footer dengan disclaimer.

### Halaman bab

- Nomor bab besar, judul, adegan pembuka 3-5 kalimat.
- Pengantar 2-3 paragraf yang menjelaskan prinsip bab.
- "Prinsip bab" dalam satu kalimat.
- Daftar teknik dengan nomor, label asal, risiko, status "sudah dilatih".
- Urutan latihan yang disarankan.
- Tautan ke bab berikutnya.

### Halaman aliran

Empat halaman profil: Krav Maga, Judo, gulat, BJJ. Isinya bukan sejarah
panjang, tapi:

- Asal dan konteks singkat.
- Asumsi aliran: apa yang dianggap penting, apa yang dilatih.
- Kekuatan dan batasnya.
- Apa yang diambil situs ini dari aliran tersebut.
- Teknik terkait di TAHAN.
- Satu atau dua bacaan lanjutan.

### Halaman catatan

Artikel naratif: adegan, tesis, pembahasan, batas, sumber. Dipakai untuk topik
yang tidak cocok masuk format langkah, seperti "Krav Maga di film" dan "Soal
ngesot". Tanpa persona penulis.

### Halaman teknik

- Kicker: `BAB 03 / CLINCH · JUDO · RISIKO SEDANG`
- Judul dan satu kalimat prinsip.
- Meta: level, butuh pasangan, butuh matras, terakhir ditinjau.
- "Kenapa ini bekerja" (2-3 paragraf).
- Langkah bernomor 1-5, tiap langkah punya cue pendek.
- "Kalau gagal" (cabang keputusan).
- "Kesalahan umum".
- "Latihan" (repetisi atau drill).
- "Batas aman" (kotak peringatan).
- "Terkait".
- Tombol "Tandai sudah dilatih" (localStorage).
- Tautan cetak.

### Halaman latihan

Tiga rutinitas, masing-masing 8-12 menit:

1. **Dasar lantai** — shrimp, bridge, technical stand-up.
2. **Berdiri dan jarak** — stance, footwork, palm strike bayangan.
3. **Mobilitas** — leher, pinggul, pergelangan, lutut.

Setiap gerakan punya repetisi, durasi, dan catatan keselamatan.

### Glosarium

Sekitar 30 istilah, urut alfabet, penjelasan 1-2 kalimat. Contoh:

> **Guard** — Posisi di bawah dengan kaki mengontrol pinggul lawan. Bukan
> posisi pasif; guard adalah jarak, bukan tempat duduk.

> **Tap** — Menepuk matras atau tubuh lawan dua sampai tiga kali untuk
> berhenti. Bukan tanda kalah; alat keselamatan.

---

## 7. Model konten

Astro content collections, satu file Markdown per teknik. Frontmatter
divalidasi Zod supaya halaman tidak bisa dibangun kalau bagian keselamatan
atau sumber belum diisi.

```ts
// src/content.config.ts (bentuk target)
{
  title: string,
  chapter: '00-prinsip' | '01-jauh' | '02-berdiri' | '03-clinch' | '04-tanah',
  order: number,
  range: 'jauh' | 'berdiri' | 'clinch' | 'tanah',
  origin: 'umum' | 'krav-maga' | 'judo' | 'gulat' | 'bjj',
  goal: 'menjauh' | 'melepas' | 'menjatuhkan' | 'mengontrol' | 'berdiri',
  level: 'dasar' | 'menengah',
  risk: 'rendah' | 'sedang' | 'tinggi',
  partner: boolean,
  mat: boolean,
  summary: string,       // satu kalimat
  principle: string,     // satu kalimat
  steps: { cue: string, detail: string }[],
  figures: { id: string, alt: string, caption: string, type: 'posisi' | 'langkah' | 'peta' }[],
  failure: string,
  mistakes: string[],
  drill: string,
  safety: string,
  sources: { title: string, author?: string, note?: string }[],
  related: string[],
  updated: string,
}
```

Body Markdown dipakai untuk "Kenapa ini bekerja" dan konteks. Langkah,
kesalahan, dan keselamatan sengaja distrukturkan supaya tampilan konsisten dan
tidak ada teknik yang lolos tanpa bagian penting.

Koleksi kedua untuk artikel:

```ts
// src/content/artikel
{
  type: 'prinsip' | 'aliran' | 'catatan',
  title: string,
  slug: string,
  order?: number,
  dek: string,          // satu kalimat untuk kartu dan meta
  lead: string,         // adegan pembuka, 3-5 kalimat
  sources: { title: string, author?: string }[],
  updated: string,
  related: string[],
}
```

Halaman aliran memakai koleksi yang sama dengan `type: 'aliran'`, ditambah
field `discipline: 'krav-maga' | 'judo' | 'gulat' | 'bjj'`. Dengan begitu,
tidak ada tiga sistem konten terpisah yang harus dirawat.

### Contoh isi

**Shrimp (hip escape)**
Kicker: `BAB 04 / TANAH · BJJ · TANPA PASANGAN`

> Kalau dada ditindih, jangan dorong. Geser pinggul, ciptakan ruang.

- Prinsip: ruang tidak datang; ruang dibuat.
- Langkah: berbaring, satu kaki tertekuk, frame di dada lawan, angkat pinggul
  sedikit, putar pinggul menjauh, dorong dengan kaki, ulangi sampai ada ruang
  untuk memasukkan lutut.
- Kalau gagal: jangan lawan arah; ganti sisi.
- Kesalahan: mengangkat punggung, mendorong dengan tangan, menahan napas.
- Latihan: 3 set x 10 per sisi, pelan.
- Batas aman: di matras; berhenti kalau nyeri punggung atau leher.

---

## 8. Sistem visual

Arah: **manual lapangan**. Kertas hangat, tinta gelap, satu aksen bata,
tipografi yang bekerja, garis rambut, nomor bab besar. Terasa seperti buku
panduan yang dicetak, bukan landing page SaaS.

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

Tidak ada putih murni, tidak ada hitam murni, tidak ada gradien.

### Tipografi

- **Display:** Barlow Condensed 600. Judul besar, nomor bab.
- **Body:** Newsreader 400/400 italic. Paragraf, deck, kutipan.
- **Label:** IBM Plex Mono 400/500. Kicker, metadata, tombol, nomor kecil.

Skala:

| Peran | Ukuran | Catatan |
|---|---|---|
| H1 | `clamp(3rem, 8vw, 7rem)` | Line-height 0.92, tracking -0.01em |
| H2 | `clamp(2rem, 4vw, 3.5rem)` | Line-height 0.98 |
| H3 | `1.5rem` | Barlow Condensed 600 |
| Body | `1.125rem` | Newsreader, line-height 1.65, max 66ch |
| Small | `0.875rem` | Newsreader atau Plex Mono |
| Label | `0.6875rem` | Plex Mono, uppercase, tracking 0.14em |

Font di-self-host (woff2), bukan Google Fonts CDN. Preload hanya display dan
body. Mono memakai fallback sistem kalau lambat.

### Grid dan komponen

- Container maksimum 1240px, 12 kolom, gutter 24px.
- Padding luar `clamp(20px, 4vw, 64px)`.
- Sudut kotak maksimum 2px. Tidak ada shadow.
- Garis pemisah 1px `--rule`.
- Tombol: kotak, border 1px ink, teks mono uppercase; hover invert.
- Tag: border 1px, mono 10px, uppercase, tanpa pil.
- Baris teknik: nomor mono, judul condensed, label asal, indikator risiko
  berupa teks (bukan hanya warna).
- Catatan pinggir: border kiri 2px accent, tanpa background.
- Kotak "Batas aman": border 1px accent, label mono, isi Newsreader.
- Fokus keyboard: outline 2px accent, offset 3px.

### Motif visual: skala jarak

Satu garis horizontal dengan empat titik: Jauh, Berdiri, Clinch, Tanah.
Muncul di beranda, halaman bab, dan halaman teknik (penanda posisi). Ini
menjadi identitas utama situs, sebelum masuk ke diagram teknik.

### Ilustrasi dan gambar

Keputusan v1.0.0: memakai **diagram garis SVG**, bukan foto stok, bukan
gambar AI, dan bukan ilustrasi manusia realistis.

Alasannya:

- **Akurasi.** Foto dari satu sudut sering menyembunyikan grip, arah tekanan,
  dan posisi pinggul. Diagram bisa menunjukkan hal yang tidak terlihat.
- **Konsistensi.** Semua teknik memakai bahasa visual yang sama.
- **Privasi dan etika.** Modul perempuan dan anak tidak butuh foto orang
  dalam posisi terancam.
- **Kecepatan produksi.** Tidak perlu shooting, model, lighting, dan izin.
- **Anti-slop.** Foto stok dan gambar AI mudah terlihat palsu, terutama untuk
  teknik yang butuh presisi.

Jenis gambar:

1. **Skala jarak** - garis horizontal dengan empat zona.
2. **Peta posisi** - tampilan atas untuk guard, mount, side control, back
   control.
3. **Urutan langkah** - 2-4 frame per teknik: posisi awal, grip/frame,
   gerakan, hasil.
4. **Peta sasaran** - siluet sederhana dengan label "latih" dan "upaya
   terakhir". Tanpa detail grafis atau luka.
5. **Alur keputusan** - kotak dan panah HTML/CSS, bukan gambar.

Aturan gambar:

- Dua sosok abstrak: kepala lingkaran, badan kotak membulat, anggota garis.
- Peserta utama memakai aksen; lawan memakai tinta.
- Stroke 1.5px, tanpa bayangan, tanpa gradien, tanpa tekstur.
- Panah menunjukkan arah gerak atau tekanan, bukan sekadar hiasan.
- Label memakai Plex Mono uppercase: `ANDA`, `LAWAN`, `TEKAN`, `ANGKAT`.
- Nomor gambar mengikuti bab: `Gambar 04.2`.
- Setiap gambar punya caption dan alt text yang menjelaskan aksi, bukan
  "gambar teknik".
- Tanpa wajah, tanpa ciri gender, tanpa detail tubuh berlebihan.
- Harus terbaca dalam grayscale untuk versi cetak.

Budget gambar v1.0.0:

- 1 skala jarak.
- 4 peta posisi.
- 2 frame per teknik, 3 untuk teknik sulit: sekitar 24-30 frame.
- Total sekitar 30-35 gambar.
- Mulai dari shrimp sebagai pilot: 3 frame. Kalau gaya sudah cocok, baru
  produksi sisanya.

Produksi:

- Buat pustaka bentuk SVG (kepala, badan, lengan, kaki, panah, grip) supaya
  proporsinya konsisten.
- Susun di Figma/Inkscape, ekspor sebagai SVG inline atau komponen Astro.
- Simpan sumber yang bisa diedit; jangan hanya PNG.
- Jangan ilustrasikan semua teknik sebelum halaman shrimp disetujui.

Kalau nanti mau foto:

- Foto bukan untuk v1.0.0.
- Syarat: pengajar sebagai model, matras dan latar netral, pakaian polos,
  cahaya konsisten, 2-3 sudut, izin tertulis, dan wajah tidak menjadi fokus.
- Foto hanya untuk posisi; gerakan tetap memakai panah dan diagram.
- Jangan pakai foto anak-anak.
- Jangan pakai gambar AI untuk teknik. Salah anatomi dan grip akan merusak
  kepercayaan.

Modul v1.1.0:

- Modul perempuan memakai figur abstrak yang sama; tanpa pink, tanpa foto
  perempuan dalam posisi terancam.
- Panduan orang tua memakai ikon, kartu, dan skrip verbal; tanpa foto anak
  dan tanpa ilustrasi menakutkan.


### Band gelap

Bab 04 (Tanah) memakai hero gelap `--mat`, teks kertas, aksen lebih terang.
Ini bukan dark mode; ini penanda bahwa pembaca sedang turun ke lantai.
Bab 03 memakai `--paper-2`, bab 00-02 memakai `--paper`.

### Gerak

- 140-200ms, ease-out.
- Hanya untuk hover, buka-tutup, dan penanda aktif.
- Tanpa scroll reveal, tanpa parallax.
- `prefers-reduced-motion` dihormati.

### Cetak

Halaman teknik bisa dicetak bersih: navigasi dan footer hilang, URL sumber
tetap terlihat, langkah tidak terpotong. Ini fitur, bukan tambahan.

---

## 9. Interaksi

| Fitur | Nilai | Teknis |
|---|---|---|
| Peta jarak | Memilih zona dan melihat teknik terkait | Tautan anchor + JS kecil, tetap bisa dipakai tanpa JS |
| Progres | Menandai teknik yang sudah dilatih | localStorage, key `tahan:progress:v1` |
| Cetak | Membawa panduan ke matras | CSS print |
| Timer drill | Menemani latihan | v1.1.0, WebAudio, tanpa aset |
| Pencarian | Menemukan istilah/teknik | v1.1.0, Pagefind |

Tanpa login. Progres hanya di perangkat sendiri. Tidak ada tracking default.

---

## 10. Konten v1.0.0

Target: 12 teknik inti, 4 profil aliran, 7 artikel, 1 halaman rujukan
kuncian, 3 rutinitas, glosarium, tentang, sumber. Semua berbahasa Indonesia.

### Bab 00 - Prinsip (4 artikel)

1. Hindari dulu.
2. Jarak adalah keputusan.
3. Posisi sebelum kuncian.
4. Tap bukan kalah.

### Bab 01 - Jauh (1 artikel praktik)

1. Sikap siap dan pagar tangan. (Krav Maga / umum)

Halaman ini fokus pada posisi, jarak, dan keputusan, bukan gerakan kuncian.
Karena itu masuk kategori artikel, bukan teknik.

### Bab 02 - Berdiri (3 teknik)

1. Palm strike. (Krav Maga)
2. Tendangan depan ke selangkangan. (Krav Maga)
3. Tangkisan 360. (Krav Maga)

### Bab 03 - Clinch (4 teknik)

1. Lepas cengkeraman. (Judo / gulat)
2. Bantingan pinggul / O-goshi. (Judo)
3. Double leg takedown. (Gulat)
4. Sprawl: bertahan dari double leg. (Gulat)

Ukemi diajarkan sebagai prasyarat di halaman O-goshi, bukan halaman terpisah.
Double leg dan sprawl diletakkan berdekatan supaya pembaca melihat sisi
menyerang dan bertahan dari teknik yang sama.

### Bab 04 - Tanah (5 teknik)

1. Shrimp / hip escape. (BJJ)
2. Bridge dan roll / upa. (BJJ)
3. Technical stand-up. (BJJ)
4. Bertahan di guard. (BJJ)
5. Lepas dari mount. (BJJ)

Total teknik: 3 + 4 + 5 = 12.

### Profil aliran (4 artikel)

1. Krav Maga: dari lapangan ke layar action.
2. Judo: melempar tanpa ikut jatuh.
3. Gulat: kontrol tanpa kain.
4. BJJ: bertarung dari bawah.

Profil bukan biografi panjang. Isinya: asal, asumsi, kekuatan, batas, dan
teknik apa yang diambil situs ini. Cerita sejarah dipakai untuk menjelaskan
kenapa aliran itu bergerak seperti sekarang.

### Catatan (2 artikel)

1. "Krav Maga di film: apa yang benar dan apa yang dilebih-lebihkan."
2. "Soal ngesot: guard pull hanya untuk aturan sport."

Ini tempat untuk topik yang butuh narasi, bukan format langkah. Artikel film
memakai adegan film sebagai pembanding, lalu membedakan koreografi dari
kekerasan nyata. Contoh yang bisa dipakai: *Taken* (2008) sering dikaitkan
dengan gaya Krav Maga, sementara *John Wick* memakai judo dan BJJ. Verifikasi
klaim sebelum menulis; film tetap bukan sumber teknik. Artikel ngesot
menjelaskan kenapa guard pull masuk akal di kompetisi dan berbahaya di jalan.

Setiap bab punya adegan pembuka sendiri; bukan artikel terpisah.

### Rujukan

- "Kuncian yang perlu dikenali": RNC, armbar, triangle, kimura. Fokus pada
  mekanisme, bahaya, dan cara tap, bukan tutorial menyerang.

### Glosarium

Sekitar 30 istilah: guard, mount, side control, back control, shrimp, bridge,
upa, technical stand-up, sweep, takedown, clinch, grip, frame, base, posture,
tap, submission, choke, joint lock, RNC, armbar, triangle, kimura, O-goshi,
double leg, sprawl, ukemi, palm strike, 360 defense, guard pull, butt scoot,
mat, gi, no-gi.

### Sumber

- Saulo Ribeiro, *Jiu-Jitsu University*.
- Renzo Gracie dan Royler Gracie, *Brazilian Jiu-Jitsu: Theory and Technique*.
- Jigoro Kano, *Kodokan Judo*.
- Imi Sde-Or dan Eyal Yanilov, *Krav Maga*.
- Rory Miller, *Meditations on Violence* (konteks kekerasan dan keputusan).
- Peraturan IBJJF (konteks sport).
- Sumber sejarah Krav Maga, Judo, gulat, dan BJJ: verifikasi sebelum menulis.
- Sumber hukum Indonesia: verifikasi sebelum menulis pasal.

Catatan: jangan mengutip halaman atau klaim yang belum dibaca. Daftar ini
dicek ulang saat menulis.

---

### Modul v1.1.0

Modul tidak masuk v1.0.0. Rilis v1.1.0 setelah core live dan stabil.

#### Modul Pertahanan Perempuan

Rute: `/modul/perempuan`

Fokus: menciptakan celah, lepas, lari. Bukan memenangkan pertarungan.

5 skenario:

1. Ditindih di lantai. Memakai ulang shrimp, bridge, technical stand-up.
2. Dicekik dari posisi bawah. Frame, bridge, lepas; tanpa jaminan.
3. Rambut ditarik.
4. Pergelangan atau tangan ditangkap.
5. Ditarik atau dipaksa pergi. Jatuhkan berat, teriak, serang, lari.

3 teknik baru:

- Lepas dari tarikan rambut.
- Lepas dari pegangan tangan.
- Bertahan dari cekikan.

2 artikel:

- "Setelah keluar": lapor, cari bantuan medis, simpan bukti, jangan
  menyalahkan diri.
- "Titik sasaran": mana yang dilatih, mana yang hanya upaya terakhir.

Hierarki sasaran:

- Latih: telapak ke hidung/rahang, lutut atau tendangan ke selangkangan,
  hentakan ke instep/kering tulang kering.
- Upaya terakhir, bukan tutorial: mata dan jakun. Jelaskan risiko cedera
  permanen, risiko hukum, dan kemungkinan menaikkan kekerasan.
- Tidak diajarkan ke anak-anak: mata, jakun, dan serangan yang bertujuan
  melumpuhkan.

#### Panduan Keselamatan Anak untuk Orang Tua

Rute: `/modul/orang-tua`

Bukan halaman yang ditujukan untuk anak membuka sendiri. Ini panduan untuk
orang tua/wali, usia 8-12.

6 pelajaran:

1. Body autonomy: bagian tubuh, batasan, dan cara bilang tidak.
2. Tricky people, bukan sekadar stranger danger.
3. Lepas dari pegangan tangan.
4. Teriak dan lari: kalimat spesifik, bukan sekadar menjerit.
5. Kalau diangkat atau ditarik: jatuhkan berat, teriak, tendang, gigit atau
   cakar sebagai upaya terakhir, lalu lari.
6. Cari orang dewasa aman dan ceritakan, termasuk kalau pelakunya dikenal.

Format: penjelasan singkat, latihan 5 menit, dan kartu cetak. Tanpa foto atau
video anak. Tanpa ilustrasi yang menakutkan.

Aturan modul:

- Tujuan selalu keluar, bukan menang.
- Setiap skenario punya "kalau gagal" dan "setelah keluar".
- Tanpa tutorial disarm senjata tajam.
- Tanpa janji "sekali pukul lumpuh".
- Tanpa victim-blaming.
- Materi anak wajib direview pengajar BJJ/Krav Maga dan praktisi keamanan
  anak atau psikolog sebelum publish.
- Materi perempuan sebaiknya direview pengajar BJJ/Krav Maga.
- Tidak ada foto anak. Tidak ada foto perempuan dalam posisi terancam.
- Desain tetap sama; tanpa pink/blue stereotip.

---

## 11. Akurasi, keselamatan, dan hukum

### Koreksi terhadap referensi chat

Chat referensi bagus untuk kerangka, tapi beberapa klaim perlu dibuang atau
diperhalus:

| Klaim di referensi | Tindakan |
|---|---|
| "Mayoritas perkelahian jalanan berakhir di tanah" | Jangan pakai tanpa sumber. Fokus pada keputusan, bukan statistik. |
| "RNC membuat pingsan dalam 3-5 detik" | Jangan janjikan angka. Cekikan berbahaya; ajarkan tap dan pengawasan. |
| "Heel hook merobek ACL" | Terlalu disederhanakan. Heel hook tidak masuk v1.0.0. |
| "Banting lawan ke aspal" | Jangan anjurkan. Bantingan ke permukaan keras bisa mematikan. Ajarkan kontrol, lalu keluar. |
| "Krav Maga bisa dipelajari sendiri dari 3 gerakan" | Gerakan refleks boleh; pembelaan senjata tidak. |
| Daftar gym dari Google Maps | Jangan tampilkan direktori. Buat panduan memilih gym. |
| "BJJ non-lethal" | Cekikan bisa mematikan. Selalu ada peringatan. |
| "Orang pendek selalu untung" | Generalisasi. Tulis sebagai kecenderungan, bukan jaminan. |
| "Krav Maga di film action adalah gambaran realitas" | Film adalah koreografi. Pakai sebagai pembanding gaya, bukan bukti efektivitas. |
| "Sistem militer berarti paling efektif" | Asal militer bukan jaminan. Jelaskan konteks, asumsi, dan batasnya. |

### Aturan keselamatan

- Teknik berpasangan wajib di matras dan dengan pengawasan.
- Cekikan tidak dilatih tanpa pelatih.
- Tidak ada tutorial disarm senjata tajam. Hanya prinsip: lari, lindungi,
  ciptakan jarak, cari bantuan.
- Tidak ada kuncian kaki tingkat lanjut.
- Setiap halaman teknik punya "Batas aman".
- Disclaimer di footer dan di halaman teknik.

### Hukum

Situs bukan nasihat hukum. Jelaskan prinsip pembelaan terpaksa dan
proporsionalitas secara umum, lalu arahkan pembaca untuk memahami hukum yang
berlaku. Jangan mencantumkan nomor pasal sebelum diverifikasi.

### Transparansi

Situs tidak memakai persona penulis dan tidak mengklaim sebagai instruktur.
Yang ditampilkan: metode, sumber, tanggal tinjauan, dan batas.

- Halaman Tentang menjelaskan bahwa materi disusun dari literatur, latihan,
  dan verifikasi, bukan kurikulum resmi.
- Sebut sumber dan tanggal tinjauan di setiap halaman.
- Buka pintu koreksi.
- Jangan memakai gelar atau klaim pengalaman yang tidak ada.
- Framing: "panduan yang disusun dari sumber terbuka", bukan "sertifikasi".

Ini justru membuat situs lebih dipercaya daripada konten yang berpura-pura.

---

## 12. Stack dan performa

- **Astro 6**, output statis, TypeScript strict.
- **CSS vanilla** dengan custom properties dan scoped style Astro. Tanpa
  Tailwind, tanpa React. Desain ini terlalu spesifik untuk utility class.
- **Font self-host**, subset latin. Tiga keluarga, empat file.
- **SVG inline** untuk diagram dan skala jarak.
- **JS minimal**: progres, peta jarak, timer (v1.1.0). Target di bawah 8 KB.
- **Tanpa analytics** di v1.0.0. Bisa ditambah Umami/Plausible kalau perlu.
- **Deploy** ke Cloudflare Pages atau Vercel. Repo di-push manual oleh user.

### Budget

| Metrik | Target |
|---|---|
| HTML per halaman | < 30 KB |
| CSS total | < 25 KB |
| JS v1.0.0 | < 8 KB |
| Font | < 180 KB |
| LCP mobile 4G | < 1.5 s |
| CLS | 0 |
| Lighthouse mobile | >= 95 untuk performance, a11y, SEO |

### Catatan storage

C: sedang ketat (sekitar 8 GB bebas). Astro + dependencies masih wajar
(sekitar 250 MB). Jangan tambah Playwright, Cypress, atau paket berat lain
untuk v1.0.0. Audit pakai Lighthouse dan `astro check` dulu.

---

## 13. Roadmap dan versi

| Versi | Isi | Selesai jika |
|---|---|---|
| v1.0.0 | Core: 12 teknik, 4 profil, 7 artikel, 3 rutinitas, glosarium | Checklist v1.0.0 lulus |
| v1.1.0 | Modul Pertahanan Perempuan + Panduan Keselamatan Anak untuk Orang Tua | Checklist modul lulus dan direview |
| v1.1.x | Perbaikan, skenario tambahan, kartu cetak, hasil review | Tidak ada bug konten yang diketahui |
| v2.0.0 | Tidak direncanakan | Hanya kalau ada perubahan besar |

Aturan versi:

- Patch `1.0.x`: typo, perbaikan kecil, bug.
- Minor `1.1.0`: modul baru, halaman baru, fitur baru.
- Major `2.0.0`: redesign atau perubahan struktur besar. Hindari selama bisa.

### Fase kerja

| Fase | Isi | Selesai jika |
|---|---|---|
| 0. Kunci rencana | Nama, gaya, stack, scope, versi | Keputusan dikunci dan CONTEXT.md siap |
| 1. Vertical slice | Scaffold, token, font, hero, skala jarak, 3 diagram shrimp, 1 halaman teknik | Tampilan disetujui dan bisa dipakai ulang |
| 2. Template | Content collection, semua layout, figure component, progres, print, 6 teknik | Navigasi lengkap, schema valid |
| 3. Konten v1.0.0 | 12 teknik, 4 profil, 7 artikel, rujukan kuncian, 3 rutinitas, glosarium, sumber, 30-35 diagram | Tidak ada placeholder; klaim bersumber |
| 4. Polish v1.0.0 | Responsive, a11y, performa, SEO, OG, 404, deploy | Checklist v1.0.0 lulus |
| 5. Modul v1.1.0 | Modul perempuan, panduan orang tua, review ahli | Checklist modul lulus |
| 6. v1.1.x | Perbaikan dan tambahan kecil | Tidak ada bug konten yang diketahui |

Estimasi:

- v1.0.0: 10-14 sesi kerja, termasuk produksi diagram.
- v1.1.0: +5-7 sesi, termasuk review dan diagram modul.
- Fase 3 tetap paling lama karena menulis, menyunting, dan memverifikasi
  konten, bukan karena coding.

### Urutan pengerjaan yang disarankan

1. Kunci nama dan gaya.
2. Bangun vertical slice dengan satu teknik (shrimp) untuk menguji desain.
3. Baru bangun schema dan template.
4. Tulis konten per bab, verifikasi, baru pindah bab.
5. Polish dan rilis v1.0.0.
6. Baru kerjakan modul v1.1.0. Jangan mencampur modul ke core sebelum
   v1.0.0 live.

---

## 14. Definition of done

### v1.0.0

- [ ] 12 halaman teknik, 4 profil aliran, 7 artikel, 3 rutinitas, glosarium,
      tentang, sumber, 404.
- [ ] Setiap teknik punya langkah, "kalau gagal", kesalahan, latihan,
      batas aman, sumber, dan tanggal tinjauan.
- [ ] Setiap bab punya adegan pembuka yang mengarah ke satu ide teknis.
- [ ] Tidak ada persona "saya" atau "kami"; tidak ada cerita personal.
- [ ] Setiap teknik punya minimal 2 frame diagram, caption, dan alt text.
- [ ] Tidak ada foto stok, foto teknik, atau gambar AI.
- [ ] Diagram terbaca dalam grayscale.
- [ ] Tidak ada emoji, gradien, atau kartu bayangan.
- [ ] Satu warna aksen; tipografi dan garis yang bekerja.
- [ ] Bisa dipakai keyboard; focus terlihat; skip link; reduced motion.
- [ ] Tidak ada horizontal scroll di 360px.
- [ ] Tampilan 1440px terasa disengaja, bukan melebar.
- [ ] Print halaman teknik rapi.
- [ ] Meta title/description, canonical, OG image, sitemap.
- [ ] Disclaimer terlihat di footer dan halaman teknik.
- [ ] Lighthouse mobile memenuhi budget.
- [ ] Deploy preview bisa dibuka; user push repo sendiri.

### v1.1.0

- [ ] Modul perempuan punya 5 skenario, 3 teknik baru, dan 2 artikel.
- [ ] Setiap skenario punya "kalau gagal" dan "setelah keluar".
- [ ] Panduan orang tua punya 6 pelajaran dan kartu cetak.
- [ ] Tidak ada tutorial mata/jakun; hanya penjelasan risiko.
- [ ] Setiap skenario punya minimal 1 diagram alur atau posisi.
- [ ] Tidak ada foto anak atau foto perempuan dalam posisi terancam.
- [ ] Materi anak direview praktisi keamanan anak atau psikolog.
- [ ] Materi perempuan direview pengajar BJJ/Krav Maga.
- [ ] Semua tautan ke teknik core berfungsi.
- [ ] Desain tetap satu bahasa visual; tanpa pink/blue stereotip.
- [ ] Versi dan tanggal tinjauan terlihat di halaman modul.

---

## 15. Risiko dan mitigasi

| Risiko | Mitigasi |
|---|---|
| Konten terasa seperti AI | Sudut pandang jelas, adegan konkret, sumber nyata, tanpa emoji |
| Klaim teknik salah | Verifikasi dua sumber per teknik; review keselamatan terpisah |
| Narasi berubah jadi fiksi | Adegan diberi label situasi, bukan kejadian nyata; klaim sejarah bersumber |
| Terlalu banyak halaman | Bekukan 12 teknik + 4 profil; modul masuk v1.1.0 |
| Modul sensitif salah | Review ahli, escape-first, tanpa tutorial mematikan, aftercare |
| Desain terlalu ramai | Satu aksen, tiga font, tanpa ilustrasi dekoratif |
| Legal/etika | Disclaimer, tanpa disarm senjata, tanpa kuncian kaki |
| Storage C: penuh | Dependensi minimal, tanpa framework UI dan test browser |
| Proyek berhenti di desain | Vertical slice dulu, konten menyusul per bab |

---

## 16. Backlog v1.1.x

- Skenario tambahan untuk modul perempuan.
- Variasi usia untuk panduan anak.
- Kartu latihan cetak (PDF).
- Pencarian Pagefind.
- Timer drill dengan bunyi.
- Halaman rujukan kuncian diperluas.
- Tautan video kurasi (bukan embed).
- Panduan memilih gym.
- Mode gelap? Tidak. Band gelap sudah cukup.
- Bahasa Inggris? Tidak untuk sekarang.

---

## 17. Keputusan yang sudah dikunci

1. Nama: **TAHAN**.
2. Gaya: artikel manual, netral, tanpa persona penulis.
3. Stack: **Astro 6 + CSS vanilla**, output statis.
4. Scope v1.0.0: 12 teknik inti, 4 profil aliran, 7 artikel, 3 rutinitas.
5. Cakupan: BJJ, Judo, gulat, dan Krav Maga, dibagi menurut jarak.
6. Narasi: adegan pembuka di setiap bab; film action sebagai pembanding,
   bukan sumber teknik.
7. Versi: v1.0.0 core, v1.1.0 modul perempuan dan panduan orang tua.
   Tidak ada v2 dalam rencana.
8. Modul: escape-first, tanpa tutorial mematikan, materi anak untuk orang
   tua/wali, wajib review ahli.

Yang belum dikunci: domain, target deploy, tanggal rilis, dan apakah perlu
analytics. Semua bisa diputuskan setelah vertical slice jadi.

Langkah berikutnya: fase 1, vertical slice dengan halaman shrimp sebagai uji
tampilan. Jangan bangun seluruh situs sebelum tampilan satu halaman disetujui.
