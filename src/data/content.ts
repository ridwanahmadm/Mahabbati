// Copy blocks shared by pages. Facts come from mahabbati.com and the Mahabbati app.

export type Phase = "Sebelum akad" | "Saat akad" | "Setelah akad";

// The "benang" journey on the home page: how Mahabbati accompanies a couple.
export const JOURNEY: { id: string; phase: Phase; name: string; line: string; how: string; photo: string; alt: string }[] = [
  {
    id: "konsultasi",
    phase: "Sebelum akad",
    name: "Konsultasi",
    line: "Ceritakan rencanamu, kami bantu susun.",
    how: "Lewat WhatsApp: tanggal, kota, jumlah tamu, dan budget. Penawaran tertulis sebelum DP.",
    photo: "hands",
    alt: "Dua tangan saling menggenggam dengan bayangan di rumput.",
  },
  {
    id: "kelas",
    phase: "Sebelum akad",
    name: "Kelas pranikah",
    line: "Bekal ilmu dari asatidz Mahabbati.",
    how: "4 sesi kelas pranikah via Zoom, termasuk dalam Paket Akad dan Masjid Akad. Materi lanjutannya ada di aplikasi.",
    photo: "j-pranikah",
    alt: "Tangan memegang mushaf Al-Qur'an dan tasbih.",
  },
  {
    id: "khitbah",
    phase: "Sebelum akad",
    name: "Khitbah",
    line: "Pertemuan dua keluarga yang hangat.",
    how: "Paket Khitbah: dekorasi ruang lamaran, seserahan, MC, dan dokumentasi.",
    photo: "j-khitbah",
    alt: "Sepasang cincin perak di dalam kotak beludru merah.",
  },
  {
    id: "akad",
    phase: "Saat akad",
    name: "Akad",
    line: "Ijab qabul yang khidmat.",
    how: "Di rumah, gedung, atau masjid mitra. Koordinasi penghulu, wali, dan saksi oleh tim kami.",
    photo: "n-ijab",
    alt: "Jabat tangan pengantin pria dan wali di atas meja akad saat ijab qabul.",
  },
  {
    id: "walimah",
    phase: "Saat akad",
    name: "Walimah",
    line: "Merayakan dengan cara yang diridhai.",
    how: "Katering, pelaminan, rias, dan dokumentasi. Area tamu pria dan wanita bisa dipisah.",
    photo: "n-pelaminan",
    alt: "Pelaminan berhias bunga warna-warni dengan sofa pengantin keemasan.",
  },
  {
    id: "rumah-tangga",
    phase: "Setelah akad",
    name: "Rumah tangga",
    line: "Kami tetap menemani setelah walimah usai.",
    how: "Kajian dan seminar rumah tangga, serta konsultasi syariah dengan asatidz lewat aplikasi.",
    photo: "n-doa",
    alt: "Dua telapak tangan menengadah berdoa di depan jendela berukir kerawang.",
  },
];

// The original ta'aruf journey, used on the app page.
export const TAARUF_JOURNEY = [
  { name: "Ta'aruf", line: "Saling mengenal lewat biodata." },
  { name: "Nadzhor", line: "Bertemu dan melihat calon, didampingi wali atau mahram." },
  { name: "Khitbah", line: "Meminang dengan niat yang sudah mantap." },
] as const;

// DATA CONTOH: materi dan format kelas pranikah. Ganti dengan kurikulum resmi.
// Nama dan foto asatidz sengaja tidak ditampilkan (arahan stakeholder 21 Okt 2026); cukup sebut "asatidz Mahabbati".
// Selama `KELAS_NOTE` tidak kosong, catatan "data contoh" ikut tampil di situs.
export const KELAS_NOTE = "Daftar materi dan format kelas ini masih contoh. Kurikulum resminya sedang kami susun.";
export const KELAS_MODULES: { title: string; body: string }[] = [
  { title: "Niat dan kesiapan menikah", body: "Meluruskan niat, mengenali kesiapan diri dan keluarga." },
  { title: "Adab ta'aruf dan khitbah", body: "Batasan, peran wali, dan cara meminang yang baik." },
  { title: "Fiqih akad nikah", body: "Rukun dan syarat akad, mahar, wali, dan saksi." },
  { title: "Hak dan kewajiban suami istri", body: "Peran masing-masing, dan cara saling menunaikannya." },
  { title: "Komunikasi dan mengelola konflik", body: "Berbicara dengan ma'ruf, dan menyelesaikan beda pendapat." },
  { title: "Keuangan keluarga", body: "Nafkah, perencanaan, dan menjauhi riba." },
];
export const KELAS_FACTS: { value: string; label: string }[] = [
  { value: "6 materi", label: "berurutan, dari niat sampai keuangan" },
  { value: "± 45 menit", label: "per materi, video dan versi audio" },
  { value: "Bisa diulang", label: "kapan saja, berdua dari rumah masing-masing" },
  { value: "Ujian & sertifikat", label: "setelah semua materi selesai" },
];

