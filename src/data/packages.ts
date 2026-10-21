// Wedding Organizer catalogue: what a couple can book, grouped by what they are preparing.
//
// CARA MENGISI DATA ASLI
// - `placeholder: true` pada paket = harga dan rincian masih contoh. Ganti nilainya, lalu set ke false
//   (label "Data contoh" di situs akan hilang otomatis).
// - `includesClass: true` = paket ini termasuk akses kelas pranikah dan nasihat pernikahan dari asatidz
//   Mahabbati di aplikasi. Sementara: paket Akad dan paket Lengkap (arahan 20 Okt 2026), ubah bila perlu.
// - Harga asli dari mahabbati.com dan aplikasi: Wedding Planner Rp1,5 jt, Intimate Rp15 jt,
//   Full Package Standard Rp75 jt (300 pax) dan Exclusive Rp95 jt (500 pax). Sisanya contoh.

import type { Lang } from "../i18n/lang";
import { merge } from "../i18n/merge";
import { NEEDS_EN, ADDONS_EN, CLASS_ITEM_EN, PACKAGES_EN, RUNDOWN_EN, WO_STEPS_EN, GUEST_RANGES_EN, BUDGETS_EN } from "./packages.en";

export type NeedId = "lengkap" | "akad" | "masjid" | "walimah" | "khitbah" | "tempat" | "harih";

export const NEEDS: { id: NeedId; label: string; short: string; photo: string; alt: string }[] = [
  { id: "lengkap", label: "Paket lengkap", short: "Dari akad sampai walimah, diurus satu tim.", photo: "n-stage", alt: "Pelaminan berhias bunga merah dan putih dengan kursi pengantin berukir emas." },
  { id: "akad", label: "Akad nikah", short: "Ijab qabul yang khidmat, di rumah atau di gedung.", photo: "n-ijab", alt: "Jabat tangan pengantin pria dan wali di atas meja akad saat ijab qabul." },
  { id: "masjid", label: "Akad di masjid", short: "Akad di masjid mitra, adab masjidnya tetap terjaga.", photo: "v-masjid-court", alt: "Pelataran masjid putih dengan ukiran kerawang." },
  { id: "walimah", label: "Walimah", short: "Jamuan, pelaminan, dan dokumentasi untuk resepsi.", photo: "wo-decor-lavender", alt: "Pelaminan berhias bunga lavender dan tirai." },
  { id: "khitbah", label: "Khitbah & lamaran", short: "Pertemuan dua keluarga yang hangat dan tertata.", photo: "n-ring-lamaran", alt: "Cincin dipasangkan ke jari calon pengantin wanita yang berhias inai." },
  { id: "tempat", label: "Tempat saja", short: "Sewa tempat mitra: masjid, gedung, taman, atau villa.", photo: "v-ballroom", alt: "Ballroom dengan lampu gantung dan meja tamu bertaplak putih." },
  { id: "harih", label: "Koordinasi hari H", short: "Vendor dari kamu, kendali acara dari kami.", photo: "n-venue-arch", alt: "Gapura bunga di aula resepsi yang tertata, sebelum tamu datang." },
];

export type IconName =
  | "restaurant"
  | "assignment"
  | "local_florist"
  | "checkroom"
  | "photo_camera"
  | "groups"
  | "event_available"
  | "volunteer_activism"
  | "group"
  | "checklist"
  | "drafts"
  | "videocam"
  | "school"
  | "mic"
  | "mosque"
  | "redeem";

export type Item = { icon: IconName; label: string; value: string; detail: string };

export type AddonId = "video" | "stream" | "henna" | "invite" | "crew";

export const ADDONS: Record<AddonId, { label: string; price: number }> = {
  // DUMMY: harga add-on contoh.
  video: { label: "Video sinematik, highlight 3 menit", price: 4_500_000 },
  stream: { label: "Live streaming akad untuk keluarga jauh", price: 2_000_000 },
  henna: { label: "Henna pengantin wanita", price: 1_250_000 },
  invite: { label: "Undangan digital dengan RSVP", price: 750_000 },
  crew: { label: "Tambahan 2 crew", price: 900_000 },
};

