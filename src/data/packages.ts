// Wedding Organizer packages.
//
// SUMBER HARGA
// - Harga "mulai dari" tiap paket (Rp1,5 jt / Rp15 jt / Rp75 jt) diambil dari mahabbati.com.
// - Varian Standard (Rp75 jt, 300 pax) dan Exclusive (Rp95 jt, 500 pax) diambil dari layar WO di aplikasi.
// - DUMMY: rincian isi paket, harga tambahan per tamu, dan add-on di bawah ini adalah contoh.
//   Konfirmasi ke tim WO sebelum publikasi (cari komentar "DUMMY").

export type IconName =
  | "restaurant"
  | "assignment"
  | "local_florist"
  | "checkroom"
  | "co_present"
  | "photo_camera"
  | "groups"
  | "event_available"
  | "volunteer_activism"
  | "group"
  | "checklist"
  | "drafts"
  | "videocam";

export type Item = { icon: IconName; label: string; value: string; detail: string };

export type Variant = {
  id: string;
  name: string;
  price: number;
  guests: { min: number; max: number; step: number; included: number };
  /** Extra cost per block of guests above `included` (DUMMY). */
  extra: { per: number; price: number };
  items: Item[];
  addons: AddonId[];
};

export type AddonId = "video" | "stream" | "henna" | "invite" | "crew";

export const ADDONS: Record<AddonId, { label: string; price: number }> = {
  // DUMMY: harga add-on contoh.
  video: { label: "Video sinematik, highlight 3 menit", price: 4_500_000 },
  stream: { label: "Live streaming akad untuk keluarga jauh", price: 2_000_000 },
  henna: { label: "Henna pengantin wanita", price: 1_250_000 },
  invite: { label: "Undangan digital dengan RSVP", price: 750_000 },
  crew: { label: "Tambahan 2 crew", price: 900_000 },
};

export type Package = {
  slug: string;
  name: string;
  priceFrom: number;
  promise: string;
  forWho: string;
  summary: string;
  photo: string;
  gallery: string[];
  variants: Variant[];
};

const ustadz: Item = {
  icon: "co_present",
  label: "Ustadz pemateri",
  value: "Khutbah & tausiyah",
  detail: "Khutbah nikah sebelum ijab qabul dan tausiyah singkat untuk kedua keluarga.",
};