// USULAN: benefit sebelum dan sesudah menikah (arahan 20 Okt 2026, menunggu konfirmasi stakeholder).
// Selama `BENEFITS_NOTE` tidak kosong, catatan ini tampil di situs agar tidak terbaca sebagai janji final.
export const BENEFITS_NOTE = "Program benefit ini sedang disiapkan. Detail dan syaratnya diumumkan di aplikasi Mahabbati.";
export const BENEFITS: { phase: "Sebelum" | "Setelah"; icon: string; title: string; body: string; for: string }[] = [
  { phase: "Sebelum", icon: "school", title: "Kelas pranikah via Zoom", body: "4 sesi bersama asatidz Mahabbati, sebelum akad.", for: "Klien Paket Akad dan Masjid Akad" },
  { phase: "Sebelum", icon: "forum", title: "Konsultasi syariah", body: "Tanya langsung ke asatidz soal persiapan nikah.", for: "Pengguna aplikasi dan klien WO" },
  { phase: "Setelah", icon: "menu_book", title: "Kajian rumah tangga", body: "Akses khusus kajian rumah tangga untuk pengantin baru.", for: "Pasangan dari aplikasi dan klien WO" },
  { phase: "Setelah", icon: "calendar_month", title: "Seminar rumah tangga", body: "Undangan seminar rumah tangga bersama asatidz.", for: "Pasangan dari aplikasi dan klien WO" },
  { phase: "Setelah", icon: "redeem", title: "Voucher makan pengantin baru", body: "Voucher makan berdua di restoran partner.", for: "Klien WO Mahabbati" },
  { phase: "Setelah", icon: "forum", title: "Konsultasi syariah", body: "Tetap bisa bertanya ke asatidz setelah menikah.", for: "Pasangan dari aplikasi dan klien WO" },
];

// USULAN: standar syar'i Mahabbati. Konfirmasi ke tim WO sebelum dianggap final.
export const SYARI_STANDARDS = [
  { title: "Vendor dikurasi", body: "Setiap vendor kami pilih agar akad dan walimah berjalan sesuai syariat Islam." },
  { title: "Perias wanita untuk pengantin wanita", body: "Rias pengantin dan keluarga wanita selalu ditangani perias wanita." },
  { title: "Area tamu bisa dipisah", body: "Area tamu pria dan wanita kami pisahkan bila keluarga menghendaki." },
  { title: "Waktu sholat dijaga", body: "Setiap rundown memberi jeda sholat, dan musala sudah disiapkan." },
  { title: "Penawaran tertulis sebelum DP", body: "Semua item dan harga tertulis dalam satu dokumen, jadi kamu tahu persis apa yang dibayar." },
];

export const APP_FAQ = [
  {
    q: "Bisakah aku mencari jodoh lewat website ini?",
    a: "Tidak. Pencarian, pengajuan ta'aruf, dan chat hanya ada di aplikasi Mahabbati untuk Android dan iOS. Website ini berisi informasi dan panduan.",
  },
  {
    q: "Apakah pendaftaran gratis?",
    a: "Ya. Akun gratis sudah mendapat satu pengajuan ta'aruf. Membership Silver dan Gold menambah kuota pengajuan dan membuka fitur seperti nadzhor, kajian, dan ujian pranikah.",
  },
  {
    q: "Bagaimana kalau pengajuanku tidak dibalas?",
    a: "Pengajuan yang tidak direspons dalam 7 hari dibatalkan otomatis, dan kuota yang terpakai dikembalikan ke akunmu.",
  },
  {
    q: "Siapa yang bisa melihat fotoku?",
    a: "Fotomu privat. Foto muslimah hanya ditinjau oleh admin wanita. Calon pasangan baru bisa melihatnya setelah kamu menyetujui permintaan, selama 24 jam, dan foto tidak bisa diunduh.",
  },
  {
    q: "Berapa lama proses verifikasi?",
    a: "Paling lama 3×24 jam. WNI memakai e-KTP, WNA memakai paspor, keduanya disertai foto wajah.",
  },
  {
    q: "Bagaimana proses nadzhor?",
    a: "Nadzhor adalah pertemuan untuk saling melihat dan berbincang lebih dalam. Di Mahabbati, nadzhor selalu didampingi wali atau mahram.",
  },
  {
    q: "Apakah kuota membership bisa ditabung?",
    a: "Tidak. Kuota yang tersisa tidak terbawa saat masa membership berakhir. Pembelian kuota tambahan membutuhkan membership yang aktif.",
  },
  {
    q: "Ada batasan saat chat?",
    a: "Setiap pesan maksimal 1.000 karakter, dengan jumlah pesan per ta'aruf sesuai membership: 20 untuk Silver dan 30 untuk Gold.",
  },
];