export type Variant = {
  id: string;
  name: string;
  price: number;
  guests: { min: number; max: number; step: number; included: number };
  /** Extra cost per block of guests above `included`. */
  extra: { per: number; price: number };
  items: Item[];
  addons: AddonId[];
};

export type Package = {
  slug: string;
  need: NeedId;
  name: string;
  priceFrom: number;
  /** true = harga dan isi masih contoh. */
  placeholder: boolean;
  /** true = termasuk akses kelas pranikah & nasihat pernikahan di aplikasi. */
  includesClass: boolean;
  promise: string;
  forWho: string;
  summary: string;
  photo: string;
  gallery: string[];
  featured?: boolean;
  variants: Variant[];
};

/** Added to every package with includesClass, so the claim lives in one place. */
export const CLASS_ITEM: Item = {
  icon: "school",
  label: "Kelas pranikah & nasihat",
  value: "Di aplikasi",
  detail: "Akses kelas pranikah dan nasihat pernikahan bersama asatidz Mahabbati lewat aplikasi Mahabbati.",
};

export const PACKAGES: Package[] = [
  {
    slug: "full-package",
    need: "lengkap",
    name: "Full Package Wedding",
    priceFrom: 75_000_000,
    placeholder: false,
    includesClass: true,
    featured: true,
    promise: "Didampingi dari rencana pertama sampai tamu terakhir pulang.",
    forWho: "Untuk akad dan walimah 300 tamu ke atas, dengan satu tim yang mengurus semuanya.",
    summary:
      "Kami mulai dengan mendengarkan prioritas kalian, lalu menyusunnya jadi rencana yang jelas, lengkap dengan biayanya.",
    photo: "n-stage",
    gallery: ["n-stage", "wo-decor-lavender", "wo-catering", "n-siger", "wo-catering-2", "n-bride-arch"],
    variants: [
      {
        id: "standard",
        name: "Standard",
        price: 75_000_000,
        guests: { min: 200, max: 800, step: 50, included: 300 },
        extra: { per: 50, price: 4_750_000 }, // DUMMY
        addons: ["video", "stream", "henna", "invite", "crew"],
        items: [
          // DUMMY sebagian: isi mengikuti layar WO di aplikasi, detailnya contoh.
          { icon: "restaurant", label: "Catering", value: "300 pax", detail: "Prasmanan dan tiga gubukan. Menu dipilih saat food testing." },
          { icon: "assignment", label: "Wedding planner", value: "Profesional", detail: "Koordinator utama dan 10 crew sejak technical meeting." },
          { icon: "local_florist", label: "Dekorasi", value: "Pelaminan & akad", detail: "Pelaminan, area akad, dan gerbang masuk dengan bunga segar." },
          { icon: "checkroom", label: "MUA & busana", value: "Akad & resepsi", detail: "Rias dan busana pengantin, ditambah rias untuk kedua orang tua." },
          { icon: "mic", label: "Ustadz pemateri", value: "Tausiyah", detail: "Tausiyah singkat untuk kedua keluarga di hari acara." },
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
          { icon: "mic", label: "Ustadz pemateri", value: "Tausiyah", detail: "Tausiyah singkat untuk kedua keluarga di hari acara." },
          { icon: "videocam", label: "Dokumentasi", value: "Foto & sinematik", detail: "Dua fotografer, dua videografer, highlight sinematik 3 menit, album cetak." },
          { icon: "drafts", label: "Undangan digital", value: "Dengan RSVP", detail: "Satu halaman undangan dengan konfirmasi kehadiran tamu." },
        ],
      },
    ],
  },
  {
    slug: "intimate-wedding",
    need: "lengkap",
    name: "Intimate Wedding",
    priceFrom: 15_000_000,
    placeholder: false,
    includesClass: true,
    featured: true,
    promise: "Akad dan walimah yang hangat, untuk orang-orang terdekat.",
    forWho: "Untuk acara sederhana hingga 200 tamu, tanpa repot menghubungi vendor satu per satu.",
    summary: "Satu paket untuk akad dan walimah kecil: makanan, dekorasi, rias, dokumentasi, dan tim yang mengatur jalannya acara.",
    photo: "n-ring-white",
    gallery: ["n-ring-white", "n-doa", "wo-ring", "n-melati"],
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
          { icon: "groups", label: "Wedding planner", value: "+ 4 crew", detail: "Koordinator dan crew yang mengatur alur acara di hari H." },
        ],
      },
    ],
  },
  {
    slug: "paket-akad",
    need: "akad",
    name: "Paket Akad",
    priceFrom: 4_500_000,
    placeholder: true,
    includesClass: true,
    featured: true,
    promise: "Ijab qabul yang khidmat, tanpa repot di belakang layar.",
    forWho: "Untuk akad di rumah atau gedung. Walimah bisa menyusul, atau diadakan terpisah.",
    summary: "Area akad, rias, dokumentasi, dan koordinasi dengan penghulu, wali, serta saksi, ditangani satu tim.",
    photo: "n-ijab",
    gallery: ["n-ijab", "n-doa", "wo-ring", "hands"],
    variants: [
      {
        id: "akad",
        name: "Paket Akad",
        price: 4_500_000,
        guests: { min: 20, max: 150, step: 10, included: 50 },
        extra: { per: 10, price: 650_000 },
        addons: ["stream", "henna", "video"],
        items: [
          // DUMMY: seluruh isi paket contoh.
          { icon: "local_florist", label: "Dekorasi", value: "Area akad", detail: "Meja akad, backdrop sederhana, dan bunga segar." },
          { icon: "checkroom", label: "MUA & busana", value: "Akad", detail: "Rias dan busana pengantin wanita untuk prosesi akad." },
          { icon: "volunteer_activism", label: "Koordinasi akad", value: "Termasuk", detail: "Koordinasi penghulu, wali, dan saksi agar ijab qabul berjalan khidmat." },
          { icon: "photo_camera", label: "Dokumentasi", value: "Foto 3 jam", detail: "Satu fotografer, galeri online." },
          { icon: "restaurant", label: "Jamuan keluarga", value: "50 pax", detail: "Nasi kotak atau prasmanan kecil untuk keluarga inti." },
        ],
      },
    ],
  },
  {
    slug: "akad-di-masjid",
    need: "masjid",
    name: "Akad di Masjid",
    priceFrom: 25_000_000,
    placeholder: true,
    includesClass: true,
    featured: true,
    promise: "Akad di rumah Allah, dengan adab masjid yang terjaga.",
    forWho: "Untuk akad di masjid mitra, disusul jamuan sederhana bersama keluarga dan sahabat.",
    summary: "Kami mengurus izin dan koordinasi dengan pengurus masjid, menata area akad sesuai adab masjid, sampai jamuan setelahnya.",
    photo: "v-masjid-court",
    gallery: ["v-masjid-court", "v-masjid", "n-ijab", "v-masjid-night"],
    variants: [
      {
        id: "masjid",
        name: "Akad di Masjid",
        price: 25_000_000,
        guests: { min: 50, max: 300, step: 25, included: 100 },
        extra: { per: 25, price: 2_000_000 },
        addons: ["stream", "video", "invite"],
        items: [
          // DUMMY: seluruh isi paket contoh.
          { icon: "mosque", label: "Masjid mitra", value: "Termasuk", detail: "Izin, jadwal, dan koordinasi dengan pengurus masjid." },
          { icon: "local_florist", label: "Dekorasi", value: "Sesuai adab masjid", detail: "Penataan area akad tanpa mengganggu ruang sholat." },
          { icon: "checkroom", label: "MUA & busana", value: "Akad", detail: "Rias dan busana pengantin, ruang rias terpisah." },
          { icon: "restaurant", label: "Jamuan", value: "100 pax", detail: "Jamuan sederhana setelah akad di aula atau tempat terdekat." },
          { icon: "photo_camera", label: "Dokumentasi", value: "Foto & video", detail: "Satu fotografer dan satu videografer." },
          { icon: "groups", label: "Crew", value: "6 orang", detail: "Mengatur alur tamu pria dan wanita serta jamuan." },
        ],
      },
    ],
  },
  {
    slug: "paket-walimah",
    need: "walimah",
    name: "Paket Walimah",
    priceFrom: 25_000_000,
    placeholder: true,
    includesClass: false,
    promise: "Resepsi yang tertata, tamu pulang dengan kesan baik.",
    forWho: "Akad sudah terlaksana, kini saatnya resepsi dengan katering, pelaminan, dan tim yang mengatur.",
    summary: "Katering, pelaminan, rias, dokumentasi, dan crew untuk resepsi. Tempat bisa memakai milikmu atau tempat mitra.",
    photo: "wo-decor-lavender",
    gallery: ["wo-decor-lavender", "wo-catering", "wo-catering-2", "v-ballroom"],
    variants: [
      {
        id: "walimah",
        name: "Paket Walimah",
        price: 25_000_000,
        guests: { min: 100, max: 1000, step: 50, included: 300 },
        extra: { per: 50, price: 4_250_000 },
        addons: ["video", "invite", "crew"],
        items: [
          // DUMMY: seluruh isi paket contoh.
          { icon: "restaurant", label: "Catering", value: "300 pax", detail: "Prasmanan dan dua gubukan." },
          { icon: "local_florist", label: "Pelaminan", value: "Termasuk", detail: "Pelaminan dan dekorasi pintu masuk." },
          { icon: "checkroom", label: "MUA & busana", value: "Resepsi", detail: "Rias dan busana pengantin untuk resepsi." },
          { icon: "photo_camera", label: "Dokumentasi", value: "Foto 6 jam", detail: "Dua fotografer, galeri online." },
          { icon: "groups", label: "Crew", value: "8 orang", detail: "Mengatur tamu, katering, dan jalannya resepsi." },
          { icon: "group", label: "Area tamu", value: "Bisa dipisah", detail: "Penataan area tamu pria dan wanita bila keluarga menghendaki." },
        ],
      },
    ],
  },
  {
    slug: "paket-khitbah",
    need: "khitbah",
    name: "Paket Khitbah",
    priceFrom: 3_500_000,
    placeholder: true,
    includesClass: false,
    promise: "Pertemuan dua keluarga yang hangat dan tertata.",
    forWho: "Untuk lamaran di rumah keluarga, dari yang sederhana sampai lengkap dengan seserahan.",
    summary: "Dekorasi ruang lamaran, penataan seserahan, MC, dokumentasi, dan jamuan keluarga.",
    photo: "n-ring-lamaran",
    gallery: ["n-ring-lamaran", "j-khitbah", "wo-ring", "v-dining"],
    variants: [
      {
        id: "khitbah",
        name: "Paket Khitbah",
        price: 3_500_000,
        guests: { min: 20, max: 100, step: 10, included: 30 },
        extra: { per: 10, price: 500_000 },
        addons: ["video", "henna"],
        items: [
          // DUMMY: seluruh isi paket contoh.
          { icon: "local_florist", label: "Dekorasi", value: "Ruang lamaran", detail: "Backdrop dan bunga untuk ruang tamu keluarga." },
          { icon: "redeem", label: "Seserahan", value: "6 tray", detail: "Penataan tray seserahan, barang dari keluarga." },
          { icon: "mic", label: "MC lamaran", value: "Termasuk", detail: "Memandu sambutan kedua keluarga." },
          { icon: "photo_camera", label: "Dokumentasi", value: "Foto 3 jam", detail: "Satu fotografer, galeri online." },
          { icon: "restaurant", label: "Jamuan", value: "30 pax", detail: "Hidangan untuk kedua keluarga." },
        ],
      },
    ],
  },
  {
    slug: "wedding-planner",
    need: "harih",
    name: "Wedding Planner",
    priceFrom: 1_500_000,
    placeholder: false,
    includesClass: false,
    promise: "Hari H berjalan sesuai rencana, kalian cukup hadir.",
    forWho: "Untuk kalian yang sudah memilih vendor sendiri dan butuh satu tim untuk mengendalikan hari H.",
    summary:
      "Vendor sudah kalian pilih. Tim kami memegang kendali di hari H, supaya semua rencana berjalan tepat waktu dan rapi.",
    photo: "n-venue-arch",
    gallery: ["n-venue-arch", "n-ijab", "hands"],
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
        ],
      },
    ],
  },
];

