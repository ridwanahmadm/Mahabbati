// Wedding Organizer catalogue: what a couple can book, grouped by what they are preparing.
//
// SUMBER DATA
// - Harga dan isi paket dari "Paket wedding MAHABBATI_REVAMP.xlsx" (28 Okt 2026). Setiap sheet = satu tingkat.
// - Isi paket ditulis sebagai kunci item (lihat ITEM_TEXT). Teksnya ada di satu tempat, jadi tingkat yang
//   isinya sama tidak perlu ditulis ulang. "Grab/bensin" di file adalah biaya internal, tidak ditampilkan.
// - Item "kelas" (Zoom Pranikah, 4 sesi) mengikuti file: hanya di Paket Akad dan Masjid Akad.
// - `placeholder: true` = harga dan rincian masih contoh (label "Data contoh" tampil di situs).

import type { Lang } from "../i18n/lang";
import { merge } from "../i18n/merge";
import { NEEDS_EN, ITEM_TEXT_EN, PACKAGES_EN, RUNDOWN_EN, WO_STEPS_EN, GUEST_RANGES_EN, BUDGETS_EN } from "./packages.en";

export type NeedId = "lengkap" | "akad" | "masjid" | "walimah" | "khitbah" | "tempat";

export const NEEDS: { id: NeedId; label: string; short: string; photo: string; alt: string }[] = [
  { id: "lengkap", label: "Paket lengkap", short: "Dari akad sampai walimah, diurus satu tim.", photo: "n-stage", alt: "Pelaminan berhias bunga merah dan putih dengan kursi pengantin berukir emas." },
  { id: "akad", label: "Akad nikah", short: "Ijab qabul yang khidmat, di rumah atau di gedung.", photo: "n-ijab", alt: "Jabat tangan pengantin pria dan wali di atas meja akad saat ijab qabul." },
  { id: "masjid", label: "Akad di masjid", short: "Akad di masjid mitra, adab masjidnya tetap terjaga.", photo: "v-masjid-court", alt: "Pelataran masjid putih dengan ukiran kerawang." },
  { id: "walimah", label: "Walimah", short: "Jamuan, pelaminan, dan dokumentasi untuk resepsi.", photo: "wo-decor-lavender", alt: "Pelaminan berhias bunga lavender dan tirai." },
  { id: "khitbah", label: "Khitbah & lamaran", short: "Pertemuan dua keluarga yang hangat dan tertata.", photo: "n-ring-lamaran", alt: "Cincin dipasangkan ke jari calon pengantin wanita yang berhias inai." },
  { id: "tempat", label: "Tempat saja", short: "Sewa tempat mitra: masjid, gedung, taman, atau villa.", photo: "v-ballroom", alt: "Ballroom dengan lampu gantung dan meja tamu bertaplak putih." },
];

export type IconName =
  | "restaurant"
  | "lunch_dining"
  | "local_florist"
  | "checkroom"
  | "photo_camera"
  | "groups"
  | "record_voice_over"
  | "mic"
  | "mosque"
  | "menu_book"
  | "redeem"
  | "hotel"
  | "video_chat"
  | "travel_explore";

export type Item = { icon: IconName; label: string; value: string; detail: string };

/** What a tier can contain. Order here is the order shown on the package page. */
export type ItemKey =
  | "masjid"
  | "catering"
  | "nasibox"
  | "dekorasi"
  | "mua"
  | "muaAttire"
  | "photovideo"
  | "ustadz"
  | "mc"
  | "crew"
  | "bukutamu"
  | "merch"
  | "hotel"
  | "kelas"
  | "survey";

/** A tier's item: its key, plus a count where the sheet gives one (pax, people, sessions). */
export type ItemRef = [ItemKey, number?];

type ItemText = Record<ItemKey, (n: number) => Omit<Item, "icon">>;

const ICONS: Record<ItemKey, IconName> = {
  masjid: "mosque",
  catering: "restaurant",
  nasibox: "lunch_dining",
  dekorasi: "local_florist",
  mua: "checkroom",
  muaAttire: "checkroom",
  photovideo: "photo_camera",
  ustadz: "record_voice_over",
  mc: "mic",
  crew: "groups",
  bukutamu: "menu_book",
  merch: "redeem",
  hotel: "hotel",
  kelas: "video_chat",
  survey: "travel_explore",
};

