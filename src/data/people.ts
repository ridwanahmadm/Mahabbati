// Couples' stories. Asatidz are not listed by name (arahan stakeholder 21 Okt 2026).

import type { NeedId } from "./packages";

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

export const SHOW_PLACEHOLDERS = import.meta.env.PUBLIC_SHOW_PLACEHOLDERS === "true";
export const visibleStories = (filter?: (s: Story) => boolean) =>
  STORIES.filter((s) => (SHOW_PLACEHOLDERS || !s.placeholder) && (!filter || filter(s)));
