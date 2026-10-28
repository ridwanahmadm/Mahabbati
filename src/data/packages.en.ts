// English copy for packages.ts. Same shape, text only: prices, ids and photos come from packages.ts.
// Keep the order identical to packages.ts, since arrays merge by position.
import type { Overlay } from "../i18n/merge";
import type { ITEM_TEXT as ItemTextT, NEEDS as NeedsT, Package } from "./packages";

export const NEEDS_EN: Overlay<typeof NeedsT> = [
  { label: "Full wedding", short: "Akad to walimah, handled by one team.", alt: "A wedding stage with red and white flowers and gold-carved chairs." },
  { label: "Akad (marriage contract)", short: "A calm, solemn ijab qabul at home or in a hall.", alt: "The groom and the bride's wali shaking hands over the akad table." },
  { label: "Akad at a mosque", short: "Akad at a partner mosque, with its etiquette respected.", alt: "A white mosque courtyard with carved lattice screens." },
  { label: "Walimah (reception)", short: "Catering, stage and photography for your reception.", alt: "A wedding stage decorated with lavender flowers and drapes." },
  { label: "Khitbah (proposal)", short: "A warm, well-run meeting of two families.", alt: "A ring placed on a henna-decorated finger." },
  { label: "Venue only", short: "Book a partner mosque, hall, garden or villa.", alt: "A ballroom with chandeliers and white-clothed tables." },
];

export const ITEM_TEXT_EN: typeof ItemTextT = {
  masjid: () => ({ label: "Partner mosque", value: "Included", detail: "Your akad at a partner mosque, with the permit and the mosque committee taken care of." }),
  catering: (n) => ({ label: "Catering", value: `${n} pax`, detail: "Food for your guests. You choose the menu with our team." }),
  nasibox: (n) => ({ label: "Boxed meals", value: `${n} boxes`, detail: "A meal for close family after the akad." }),
  dekorasi: () => ({ label: "Decoration", value: "Included", detail: "Styling for the event space, suited to your venue and theme." }),
  mua: () => ({ label: "Make-up", value: "MUA", detail: "Make-up for the bride-to-be, by a female artist." }),
  muaAttire: () => ({ label: "Make-up & attire", value: "MUA & attire", detail: "Bridal make-up and attire, by a female artist." }),
  photovideo: (n) => ({ label: "Photo & video", value: `${n} people`, detail: "Photographers and videographers to capture the day." }),
  ustadz: () => ({ label: "Ustadz", value: "Tausiyah", detail: "A short talk and du'a for both families on the day." }),
  mc: () => ({ label: "MC", value: "Included", detail: "Guides the event and the family speeches." }),
  crew: (n) => ({ label: "Crew", value: `${n} people`, detail: "Runs the flow of the day, the families and the vendors." }),
  bukutamu: (n) => ({ label: "Guest book", value: `${n} books`, detail: "Guest books at the entrance to record who came." }),
  merch: () => ({ label: "Merchandise", value: "Included", detail: "A keepsake from Mahabbati." }),
  hotel: () => ({ label: "Hotel voucher", value: "Included", detail: "A hotel stay for the newlyweds after the event." }),
  kelas: (n) => ({ label: "Pre-marriage class", value: `${n} sessions on Zoom`, detail: "An online pre-marriage class with the asatidz of Mahabbati, taken together before the akad." }),
  survey: () => ({ label: "Site visit & meeting", value: "Included", detail: "A venue visit and a technical meeting with your family before the day." }),
};

export const PACKAGES_EN: Record<string, Overlay<Package>> = {
  "mahabbati-complete": {
    promise: "Akad and walimah in one package, handled by one team.",
    forWho: "For couples who want to hand everything over, from 100 to 500 guests.",
    summary: "Catering, decoration, make-up and attire, photo and video, an ustadz, an MC and crew. Choose the tier that fits your guest count.",
  },
  "paket-akad": {
    name: "Akad Package",
    promise: "A solemn ijab qabul, with nothing to worry about backstage.",
    forWho: "For an akad at home or in a hall. The walimah can follow later, or happen separately.",
    summary: "Every tier includes a 4-session pre-marriage class on Zoom, an ustadz, an MC, photo and video, and crew. Higher tiers add make-up and catering.",
  },
  "akad-di-masjid": {
    name: "Akad at a Mosque",
    promise: "Your akad in the house of Allah, with the mosque's etiquette respected.",
    forWho: "For an akad at a partner mosque, from a simple akad to a meal for 100 guests.",
    summary: "A partner mosque, an ustadz, an MC, photo and video, and crew. Mosque Intimate adds make-up, decoration and catering.",
    variants: [{ name: "Mosque Akad" }, { name: "Mosque Intimate" }],
  },
  "paket-walimah": {
    name: "Walimah Package",
    promise: "A well-run reception your guests will remember fondly.",
    forWho: "The akad is done. Now it's time for a reception for 100 to 300 guests.",
    summary: "Catering, decoration, make-up and attire, photo and video, an ustadz, an MC, crew, guest books, and a hotel voucher for the newlyweds.",
  },
  "paket-khitbah": {
    name: "Khitbah Package",
    promise: "A warm, well-run meeting of two families.",
    forWho: "For a proposal at the family home, with or without a meal.",
    summary: "Decoration, make-up, an ustadz, an MC, photo and video, and crew. The Intimate and Signature tiers add catering for your guests.",
  },
};

export const RUNDOWN_EN = [
  { title: "Make-up and preparation", note: "Make-up begins, crew checks the venue." },
  { title: "Families arrive", note: "A short briefing with the wali and witnesses." },
  { title: "Akad nikah", note: "Ijab qabul, du'a, and the mahar is handed over." },
  { title: "Tausiyah and family photos", note: "The photo order was agreed at the technical meeting." },
  { title: "Walimah begins", note: "Guests are welcomed, in separate areas if you choose." },
  { title: "Break for Dhuhr", note: "The event pauses; the prayer room is ready." },
  { title: "Closing", note: "The crew tidies up, the family goes home with nothing left to sort." },
];

export const WO_STEPS_EN = [
  { title: "Chat with us on WhatsApp", body: "Tell us the date, the city and roughly how many guests." },
  { title: "A written quote", body: "Every item and price in one document, before you pay a deposit." },
  { title: "Technical meeting", body: "With family and vendors, to lock the rundown and who does what." },
  { title: "The wedding day", body: "Our team takes charge. Your family simply attends and enjoys it." },
];

export const GUEST_RANGES_EN = ["Up to 100 guests", "100 to 300 guests", "300 to 500 guests", "More than 500 guests"];
export const BUDGETS_EN = ["Up to Rp20M", "Up to Rp30M", "Up to Rp50M", "Up to Rp100M"];
