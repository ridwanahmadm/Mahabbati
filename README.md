# Mahabbati Microsite

Microsite akuisisi Mahabbati untuk dua audiens:

- **Yang masih mencari pasangan.** Mereka diarahkan ke aplikasi, karena pencarian dan pengajuan ta'aruf hanya ada di Google Play dan App Store.
- **Yang siap menikah.** Mereka diarahkan ke paket Wedding Organizer dan konsultasi lewat WhatsApp.

Dibangun dengan [Astro](https://astro.build) dan menghasilkan HTML statis, ditambah GSAP (ScrollTrigger) dan Lenis untuk motion.

## Halaman

| Rute | Isi |
|---|---|
| `/` | Hero "Persimpangan" (split ta'aruf / walimah), scroll scene "benang" enam tahap menuju nikah, bukti nyata, unduh aplikasi |
| `/taaruf/` | Masalah dan jawaban, demo anti-ghosting (kuota kembali setelah 7 hari), demo foto privat 24 jam, verifikasi WNI/WNA, AI Matchmaker, panduan 8 langkah, fitur pranikah (baris geser), tabel membership, FAQ |
| `/wedding-organizer/` | Hero, alasan memilih WO syar'i, daftar paket dengan pratinjau foto yang mengikuti kursor, tabel perbandingan (pemilih paket di mobile), alur layanan, kisah, FAQ, CTA WhatsApp |
| `/wedding-organizer/<paket>/` | Detail paket: galeri, isi paket per varian, contoh rundown, galeri geser, estimator (varian, jumlah tamu, tambahan) yang mengisi pesan WhatsApp otomatis |

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
npm run preview
```

Untuk hosting di sub-path (misalnya GitHub Pages `https://<user>.github.io/<repo>/`):

```bash
SITE_URL=https://<user>.github.io BASE_PATH=/<repo> npm run build
```

## Yang perlu kamu ganti sebelum rilis

1. **Link App Store** ada di `src/data/site.ts`, konstanta `APP_STORE_URL` (bertanda `GANTI`). Satu konstanta ini dipakai semua tombol App Store.
2. **Data dummy Wedding Organizer.** Cari komentar `DUMMY` di `src/data/packages.ts`, `src/data/content.ts`, dan `src/pages/wedding-organizer/index.astro`:
   - Rincian isi tiap paket, harga tambahan per tamu, dan harga add-on.
   - Contoh rundown hari H dan alur 4 langkah layanan.
   - Klaim "rincian tertulis sebelum DP", "area tamu bisa dipisah", "ustadz pemateri" di paket Intimate.
   - FAQ: boleh pakai WO tanpa aplikasi? Area layanan di luar Jakarta?
3. **Foto.** Semua foto adalah ilustrasi dari Unsplash (sumbernya di `src/data/images.ts`, `CREDITS`). Ganti dengan foto acara asli bila ada izin pasangan; cukup timpa file dengan nama yang sama di `src/assets/photos/`.

Fakta yang **sudah terverifikasi** (dari mahabbati.com, aplikasi, dan materi company profile):

- Harga mulai Rp1,5 jt / Rp15 jt / Rp75 jt; varian Standard Rp75 jt (300 pax) dan Exclusive Rp95 jt (500 pax).
- Aturan 7 hari dan kuota kembali; verifikasi maksimal 3×24 jam; foto muslimah ditinjau admin wanita.
- Foto terbuka 24 jam dan tidak bisa diunduh; batas 1.000 karakter per pesan.
- Isi membership Free/Silver/Gold.
- Bukti: 10+ pasangan, rating 4,7, 10,9 rb pengikut Instagram, ulasan Google Play.
- Kontak WhatsApp dan email.

## Struktur

```
src/
  data/        site.ts (link, kontak, format rupiah), packages.ts (paket WO + estimator), content.ts (tahapan, FAQ, membership), images.ts
  components/  Header, Footer, Logo (vektor m♡ dari splash), Icon (Material Symbols + Font Awesome Brands), Phone, StoreBadges, Faq, DownloadBlock
  layouts/     Base.astro (SEO, OG, JSON-LD, skip link)
  scripts/     base.ts (menu, reveal, label kursor), cross.ts (hero), journey.ts (benang), ghost.ts, photo-lock.ts, drag-row.ts, preview.ts, estimator.ts
  pages/       index, taaruf, wedding-organizer/index, wedding-organizer/[slug], 404
```

## Kualitas yang sudah dicek

- **axe-core 4.10.3**, tag WCAG 2.0/2.1/2.2 A dan AA plus best-practice: 0 pelanggaran di semua halaman, pada lebar 390 dan 1440.
- **Kontras teks di atas foto hero diukur dari piksel**, dengan kondisi terburuk foto berwarna penuh: judul minimal 5,44:1, paragraf minimal 8,14:1.
- **Responsif:** tanpa overflow horizontal di 320, 390, 768, 1024, dan 1440 px.
- **Keyboard:** skip link, urutan Tab yang logis, fokus selalu terlihat, Escape menutup menu. Baris geser punya tombol (WCAG 2.5.7).
- **Reduced motion:** semua animasi berhenti dan menampilkan state final. Label kursor hanya aktif di pointer presisi.
- **Interaksi:** 14 uji fungsional lolos (demo anti-ghosting, foto privat, FAQ, baris geser, estimator dan pesan WhatsApp, hover hero, menu mobile).
- **Performa build lokal:** LCP di bawah 150 ms, JS 53 KB, gambar AVIF/WebP responsif.