// Language-aware views of the data above. English text lives in packages.en.ts.
const PACKAGES_BY_LANG = {
  id: PACKAGES,
  en: PACKAGES.map((p) => merge(p, PACKAGES_EN[p.slug])),
} as const;
export const packagesFor = (lang: Lang = "id") => PACKAGES_BY_LANG[lang];
export const needsFor = (lang: Lang = "id") => (lang === "en" ? merge(NEEDS, NEEDS_EN) : NEEDS);
export const addonLabel = (id: AddonId, lang: Lang = "id") => (lang === "en" ? ADDONS_EN[id]?.label : undefined) ?? ADDONS[id].label;
export const classItemFor = (lang: Lang = "id") => (lang === "en" ? merge(CLASS_ITEM, CLASS_ITEM_EN) : CLASS_ITEM);

export const findPackage = (slug: string, lang: Lang = "id") => packagesFor(lang).find((p) => p.slug === slug);
export const needLabel = (id: NeedId, lang: Lang = "id") => needsFor(lang).find((n) => n.id === id)?.label ?? id;

/** Items shown on a package page: its own items, plus the class access when included. */
export const itemsFor = (p: Package, v: Variant, lang: Lang = "id") => (p.includesClass ? [...v.items, classItemFor(lang)] : v.items);

