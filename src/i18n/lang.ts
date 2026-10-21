// Two languages: Indonesian at the root, English under /en/ with English slugs.
// A page knows its route key (and slug, for detail pages), so it can link to its twin.

export type Lang = "id" | "en";
export const LANGS: Lang[] = ["id", "en"];

/**
 * How each language appears in the language menu, in its own script.
 * Adding Arabic later: add "ar" to Lang/LANGS, give it { native: "العربية", dir: "rtl" },
 * add its paths below, and write its copy. The menu and <html dir> follow automatically.
 */
export const LANG_META: Record<Lang, { native: string; dir: "ltr" | "rtl" }> = {
  id: { native: "Bahasa Indonesia", dir: "ltr" },
  en: { native: "English", dir: "ltr" },
};

export type Route = "home" | "layanan" | "tempat" | "kelas" | "cerita" | "aplikasi" | "tentang" | "404";

const PATHS: Record<Route, Record<Lang, string>> = {
  home: { id: "/", en: "/en/" },
  layanan: { id: "/layanan/", en: "/en/services/" },
  tempat: { id: "/tempat/", en: "/en/venues/" },
  kelas: { id: "/kelas/", en: "/en/class/" },
  cerita: { id: "/cerita/", en: "/en/stories/" },
  aplikasi: { id: "/aplikasi/", en: "/en/app/" },
  tentang: { id: "/tentang/", en: "/en/about/" },
  "404": { id: "/404/", en: "/404/" },
};

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Language of the page being rendered, read from its URL. */
export const langOf = (url: URL): Lang => {
  const p = url.pathname.slice(BASE.length);
  return p === "/en" || p.startsWith("/en/") ? "en" : "id";
};

/** Base-aware link to a route in a language, optionally to a detail slug and a hash. */
export const path = (lang: Lang, route: Route, slug?: string, hash?: string) =>
  `${BASE}${PATHS[route][lang]}${slug ? `${slug}/` : ""}${hash ? `#${hash}` : ""}`;

/** Pick the string for the current language. */
export const t = <T>(lang: Lang, v: { id: T; en: T }): T => v[lang];

export const htmlLang: Record<Lang, string> = { id: "id", en: "en" };
export const ogLocale: Record<Lang, string> = { id: "id_ID", en: "en_US" };
