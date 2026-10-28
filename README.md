# Mahabbati Microsite

Website Mahabbati dengan fokus utama **Wedding Organizer syar'i** (WO Mahabbati + tempat mitra), ditambah halaman product knowledge **aplikasi ta'aruf**.

Janji utamanya: **"Kami menemani sebelum, saat, dan setelah akad."**
- **Sebelum akad:** kelas pranikah dan nasihat pernikahan bersama asatidz Mahabbati di aplikasi.
- **Saat akad:** khitbah, akad, akad di masjid, walimah, atau paket lengkap.
- **Setelah akad:** kajian dan seminar rumah tangga, serta konsultasi syariah.

Dibangun dengan [Astro](https://astro.build) dan menghasilkan HTML statis, ditambah GSAP (ScrollTrigger) dan Lenis. Live di **https://ridwanahmadm.github.io/Mahabbati/**. Setiap push ke `main` otomatis di-deploy lewat GitHub Pages (`.github/workflows/deploy-pages.yml`).

## Halaman

| Rute | Isi |
|---|---|
| `/` | Hero + pencari kebutuhan, daftar kebutuhan dengan foto mengikuti kursor, benang "sebelum, saat, setelah akad", band kelas pranikah, paket pilihan, tempat mitra, standar syar'i, bukti, band "Persimpangan" (WO / aplikasi), FAQ |
| `/layanan/` | Katalog paket dengan filter kebutuhan, jumlah tamu, dan budget. Filter tersimpan di URL, jadi pencari di beranda langsung mendarat di hasil yang terfilter |
| `/layanan/<paket>/` | Detail paket: isi per varian, kelas pranikah (bila termasuk), rundown, galeri, tempat yang cocok, estimator yang mengisi pesan WhatsApp |
| `/tempat/`, `/tempat/<tempat>/` | Tempat mitra (masjid, gedung, taman, villa, restoran) dengan filter jenis/kota/tamu, plus detail dan tombol "Cek ketersediaan tanggal" |
| `/kelas/` | Kelas pranikah: format kelas, daftar materi, isi kelas di aplikasi, dua jalan mendapat akses, benefit sebelum/setelah menikah, paket yang termasuk kelas |
| `/cerita/` | Cerita pasangan dan ulasan |
| `/aplikasi/` | Product knowledge aplikasi ta'aruf: demo anti-ghosting, foto privat, verifikasi, AI, panduan, pranikah, setelah menikah, membership |
| `/tentang/` | Tentang Mahabbati, standar syar'i, kontak |

URL lama (`/taaruf/`, `/asatidz/`, `/wedding-organizer/...`) otomatis diarahkan ke halaman barunya.

## Dua bahasa

Bahasa Indonesia ada di root, bahasa Inggris di `/en/` dengan slug Inggris (`/en/services/`, `/en/venues/`, `/en/class/`, `/en/stories/`, `/en/app/`, `/en/about/`). Slug paket dan tempat sama di kedua bahasa. Menu bahasa di header mengarah ke halaman yang setara, dan setiap halaman punya `hreflang`.

- **Copy halaman** ada di `src/views/*.astro`, dalam objek `COPY = { id: {...}, en: {...} }` di bagian atas tiap file. `src/pages/` dan `src/pages/en/` hanya pembungkus.
- **Teks bersama** (menu, footer, label) ada di `src/i18n/ui.ts`.
- **Data** ditulis dalam bahasa Indonesia di `src/data/*.ts`. Versi Inggrisnya berupa overlay dengan bentuk dan urutan yang sama di `*.en.ts`, berisi teks saja. Harga, foto, dan angka tetap diambil dari file Indonesia.
- **Testimoni asli** diterjemahkan di versi Inggris dan diberi label "Translated from Indonesian".
- **Menambah bahasa Arab nanti:** tambahkan `"ar"` di `src/i18n/lang.ts` (`Lang`, `LANGS`, `LANG_META` dengan `dir: "rtl"`, dan path-nya), lalu tulis copy `ar` di `COPY`, `ui.ts`, dan overlay `*.ar.ts`. Menu bahasa dan `<html dir>` akan mengikuti otomatis. Tata letak RTL tetap perlu dicek ulang.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321, slot placeholder ikut tampil (lihat .env.development)
npm run build    # hasil di dist/, slot placeholder TIDAK tampil
```

## Mengisi data asli

Semua data ada di `src/data/`. Cari kata `PLACEHOLDER`, `DUMMY`, dan `GANTI`.

**`site.ts`**
- `APP_STORE_URL`: link App Store (GANTI).
- Kontak, link legal, dan angka bukti (`PROOF`).

**`packages.ts`** (paket WO)
- `placeholder: true` berarti harga dan rincian masih contoh. Label "Data contoh" tampil di situs sampai diubah ke `false`.
- Harga dan isi paket dari "Paket wedding MAHABBATI_REVAMP.xlsx" (28 Okt 2026): Khitbah, Akad, Walimah, Mahabbati Complete, dan Akad di Masjid, masing-masing dengan beberapa tingkat. Isi tiap tingkat ditulis sebagai kunci item (`ITEM_TEXT`), teks Inggrisnya di `ITEM_TEXT_EN`.
- Item `kelas` (Zoom Pranikah, 4 sesi) hanya di Paket Akad dan Masjid Akad, mengikuti file. Label kelas di kartu paket dan halaman kelas mengikutinya otomatis.
- Halaman paket memakai pemilih tingkat, bukan kalkulator per tamu. `RUNDOWN` dan `WO_STEPS` masih contoh.

**`venues.ts`** (tempat mitra)
- Seluruhnya contoh dengan nama generik. Ganti dengan data mitra resmi lalu set `placeholder: false`.

**`people.ts`**
- `STORIES`: testimoni. Data asli yang sudah publik: kisah F & N (Instagram) dan ulasan Google Play (M. Dimas Maulana, Afni). Slot `placeholder: true` hanya tampil saat `npm run dev`. Isi `by`, `quote`, `source`, `meta`, lalu set `placeholder: false` agar tampil di situs.

**`content.ts`**
- `KELAS_MODULES` dan `KELAS_FACTS`: daftar materi dan format kelas pranikah, masih contoh. Selama `KELAS_NOTE` tidak kosong, catatan "masih contoh" ikut tampil. Nama dan foto asatidz sengaja tidak ditampilkan, cukup disebut "asatidz Mahabbati".
- `BENEFITS`: benefit sebelum/setelah menikah, masih usulan. Selama `BENEFITS_NOTE` tidak kosong, catatan "sedang disiapkan" ikut tampil.
- `SYARI_STANDARDS`: standar syar'i, masih usulan (konfirmasi ke tim WO).
- FAQ aplikasi dan WO.

**Foto lain** ada di `src/assets/photos/` (Unsplash, sumbernya di `src/data/images.ts`). Untuk mengganti, timpa file dengan nama yang sama.

**Aturan foto:** wajah muslimah tidak ditampilkan. Gunakan foto dari belakang, tangan saja, siluet, atau suasana tanpa orang, dengan busana yang longgar dan syar'i.

## Kualitas yang sudah dicek

- axe-core 4.10.3 (WCAG 2.0/2.1/2.2 A dan AA + best-practice): 0 pelanggaran di 15 halaman, pada lebar 390 dan 1440.
- Kontras teks di atas foto diukur dari piksel, dengan kondisi terburuk: judul minimal 5,26:1 dan paragraf minimal 8,41:1.
- Tanpa overflow horizontal di 320 sampai 1440 px.
- 19 uji interaksi lolos: pencari → katalog terfilter, filter budget dan sinkronisasi URL, "Tempat saja" → halaman tempat, filter tempat, estimator dan pesan WhatsApp, demo anti-ghosting, demo foto privat, FAQ, baris geser, lensa hero, band Persimpangan, menu mobile.
- Reduced motion dihormati. Animasi kursor hanya aktif di pointer presisi.

## Struktur

```
src/
  data/        site, packages, venues, people (cerita), content (benang, kelas, benefit, standar, FAQ), images
  components/  Finder, NeedIndex, Journey (benang), CrossBand (persimpangan), PackageCard, VenueCard, KelasBand,
               StoryCard, Benefits, Header, Footer, Logo, Icon, Phone, StoreBadges, Faq, DownloadBlock
  scripts/     motion, base, lens, cross, journey, preview, drag-row, catalog, estimator, ghost, photo-lock
  pages/       index, layanan/, tempat/, kelas, cerita, aplikasi, tentang, 404
legacy/        situs versi 20 September 2026 (tidak di-deploy)
```
