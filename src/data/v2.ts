// Content for the WO-first variant (/v2/). Package facts come from packages.ts; this file holds the page copy.
import { WA, waLink, woGreeting, url } from "./site";

export const V2 = (p: string) => url(`/v2${p}`);

export const WA_HREF = waLink(WA.wo.number, woGreeting("id"));

export const NAV = [
  { href: V2("/layanan/"), label: "Layanan & Paket", key: "layanan" },
  { href: V2("/#portofolio"), label: "Portofolio", key: "portofolio" },
  { href: V2("/aplikasi/"), label: "Aplikasi Ta’aruf", key: "aplikasi" },
  { href: V2("/tentang/"), label: "Tentang Kami", key: "tentang" },
  { href: V2("/#faq"), label: "FAQ", key: "faq" },
] as const;

/** The order a Muslim wedding happens in; each points at the package that serves it. */
export const MOMENTS = [
  {
    name: "Khitbah",
    line: "Lamaran di rumah keluarga: dekorasi, rias, foto dan video, dan jamuan bila perlu.",
    slug: "paket-khitbah",
    cta: "Paket Khitbah",
  },
  {
    name: "Akad nikah",
    line: "Ijab qabul di rumah, gedung, atau masjid mitra. Paket Akad sudah termasuk 4 sesi kelas pranikah via Zoom.",
    slug: "paket-akad",
    cta: "Paket Akad",
  },
  {
    name: "Walimah",
    line: "Resepsi untuk 100 sampai 300 tamu: catering, dekorasi, rias dan busana, buku tamu.",
    slug: "paket-walimah",
    cta: "Paket Walimah",
  },
];

export const ALL_IN = {
  name: "Semuanya sekaligus",
  line: "Mahabbati Complete menggabungkan akad dan walimah dalam satu paket, untuk 100 sampai 500 tamu.",
  slug: "mahabbati-complete",
  cta: "Mahabbati Complete",
};

/** Order of the price list: the journey, then the all-in package. */
export const PACKAGE_ORDER = ["paket-khitbah", "paket-akad", "akad-di-masjid", "paket-walimah", "mahabbati-complete"];

// Standar syar’i. Same commitments as content.ts SYARI_STANDARDS (confirm with the WO team before treating as final),
// plus the two facts that every package sheet states: the ustadz and the Zoom class.
export const STANDARDS = [
  { title: "Perias wanita untuk pengantin wanita", body: "Rias pengantin dan keluarga wanita selalu ditangani perias wanita." },
  { title: "Area tamu bisa dipisah", body: "Area tamu pria dan wanita kami pisahkan bila keluarga menghendaki." },
  { title: "Waktu sholat dijaga", body: "Setiap rundown kami susun dengan jeda untuk sholat." },
  { title: "Ustadz di setiap paket", body: "Tausiyah pernikahan dari asatidz Mahabbati ada di semua tingkat paket." },
  { title: "Kelas pranikah via Zoom", body: "Paket Akad dan Masjid Akad sudah termasuk 4 sesi kelas via Zoom bersama asatidz Mahabbati." },
  { title: "Penawaran tertulis sebelum DP", body: "Semua item dan harga tertulis dalam satu dokumen, jadi kalian tahu persis apa yang dibayar." },
];

// ILUSTRASI: foto Unsplash, bukan dokumentasi acara Mahabbati. Ganti dengan foto acara asli bila sudah ada.
export const PORTFOLIO = [
  { photo: "v2-akad-ijab", caption: "Ilustrasi: ijab qabul di rumah keluarga", alt: "Pengantin pria berjabat tangan dengan wali saat ijab qabul, disaksikan penghulu dan keluarga." },
  { photo: "v2-joglo", caption: "Ilustrasi: akad di pendopo joglo", alt: "Tamu duduk di taman menghadap pendopo joglo yang dihias tirai putih." },
  { photo: "n-venue-arch", caption: "Ilustrasi: walimah di gedung", alt: "Gerbang bunga mawar di ruang resepsi, pelaminan di ujung ruangan." },
  { photo: "n-pelaminan", caption: "Ilustrasi: pelaminan walimah", alt: "Pelaminan dengan sofa krem di depan dinding bunga warna-warni." },
  { photo: "wo-catering", caption: "Ilustrasi: prasmanan walimah", alt: "Aneka hidangan prasmanan di meja saji berhias bunga putih." },
];

export const FAQ = [
  {
    q: "Paket apa saja yang termasuk kelas pranikah?",
    a: "Paket Akad (semua tingkat) dan Masjid Akad. Keduanya sudah termasuk 4 sesi kelas pranikah via Zoom bersama asatidz Mahabbati.",
  },
  {
    q: "Apakah harga di website sudah final?",
    a: "Harga di website adalah harga paket per tingkat. Bila butuh tambahan tamu, menu, atau layanan lain, tim WO menyesuaikannya dan menuliskannya di penawaran resmi.",
  },
  {
    q: "Apakah vendornya sesuai syariat?",
    a: "Ya. Setiap vendor kami kurasi agar akad dan walimah berjalan sesuai syariat Islam, termasuk perias wanita untuk pengantin wanita.",
  },
  {
    q: "Harus pakai aplikasi Mahabbati dulu?",
    a: "Tidak. Kalian bisa langsung konsultasi lewat WhatsApp, meski bertemu calon pasangan di luar Mahabbati.",
  },
  {
    q: "Bisa melayani di luar Jakarta?",
    a: "Kirim kota dan tanggal acara lewat WhatsApp. Tim kami akan mengecek ketersediaannya.",
  },
];

/** Photo sources for the credits on /v2/tentang/. */
export const V2_PHOTOS = ["v2-walimah-tent", "v2-akad-ijab", "v2-joglo", "n-venue-arch", "n-pelaminan", "wo-catering", "n-stage", "n-ijab", "v-masjid-court", "wo-decor-lavender", "n-ring-lamaran"];