export const PACKAGES: Package[] = [
  {
    slug: "wedding-planner",
    name: "Wedding Planner",
    priceFrom: 1_500_000,
    promise: "Hari H berjalan sesuai rencana.",
    forWho: "Vendor sudah kamu pilih sendiri. Kami yang memegang kendali di hari H.",
    summary:
      "Tim kami mengendalikan hari H supaya seluruh rencana dieksekusi tepat, rapi, dan tanpa gangguan. Keluarga cukup hadir dan menikmati.",
    photo: "wo-family-doa",
    gallery: ["wo-family-doa", "j-akad", "hands"],
    variants: [
      {
        id: "standar",
        name: "Wedding Planner",
        price: 1_500_000,
        guests: { min: 100, max: 1000, step: 50, included: 300 },
        extra: { per: 150, price: 500_000 }, // DUMMY
        addons: ["stream", "crew"],
        items: [
          // DUMMY: rincian isi paket.
          { icon: "assignment", label: "Wedding planner", value: "1 koordinator", detail: "Satu orang yang memegang seluruh rencana, dari technical meeting sampai acara ditutup." },
          { icon: "groups", label: "Crew hari H", value: "6 orang", detail: "Mengatur alur keluarga, tamu, dan vendor. Jumlahnya bertambah mengikuti jumlah tamu." },
          { icon: "event_available", label: "Technical meeting", value: "2 kali", detail: "Bersama keluarga dan vendor pada H-30 dan H-7 untuk mengunci rundown." },
          { icon: "checklist", label: "Rundown", value: "Akad & walimah", detail: "Disusun bersama keluarga, lengkap dengan jeda waktu sholat." },
          { icon: "volunteer_activism", label: "Pendampingan akad", value: "Termasuk", detail: "Koordinasi penghulu, wali, dan saksi agar ijab qabul berjalan khidmat." },
          { icon: "group", label: "Area tamu", value: "Bisa dipisah", detail: "Penataan area tamu pria dan wanita bila keluarga menghendaki." },
        ],
      },
    ],
  },
  {
    slug: "intimate-wedding",
    name: "Intimate Wedding",
    priceFrom: 15_000_000,
    promise: "Akad dan walimah yang hangat, untuk orang-orang terdekat.",
    forWho: "Acara sederhana hingga 200 tamu, tanpa repot mengurus vendor satu per satu.",
    summary:
      "Satu paket untuk akad dan walimah kecil: makanan, dekorasi, rias, dokumentasi, dan tim yang mengatur jalannya acara.",
    photo: "couple-white",
    gallery: ["couple-white", "wo-doa", "wo-ring", "wo-melati"],
    variants: [
      {
        id: "intimate",
        name: "Intimate Wedding",
        price: 15_000_000,
        guests: { min: 50, max: 200, step: 10, included: 100 },
        extra: { per: 10, price: 900_000 }, // DUMMY
        addons: ["video", "stream", "henna", "invite"],
        items: [
          // DUMMY: rincian isi paket.
          { icon: "restaurant", label: "Catering", value: "100 pax", detail: "Prasmanan dengan dua menu utama dan satu gubukan." },
          { icon: "local_florist", label: "Dekorasi", value: "Akad & pelaminan", detail: "Area akad dan pelaminan minimalis dengan bunga segar." },
          { icon: "checkroom", label: "MUA & busana", value: "1 tampilan", detail: "Rias dan busana pengantin untuk akad sampai walimah." },
          { icon: "photo_camera", label: "Dokumentasi", value: "Foto 6 jam", detail: "Satu fotografer, 100 foto hasil edit dalam galeri online." },
          ustadz,
          { icon: "groups", label: "Wedding planner", value: "+ 4 crew", detail: "Koordinator dan crew yang mengatur alur acara di hari H." },
        ],
      },
    ],
  },
  {
    slug: "full-package",
    name: "Full Package Wedding",
    priceFrom: 75_000_000,
    promise: "Didampingi dari rencana pertama sampai tamu terakhir pulang.",
    forWho: "Walimah 300 tamu ke atas, dengan satu tim yang mengurus semuanya.",
    summary:
      "Kami mendampingi sejak awal: mempelajari prioritas kalian, lalu menyusunnya menjadi rencana yang terstruktur dan terukur.",
    photo: "wo-hero",
    gallery: ["wo-hero", "wo-decor-lavender", "wo-catering", "wo-mua", "wo-catering-2", "bride-portrait"],
    variants: [
      {
        id: "standard",
        name: "Standard",
        price: 75_000_000,
        guests: { min: 200, max: 800, step: 50, included: 300 },
        extra: { per: 50, price: 4_750_000 }, // DUMMY
        addons: ["video", "stream", "henna", "invite", "crew"],
        items: [
          { icon: "restaurant", label: "Catering", value: "300 pax", detail: "Prasmanan dan tiga gubukan. Menu dipilih saat food testing." },
          { icon: "assignment", label: "Wedding planner", value: "Profesional", detail: "Koordinator utama dan 10 crew sejak technical meeting." },
          { icon: "local_florist", label: "Dekorasi", value: "Pelaminan & akad", detail: "Pelaminan, area akad, dan gerbang masuk dengan bunga segar." },
          { icon: "checkroom", label: "MUA & busana", value: "Akad & resepsi", detail: "Rias dan busana pengantin, ditambah rias untuk kedua orang tua." },
          ustadz,
          { icon: "photo_camera", label: "Dokumentasi", value: "Foto & video", detail: "Dua fotografer, satu videografer, dan album cetak." },
        ],
      },
      {
        id: "exclusive",
        name: "Exclusive",
        price: 95_000_000,
        guests: { min: 300, max: 1000, step: 50, included: 500 },
        extra: { per: 50, price: 5_500_000 }, // DUMMY
        addons: ["stream", "henna", "crew"],
        items: [
          { icon: "restaurant", label: "Catering", value: "500 pax", detail: "Prasmanan dan lima gubukan. Menu dipilih saat food testing." },
          { icon: "assignment", label: "Wedding planner", value: "Profesional", detail: "Koordinator utama dan 14 crew sejak technical meeting." },
          { icon: "local_florist", label: "Dekorasi", value: "Premium", detail: "Pelaminan, area akad, gerbang, dan meja tamu VIP dengan bunga segar." },
          { icon: "checkroom", label: "MUA & busana", value: "Akad & resepsi", detail: "Rias dan busana pengantin, ditambah empat anggota keluarga inti." },
          ustadz,
          { icon: "videocam", label: "Dokumentasi", value: "Foto & sinematik", detail: "Dua fotografer, dua videografer, highlight sinematik 3 menit, album cetak." },
          { icon: "drafts", label: "Undangan digital", value: "Dengan RSVP", detail: "Satu halaman undangan dengan konfirmasi kehadiran tamu." },
        ],
      },
    ],
  },
];

export const findPackage = (slug: string) => PACKAGES.find((p) => p.slug === slug);

/** Estimate for a variant, guest count and selected add-ons. Mirrors src/scripts/estimator.ts. */
export const estimate = (v: Variant, guests: number, addons: AddonId[] = []) => {
  const over = Math.max(0, guests - v.guests.included);
  const blocks = Math.ceil(over / v.extra.per);
  return v.price + blocks * v.extra.price + addons.reduce((s, a) => s + ADDONS[a].price, 0);
};

// DUMMY: contoh susunan hari H, untuk memberi gambaran.
export const RUNDOWN = [
  { time: "07.00", title: "Rias dan persiapan", note: "MUA mulai, crew memeriksa venue." },
  { time: "08.30", title: "Keluarga tiba", note: "Briefing singkat dengan wali dan saksi." },
  { time: "09.00", title: "Khutbah nikah dan akad", note: "Ijab qabul, doa, penyerahan mahar." },
  { time: "10.00", title: "Tausiyah dan foto keluarga", note: "Urutan foto sudah disepakati di technical meeting." },
  { time: "11.00", title: "Walimah dibuka", note: "Tamu dipersilakan, area pria dan wanita bila dipisah." },
  { time: "12.00", title: "Jeda sholat Dzuhur", note: "Acara berhenti sejenak, musala sudah disiapkan." },
  { time: "13.30", title: "Penutupan", note: "Crew merapikan, keluarga pulang tanpa urusan tersisa." },
];

// DUMMY: alur layanan, perlu konfirmasi tim WO.
export const WO_STEPS = [
  { title: "Konsultasi lewat WhatsApp", body: "Ceritakan tanggal, kota, dan perkiraan jumlah tamu." },
  { title: "Penawaran tertulis", body: "Rincian item dan harga dalam satu dokumen, sebelum kamu membayar DP." },
  { title: "Technical meeting", body: "Bersama keluarga dan vendor, mengunci rundown dan pembagian tugas." },
  { title: "Hari H", body: "Tim memegang kendali. Keluarga cukup hadir dan menikmati momennya." },
];