export const ITEM_TEXT: ItemText = {
  masjid: () => ({ label: "Masjid mitra", value: "Termasuk", detail: "Tempat akad di masjid mitra, termasuk izin dan koordinasi dengan pengurusnya." }),
  catering: (n) => ({ label: "Catering", value: `${n} pax`, detail: "Hidangan untuk tamu. Menunya dipilih bersama tim kami." }),
  nasibox: (n) => ({ label: "Nasi box", value: `${n} kotak`, detail: "Hidangan untuk keluarga inti setelah akad." }),
  dekorasi: () => ({ label: "Dekorasi", value: "Termasuk", detail: "Penataan area acara, disesuaikan dengan tempat dan tema pilihanmu." }),
  mua: () => ({ label: "Rias", value: "MUA", detail: "Rias calon pengantin wanita, oleh MUA wanita." }),
  muaAttire: () => ({ label: "Rias & busana", value: "MUA & attire", detail: "Rias dan busana pengantin, oleh MUA wanita." }),
  photovideo: (n) => ({ label: "Foto & video", value: `${n} orang`, detail: "Fotografer dan videografer yang mengabadikan acara." }),
  ustadz: () => ({ label: "Ustadz", value: "Tausiyah", detail: "Tausiyah dan doa untuk kedua keluarga di hari acara." }),
  mc: () => ({ label: "MC", value: "Termasuk", detail: "Memandu jalannya acara dan sambutan keluarga." }),
  crew: (n) => ({ label: "Crew", value: `${n} orang`, detail: "Mengatur alur acara, keluarga, dan vendor di hari H." }),
  bukutamu: (n) => ({ label: "Buku tamu", value: `${n} buku`, detail: "Buku tamu di pintu masuk untuk mencatat kehadiran." }),
  merch: () => ({ label: "Merchandise", value: "Termasuk", detail: "Kenang-kenangan dari Mahabbati." }),
  hotel: () => ({ label: "Voucher hotel", value: "Termasuk", detail: "Voucher menginap untuk pengantin setelah acara." }),
  kelas: (n) => ({ label: "Kelas pranikah", value: `${n} sesi via Zoom`, detail: "Kelas pranikah online bersama asatidz Mahabbati, diikuti berdua sebelum akad." }),
  survey: () => ({ label: "Survey & meeting", value: "Termasuk", detail: "Survey lokasi dan technical meeting bersama keluarga sebelum hari H." }),
};

export type Variant = {
  id: string;
  name: string;
  price: number;
  /** Catering portions in this tier (pax or boxes), when it has any. */
  pax?: number;
  items: ItemRef[];
};

export type Package = {
  slug: string;
  need: NeedId;
  name: string;
  priceFrom: number;
  /** true = harga dan isi masih contoh. */
  placeholder: boolean;
  promise: string;
  forWho: string;
  summary: string;
  photo: string;
  gallery: string[];
  featured?: boolean;
  variants: Variant[];
};

// Shared tier contents, as in the sheet.
const crew = (n: number): ItemRef => ["crew", n];
const team: ItemRef[] = [["ustadz"], ["mc"]];
const akadBase: ItemRef[] = [["photovideo", 3], ...team, crew(4), ["kelas", 4], ["survey"]];
const walimahExtras: ItemRef[] = [["bukutamu", 2], ["hotel"], ["survey"]];

/** Sorts a tier's items into the display order of ItemKey. */
const ORDER = Object.keys(ICONS) as ItemKey[];
const sorted = (items: ItemRef[]) => [...items].sort((a, b) => ORDER.indexOf(a[0]) - ORDER.indexOf(b[0]));

const tier = (id: string, name: string, price: number, items: ItemRef[]): Variant => {
  const food = items.find(([k]) => k === "catering" || k === "nasibox");
  return { id, name, price, pax: food?.[1], items: sorted(items) };
};

const complete = (pax: number, price: number, crewN: number) =>
  tier(`complete-${pax}`, `${pax} pax`, price, [
    ["catering", pax], ["dekorasi"], ["muaAttire"], ["photovideo", 4], ...team, crew(crewN), ["merch"], ...walimahExtras,
  ]);