/** Estimate for a variant, guest count and add-ons. Mirrors src/scripts/estimator.ts. */
export const estimate = (v: Variant, guests: number, addons: AddonId[] = []) => {
  const over = Math.max(0, guests - v.guests.included);
  const blocks = Math.ceil(over / v.extra.per);
  return v.price + blocks * v.extra.price + addons.reduce((s, a) => s + ADDONS[a].price, 0);
};

/** Guest range a package can serve, across its variants. */
export const guestRange = (p: Package) => ({
  min: Math.min(...p.variants.map((v) => v.guests.min)),
  max: Math.max(...p.variants.map((v) => v.guests.max)),
});

// DUMMY: contoh susunan hari H, untuk memberi gambaran.
export const RUNDOWN = [
  { time: "07.00", title: "Rias dan persiapan", note: "MUA mulai, crew memeriksa venue." },
  { time: "08.30", title: "Keluarga tiba", note: "Briefing singkat dengan wali dan saksi." },
  { time: "09.00", title: "Akad nikah", note: "Ijab qabul, doa, penyerahan mahar." },
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
  { title: "Hari H", body: "Tim kami yang memegang kendali. Keluarga cukup hadir dan menikmati momennya." },
];

export const GUEST_RANGES = [
  { id: "s", label: "Hingga 100 tamu", min: 0, max: 100 },
  { id: "m", label: "100 sampai 300 tamu", min: 100, max: 300 },
  { id: "l", label: "300 sampai 500 tamu", min: 300, max: 500 },
  { id: "xl", label: "Lebih dari 500 tamu", min: 500, max: 5000 },
];

export const BUDGETS = [
  { id: "b1", label: "Hingga Rp10 jt", max: 10_000_000 },
  { id: "b2", label: "Hingga Rp50 jt", max: 50_000_000 },
  { id: "b3", label: "Hingga Rp100 jt", max: 100_000_000 },
];

export const rundownFor = (lang: Lang = "id") => (lang === "en" ? merge(RUNDOWN, RUNDOWN_EN) : RUNDOWN);
export const woStepsFor = (lang: Lang = "id") => (lang === "en" ? merge(WO_STEPS, WO_STEPS_EN) : WO_STEPS);
export const guestRangesFor = (lang: Lang = "id") =>
  lang === "en" ? GUEST_RANGES.map((g, i) => ({ ...g, label: GUEST_RANGES_EN[i] })) : GUEST_RANGES;
export const budgetsFor = (lang: Lang = "id") => (lang === "en" ? BUDGETS.map((b, i) => ({ ...b, label: BUDGETS_EN[i] })) : BUDGETS);