export const WO_FAQ = [
  {
    q: "Paket apa saja yang termasuk kelas pranikah?",
    // Ikuti item "kelas" di src/data/packages.ts.
    a: "Paket Akad (semua tingkat) dan Masjid Akad. Keduanya sudah termasuk 4 sesi kelas pranikah via Zoom bersama asatidz Mahabbati.",
  },
  {
    q: "Bisa pesan tempat saja?",
    a: "Bisa. Pilih dari tempat mitra kami, lalu tanyakan ketersediaan tanggalnya lewat WhatsApp. Paket WO bisa ditambahkan belakangan.",
  },
  {
    q: "Apakah vendornya sesuai syariat?",
    a: "Ya. Setiap vendor kami kurasi agar akad dan walimah berjalan sesuai syariat Islam, termasuk perias wanita untuk pengantin wanita.",
  },
  {
    q: "Harus pakai aplikasi Mahabbati dulu?",
    // DUMMY: konfirmasi kebijakan.
    a: "Tidak. Kamu bisa langsung konsultasi lewat WhatsApp, meski bertemu calon pasangan di luar Mahabbati.",
  },
  {
    q: "Apakah harga di website sudah final?",
    a: "Harga di website adalah harga paket per tingkat. Bila butuh tambahan tamu, menu, atau layanan lain, tim WO menyesuaikannya dan menuliskannya di penawaran resmi.",
  },
  {
    q: "Bisa melayani di luar Jakarta?",
    // DUMMY: konfirmasi area layanan.
    a: "Kirim kota dan tanggal acaramu lewat WhatsApp. Tim kami akan mengecek ketersediaannya.",
  },
];

export const MEMBERSHIP = {
  tiers: ["Free", "Silver", "Gold"] as const,
  rows: [
    { label: "Pengajuan ta'aruf", values: ["1", "10", "25"] },
    { label: "Pesan per ta'aruf", values: [null, "20", "30"] },
    { label: "Minta lihat foto", values: [false, true, true] },
    { label: "Nadzhor dan khitbah", values: [false, true, true] },
    { label: "Kajian dan e-learning", values: [false, true, "Semua materi"] },
    { label: "Ujian pranikah dan sertifikat", values: [false, true, true] },
    { label: "Benefit merchant", values: [false, true, "Diskon eksklusif"] },
    { label: "Tiket acara Mahabbati", values: [false, false, true] },
    { label: "Jalur prioritas tim admin", values: [false, false, true] },
  ] as { label: string; values: (string | boolean | null)[] }[],
};

// ---------------------------------------------------------------------------------------------
// Language-aware views. English text lives in content.en.ts.
import type { Lang } from "../i18n/lang";
import { merge } from "../i18n/merge";
import * as EN from "./content.en";

const en = <T>(lang: Lang, id: T, over: unknown) => (lang === "en" ? merge(id, over as never) : id);
export const phaseLabel = (phase: string, lang: Lang = "id") => (lang === "en" ? (EN.PHASES_EN[phase] ?? phase) : phase);
export const journeyFor = (lang: Lang = "id") => en(lang, JOURNEY, EN.JOURNEY_EN);
export const taarufJourneyFor = (lang: Lang = "id") => en(lang, TAARUF_JOURNEY, EN.TAARUF_JOURNEY_EN);
export const kelasNoteFor = (lang: Lang = "id") => (lang === "en" ? (KELAS_NOTE && EN.KELAS_NOTE_EN) : KELAS_NOTE);
export const kelasModulesFor = (lang: Lang = "id") => en(lang, KELAS_MODULES, EN.KELAS_MODULES_EN);
export const kelasFactsFor = (lang: Lang = "id") => en(lang, KELAS_FACTS, EN.KELAS_FACTS_EN);
export const benefitsNoteFor = (lang: Lang = "id") => (lang === "en" ? (BENEFITS_NOTE && EN.BENEFITS_NOTE_EN) : BENEFITS_NOTE);
export const benefitsFor = (lang: Lang = "id") => en(lang, BENEFITS, EN.BENEFITS_EN);
export const syariFor = (lang: Lang = "id") => en(lang, SYARI_STANDARDS, EN.SYARI_STANDARDS_EN);
export const appFaqFor = (lang: Lang = "id") => en(lang, APP_FAQ, EN.APP_FAQ_EN);
export const woFaqFor = (lang: Lang = "id") => en(lang, WO_FAQ, EN.WO_FAQ_EN);
export const membershipFor = (lang: Lang = "id") =>
  lang === "en"
    ? {
        tiers: MEMBERSHIP.tiers,
        rows: MEMBERSHIP.rows.map((r, i) => ({
          label: EN.MEMBERSHIP_EN.rows[i] ?? r.label,
          values: r.values.map((v) => (typeof v === "string" ? (EN.MEMBERSHIP_EN.values[v] ?? v) : v)),
        })),
      }
    : MEMBERSHIP;