export const PACKAGES: Package[] = [
  {
    slug: "mahabbati-complete",
    need: "lengkap",
    name: "Mahabbati Complete",
    priceFrom: 40_000_000,
    placeholder: false,
    featured: true,
    promise: "Akad dan walimah dalam satu paket, diurus satu tim.",
    forWho: "Untuk kalian yang ingin menyerahkan semuanya, dari 100 sampai 500 tamu.",
    summary: "Catering, dekorasi, rias dan busana, foto dan video, ustadz, MC, dan crew. Pilih tingkatnya sesuai jumlah tamu.",
    photo: "n-stage",
    gallery: ["n-stage", "wo-decor-lavender", "wo-catering", "n-siger", "wo-catering-2", "n-bride-arch"],
    variants: [complete(100, 40_000_000, 4), complete(200, 50_000_000, 4), complete(300, 75_000_000, 6), complete(500, 96_000_000, 6)],
  },
  {
    slug: "paket-akad",
    need: "akad",
    name: "Paket Akad",
    priceFrom: 17_000_000,
    placeholder: false,
    featured: true,
    promise: "Ijab qabul yang khidmat, tanpa repot di belakang layar.",
    forWho: "Untuk akad di rumah atau gedung. Walimah bisa menyusul, atau diadakan terpisah.",
    summary: "Setiap tingkat sudah termasuk 4 sesi kelas pranikah via Zoom, ustadz, MC, foto dan video, serta crew. Tingkat di atasnya menambah rias dan catering.",
    photo: "n-ijab",
    gallery: ["n-ijab", "n-doa", "wo-ring", "hands"],
    variants: [
      tier("coordination", "Coordination", 17_000_000, akadBase),
      tier("intimate", "Intimate", 25_000_000, [...akadBase, ["muaAttire"]]),
      tier("complete", "Complete", 27_500_000, [...akadBase, ["muaAttire"], ["catering", 50]]),
      tier("signature", "Signature", 35_000_000, [...akadBase, ["muaAttire"], ["catering", 100]]),
    ],
  },
  {
    slug: "akad-di-masjid",
    need: "masjid",
    name: "Akad di Masjid",
    priceFrom: 27_500_000,
    placeholder: false,
    featured: true,
    promise: "Akad di rumah Allah, dengan adab masjid yang terjaga.",
    forWho: "Untuk akad di masjid mitra, dari akad yang sederhana sampai jamuan untuk 100 tamu.",
    summary: "Masjid mitra, ustadz, MC, foto dan video, serta crew. Masjid Intimate menambah rias, dekorasi, dan catering.",
    photo: "v-masjid-court",
    gallery: ["v-masjid-court", "v-masjid", "n-ijab", "v-masjid-night"],
    variants: [
      tier("masjid-akad", "Masjid Akad", 27_500_000, [["masjid"], ...akadBase, ["nasibox", 20]]),
      tier("masjid-intimate", "Masjid Intimate", 50_000_000, [
        ["masjid"], ["catering", 100], ["dekorasi"], ["muaAttire"], ["photovideo", 4], ...team, crew(4), ["merch"], ...walimahExtras,
      ]),
    ],
  },
  {
    slug: "paket-walimah",
    need: "walimah",
    name: "Paket Walimah",
    priceFrom: 43_000_000,
    placeholder: false,
    featured: true,
    promise: "Resepsi yang tertata, tamu pulang dengan kesan baik.",
    forWho: "Akad sudah terlaksana, kini saatnya resepsi untuk 100 sampai 300 tamu.",
    summary: "Catering, dekorasi, rias dan busana, foto dan video, ustadz, MC, crew, buku tamu, dan voucher hotel untuk pengantin.",
    photo: "wo-decor-lavender",
    gallery: ["wo-decor-lavender", "wo-catering", "wo-catering-2", "v-ballroom"],
    variants: [
      tier("intimate", "Intimate", 43_000_000, [["catering", 100], ["dekorasi"], ["muaAttire"], ["photovideo", 3], ...team, crew(4), ...walimahExtras]),
      tier("signature", "Signature", 52_000_000, [["catering", 200], ["dekorasi"], ["muaAttire"], ["photovideo", 3], ...team, crew(4), ...walimahExtras]),
      tier("grande", "Grande", 75_000_000, [["catering", 300], ["dekorasi"], ["muaAttire"], ["photovideo", 4], ...team, crew(6), ...walimahExtras]),
    ],
  },
  {
    slug: "paket-khitbah",
    need: "khitbah",
    name: "Paket Khitbah",
    priceFrom: 15_000_000,
    placeholder: false,
    promise: "Pertemuan dua keluarga yang hangat dan tertata.",
    forWho: "Untuk lamaran di rumah keluarga, dengan atau tanpa jamuan.",
    summary: "Dekorasi, rias, ustadz, MC, foto dan video, serta crew. Tingkat Intimate dan Signature menambah catering untuk tamu.",
    photo: "n-ring-lamaran",
    gallery: ["n-ring-lamaran", "j-khitbah", "wo-ring", "v-dining"],
    variants: [
      tier("coordination", "Coordination", 15_000_000, [["dekorasi"], ["mua"], ["photovideo", 2], ...team, crew(4)]),
      tier("intimate", "Intimate", 20_000_000, [["catering", 50], ["dekorasi"], ["mua"], ["photovideo", 2], ...team, crew(4)]),
      tier("signature", "Signature", 25_000_000, [["catering", 100], ["dekorasi"], ["mua"], ["photovideo", 2], ...team, crew(4)]),
    ],
  },
];

