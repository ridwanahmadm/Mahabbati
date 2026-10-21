// Couples' stories. Asatidz are not listed by name (arahan stakeholder 21 Okt 2026).

import type { NeedId } from "./packages";
import type { Lang } from "../i18n/lang";
import { merge, type Overlay } from "../i18n/merge";

export type StoryType = "wo" | "app" | "kelas";

export type Story = {
  id: string;
  type: StoryType;
  /** Who said it, as it may be shown publicly. */
  by: string;
  quote: string;
  source: string;
  need?: NeedId;
  meta?: string;
  rating?: number;
  /**
   * true = slot kosong untuk diisi data asli. Placeholder TIDAK tampil di build produksi,
   * hanya di `npm run dev` (PUBLIC_SHOW_PLACEHOLDERS=true di .env.development).
   */
  placeholder: boolean;
  /** Set on the English site: the quote is our translation of an Indonesian original. */
  translated?: boolean;
};

export const STORIES: Story[] = [
  // Data asli yang sudah publik.
  {
    id: "fn",
    type: "wo",
    by: "F & N",
    quote: "Dipertemukan melalui Mahabbati, kini melangkah bersama dalam ikatan pernikahan.",
    source: "Kisah yang dibagikan di Instagram @mahabbati_official, Oktober 2026",
    meta: "Bertemu lewat aplikasi, menikah bersama WO Mahabbati",
    placeholder: false,
  },
  {
    id: "dimas",
    type: "app",
    by: "M. Dimas Maulana",
    quote: "Aplikasinya keren, ada fitur cari pasangan online dengan konsep taaruf. Menarik dan cukup beda dari dating app pada umumnya.",
    source: "Ulasan Google Play, 5 September 2026",
    rating: 5,
    placeholder: false,
  },
  {
    id: "afni",
    type: "app",
    by: "Afni",
    quote: "Aplikasinya menarik.",
    source: "Ulasan Google Play, 20 Agustus 2026",
    rating: 5,
    placeholder: false,
  },
  // PLACEHOLDER: isi `by`, `quote`, `source`, `meta`, lalu set placeholder: false.
  { id: "ph-lengkap", type: "wo", need: "lengkap", by: "[Inisial pasangan]", quote: "[Kutipan pasangan pengguna Paket Lengkap]", source: "[Tanggal dan kanal]", meta: "[Paket, jumlah tamu, kota]", placeholder: true },
  { id: "ph-masjid", type: "wo", need: "masjid", by: "[Inisial pasangan]", quote: "[Kutipan pasangan Akad di Masjid]", source: "[Tanggal dan kanal]", meta: "[Masjid, jumlah tamu]", placeholder: true },
  { id: "ph-akad", type: "wo", need: "akad", by: "[Inisial pasangan]", quote: "[Kutipan pasangan Paket Akad]", source: "[Tanggal dan kanal]", meta: "[Lokasi, jumlah tamu]", placeholder: true },
  { id: "ph-walimah", type: "wo", need: "walimah", by: "[Inisial pasangan]", quote: "[Kutipan pasangan Paket Walimah]", source: "[Tanggal dan kanal]", meta: "[Tempat, jumlah tamu]", placeholder: true },
  { id: "ph-khitbah", type: "wo", need: "khitbah", by: "[Nama keluarga]", quote: "[Kutipan keluarga Paket Khitbah]", source: "[Tanggal dan kanal]", meta: "[Kota]", placeholder: true },
  { id: "ph-kelas", type: "kelas", by: "[Inisial peserta]", quote: "[Kesan peserta kelas pranikah bersama asatidz]", source: "[Tanggal dan kanal]", meta: "[Angkatan kelas]", placeholder: true },
  { id: "ph-app", type: "app", by: "[Inisial pasangan]", quote: "[Cerita pasangan yang bertemu lewat aplikasi]", source: "[Tanggal dan kanal]", meta: "[Lama proses ta'aruf]", placeholder: true },
];

// English: real quotes are translated and marked as such; placeholders stay in brackets.
const STORIES_EN: Record<string, Overlay<Story>> = {
  fn: {
    quote: "Brought together through Mahabbati, now walking side by side in marriage.",
    source: "Story shared on Instagram @mahabbati_official, October 2026",
    meta: "Met through the app, married with Mahabbati WO",
    translated: true,
  },
  dimas: {
    quote: "Great app, with a way to find a spouse online the ta'aruf way. Interesting, and quite different from the usual dating apps.",
    source: "Google Play review, 5 September 2026",
    translated: true,
  },
  afni: { quote: "An interesting app.", source: "Google Play review, 20 August 2026", translated: true },
};

export const SHOW_PLACEHOLDERS = import.meta.env.PUBLIC_SHOW_PLACEHOLDERS === "true";
export const visibleStories = (filter?: (s: Story) => boolean, lang: Lang = "id") =>
  STORIES.map((s) => (lang === "en" ? merge(s, STORIES_EN[s.id]) : s)).filter(
    (s) => (SHOW_PLACEHOLDERS || !s.placeholder) && (!filter || filter(s)),
  );
