import type { ImageMetadata } from "astro";

const photoFiles = import.meta.glob<{ default: ImageMetadata }>("/src/assets/photos/*.jpg", { eager: true });
const asatidzFiles = import.meta.glob<{ default: ImageMetadata }>("/src/assets/asatidz/*.jpg", { eager: true });
const screenFiles = import.meta.glob<{ default: ImageMetadata }>("/src/assets/screens/**/*.{png,jpg}", {
  eager: true,
});

const byName = (files: Record<string, { default: ImageMetadata }>, base: string) =>
  Object.fromEntries(
    Object.entries(files).map(([path, mod]) => [path.replace(base, "").replace(/\.(jpg|png)$/, ""), mod.default]),
  );

export const PHOTOS = byName(photoFiles, "/src/assets/photos/");
export const SCREENS = byName(screenFiles, "/src/assets/screens/");
export const ASATIDZ_PHOTOS = byName(asatidzFiles, "/src/assets/asatidz/");

export const ustadzPhoto = (name: string) => {
  const p = ASATIDZ_PHOTOS[name];
  if (!p) throw new Error(`Ustadz photo not found: ${name}`);
  return p;
};

export const photo = (name: string) => {
  const p = PHOTOS[name];
  if (!p) throw new Error(`Photo not found: ${name}`);
  return p;
};
export const screen = (name: string) => {
  const s = SCREENS[name];
  if (!s) throw new Error(`Screen not found: ${name}`);
  return s;
};

// Unsplash sources, for credits and replacement.
export const CREDITS: Record<string, string> = {
  "n-ring-white": "https://unsplash.com/photos/BQ_u__hBkJg",
  "n-bride-back": "https://unsplash.com/photos/nvu0cgVqwMA",
  "n-khimar-blue": "https://unsplash.com/photos/dgCuJ6Ly1Ow",
  "n-bride-arch": "https://unsplash.com/photos/nAgkf61yWaw",
  "n-ijab": "https://unsplash.com/photos/shdfFRzHMZs",
  "n-khimar-bench": "https://unsplash.com/photos/93vwMXC1r-w",
  "n-pelaminan": "https://unsplash.com/photos/WL9C7ZjsKNw",
  "n-khimar-purple": "https://unsplash.com/photos/SdchQSCd7wc",
  "n-ring-lamaran": "https://unsplash.com/photos/MjvRYti7jn4",
  "n-doa": "https://unsplash.com/photos/QhzQfD0ihnI",
  "n-venue-arch": "https://unsplash.com/photos/taCoSDNQbX8",
  "n-stage": "https://unsplash.com/photos/4CfXuKfeIGY",
  "n-siger": "https://unsplash.com/photos/650cwER_Wco",
  "n-melati": "https://unsplash.com/photos/3lUv0ZynLLE",
  "hero-akad": "https://unsplash.com/photos/W_Vs9aey2pM",
  "j-nadzhor": "https://unsplash.com/photos/rntyE2uq-dA",
  "j-khitbah": "https://unsplash.com/photos/jt2iZ0ARWoY",
  "j-pranikah": "https://images.unsplash.com/photo-1720873160840-d5934323bb23",
  "wo-decor-lavender": "https://images.unsplash.com/photo-1633443682042-17462ad4ad76",
  "wo-catering": "https://images.unsplash.com/photo-1555244162-803834f70033",
  "wo-catering-2": "https://images.unsplash.com/photo-1724218012292-5548214cc2d2",
  "wo-ring": "https://unsplash.com/photos/RHfYB_USSEc",
  hands: "https://unsplash.com/photos/464ps_nOflw",
  "v-ballroom": "https://images.unsplash.com/photo-1780593116478-c46838f86523",
  "v-hall": "https://images.unsplash.com/photo-1783314867628-220ab03cac99",
  "v-masjid": "https://images.unsplash.com/photo-1757314026273-8218e3bb11f0",
  "v-masjid-court": "https://images.unsplash.com/photo-1790596858808-e5c54b2a35d7",
  "v-masjid-night": "https://images.unsplash.com/photo-1760072986110-01cd779ddec4",
  "v-garden": "https://images.unsplash.com/photo-1759954644836-a57275881ded",
  "v-garden-arch": "https://images.unsplash.com/photo-1783142979736-9596873cf20a",
  "v-gazebo": "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
  "v-villa": "https://images.unsplash.com/photo-1663185776079-33231c5242eb",
  "v-dining": "https://images.unsplash.com/photo-1769812343590-485512e27838",
};