// Language-aware views of the data above. English text lives in packages.en.ts.
const PACKAGES_BY_LANG = {
  id: PACKAGES,
  en: PACKAGES.map((p) => merge(p, PACKAGES_EN[p.slug])),
} as const;
export const packagesFor = (lang: Lang = "id") => PACKAGES_BY_LANG[lang];
export const needsFor = (lang: Lang = "id") => (lang === "en" ? merge<typeof NEEDS>(NEEDS, NEEDS_EN) : NEEDS);

export const findPackage = (slug: string, lang: Lang = "id") => packagesFor(lang).find((p) => p.slug === slug);
export const needLabel = (id: NeedId, lang: Lang = "id") => needsFor(lang).find((n) => n.id === id)?.label ?? id;

/** Items shown for a tier, in the page language. */
export const itemsFor = (v: Variant, lang: Lang = "id"): Item[] =>
  v.items.map(([key, n = 1]) => ({ icon: ICONS[key], ...(lang === "en" ? ITEM_TEXT_EN : ITEM_TEXT)[key](n) }));

/** The tier's food line (catering or boxed meals), for the tier picker and the WhatsApp message. */
export const foodOf = (v: Variant, lang: Lang = "id") => itemsFor(v, lang).find((it) => it.icon === "restaurant" || it.icon === "lunch_dining");

/** Tiers that include the pre-marriage class. */
export const classTiers = (p: Package) => p.variants.filter((v) => v.items.some(([k]) => k === "kelas"));
export const includesClass = (p: Package) => classTiers(p).length > 0;

/** Catering range across a package's tiers, when any tier has catering. */
export const paxRange = (p: Package) => {
  const pax = p.variants.flatMap((v) => (v.pax ? [v.pax] : []));
  return pax.length ? { min: Math.min(...pax), max: Math.max(...pax) } : undefined;
};

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
  { id: "b1", label: "Hingga Rp20 jt", max: 20_000_000 },
  { id: "b2", label: "Hingga Rp30 jt", max: 30_000_000 },
  { id: "b3", label: "Hingga Rp50 jt", max: 50_000_000 },
  { id: "b4", label: "Hingga Rp100 jt", max: 100_000_000 },
];

export const rundownFor = (lang: Lang = "id") => (lang === "en" ? merge(RUNDOWN, RUNDOWN_EN) : RUNDOWN);
export const woStepsFor = (lang: Lang = "id") => (lang === "en" ? merge(WO_STEPS, WO_STEPS_EN) : WO_STEPS);
export const guestRangesFor = (lang: Lang = "id") =>
  lang === "en" ? GUEST_RANGES.map((g, i) => ({ ...g, label: GUEST_RANGES_EN[i] })) : GUEST_RANGES;
export const budgetsFor = (lang: Lang = "id") => (lang === "en" ? BUDGETS.map((b, i) => ({ ...b, label: BUDGETS_EN[i] })) : BUDGETS);
