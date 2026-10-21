// English copy for packages.ts. Same shape, text only: prices, ids and photos come from packages.ts.
// Keep the item order identical to packages.ts, since arrays merge by position.
import type { Overlay } from "../i18n/merge";
import type { AddonId, Item, NEEDS as NeedsT, Package } from "./packages";

const coordAkad = "We coordinate the penghulu (registrar), wali and witnesses so the ijab qabul runs calmly.";

export const NEEDS_EN: Overlay<typeof NeedsT> = [
  { label: "Full wedding", short: "Akad to walimah, handled by one team.", alt: "A wedding stage with red and white flowers and gold-carved chairs." },
  { label: "Akad (marriage contract)", short: "A calm, solemn ijab qabul at home or in a hall.", alt: "The groom and the bride's wali shaking hands over the akad table." },
  { label: "Akad at a mosque", short: "Akad at a partner mosque, with its etiquette respected.", alt: "A white mosque courtyard with carved lattice screens." },
  { label: "Walimah (reception)", short: "Catering, stage and photography for your reception.", alt: "A wedding stage decorated with lavender flowers and drapes." },
  { label: "Khitbah (proposal)", short: "A warm, well-run meeting of two families.", alt: "A ring placed on a henna-decorated finger." },
  { label: "Venue only", short: "Book a partner mosque, hall, garden or villa.", alt: "A ballroom with chandeliers and white-clothed tables." },
  { label: "Wedding-day coordination", short: "Your vendors, our team running the day.", alt: "A floral arch in a reception hall, set up before guests arrive." },
];

export const ADDONS_EN: Partial<Record<AddonId, { label: string }>> = {
  video: { label: "Cinematic video, 3-minute highlight" },
  stream: { label: "Akad live stream for family far away" },
  henna: { label: "Bridal henna" },
  invite: { label: "Digital invitation with RSVP" },
  crew: { label: "2 extra crew" },
};

export const CLASS_ITEM_EN: Overlay<Item> = {
  label: "Pre-marriage class & advice",
  value: "In the app",
  detail: "Access to the pre-marriage class and marriage advice from the asatidz of Mahabbati, in the Mahabbati app.",
};

const catering = (pax: string, detail: string) => ({ label: "Catering", value: pax, detail });

export const PACKAGES_EN: Record<string, Overlay<Package>> = {
  "full-package": {
    promise: "With you from the first plan until the last guest goes home.",
    forWho: "For an akad and walimah of 300 guests or more, with one team handling everything.",
    summary: "We start by listening to your priorities, then turn them into a clear plan with clear costs.",
    variants: [
      {
        items: [
          catering("300 pax", "Buffet plus three food stalls. You choose the menu at food tasting."),
          { label: "Wedding planner", value: "Professional", detail: "A lead coordinator and 10 crew from the technical meeting onwards." },
          { label: "Decoration", value: "Stage & akad", detail: "Wedding stage, akad area and entrance, with fresh flowers." },
          { label: "Make-up & attire", value: "Akad & reception", detail: "Bridal make-up and attire, plus make-up for both mothers." },
          { label: "Ustadz speaker", value: "Tausiyah", detail: "A short talk for both families on the day." },
          { label: "Photo & video", value: "Photo & video", detail: "Two photographers, one videographer and a printed album." },
        ],
      },
      {
        items: [
          catering("500 pax", "Buffet plus five food stalls. You choose the menu at food tasting."),
          { label: "Wedding planner", value: "Professional", detail: "A lead coordinator and 14 crew from the technical meeting onwards." },
          { label: "Decoration", value: "Premium", detail: "Stage, akad area, entrance and VIP tables, with fresh flowers." },
          { label: "Make-up & attire", value: "Akad & reception", detail: "Bridal make-up and attire, plus four close family members." },
          { label: "Ustadz speaker", value: "Tausiyah", detail: "A short talk for both families on the day." },
          { label: "Photo & video", value: "Photo & cinematic", detail: "Two photographers, two videographers, a 3-minute highlight film and a printed album." },
          { label: "Digital invitation", value: "With RSVP", detail: "A one-page invitation where guests confirm they are coming." },
        ],
      },
    ],
  },
  "intimate-wedding": {
    promise: "A warm akad and walimah, for the people closest to you.",
    forWho: "For a simple wedding of up to 200 guests, without calling vendors one by one.",
    summary: "One package for a small akad and walimah: food, decoration, make-up, photos, and a team that runs the day.",
    variants: [
      {
        items: [
          catering("100 pax", "Buffet with two main dishes and one food stall."),
          { label: "Decoration", value: "Akad & stage", detail: "A minimalist akad area and stage with fresh flowers." },
          { label: "Make-up & attire", value: "1 look", detail: "Bridal make-up and attire from akad through walimah." },
          { label: "Photography", value: "6 hours", detail: "One photographer, 100 edited photos in an online gallery." },
          { label: "Wedding planner", value: "+ 4 crew", detail: "A coordinator and crew who run the flow of the day." },
        ],
      },
    ],
  },
  "paket-akad": {
    name: "Akad Package",
    promise: "A solemn ijab qabul, with nothing to worry about backstage.",
    forWho: "For an akad at home or in a hall. The walimah can follow later, or happen separately.",
    summary: "Akad area, make-up, photos, and coordination with the penghulu, wali and witnesses, all by one team.",
    variants: [
      {
        name: "Akad Package",
        items: [
          { label: "Decoration", value: "Akad area", detail: "Akad table, a simple backdrop and fresh flowers." },
          { label: "Make-up & attire", value: "Akad", detail: "Bridal make-up and attire for the akad." },
          { label: "Akad coordination", value: "Included", detail: coordAkad },
          { label: "Photography", value: "3 hours", detail: "One photographer, online gallery." },
          { label: "Family meal", value: "50 pax", detail: "Boxed meals or a small buffet for close family." },
        ],
      },
    ],
  },
  "akad-di-masjid": {
    name: "Akad at a Mosque",
    promise: "Your akad in the house of Allah, with the mosque's etiquette respected.",
    forWho: "For an akad at a partner mosque, followed by a simple meal with family and friends.",
    summary: "We handle the permit and the mosque committee, set up the akad area the right way, and take care of the meal after.",
    variants: [
      {
        name: "Akad at a Mosque",
        items: [
          { label: "Partner mosque", value: "Included", detail: "Permit, schedule and coordination with the mosque committee." },
          { label: "Decoration", value: "Mosque-appropriate", detail: "An akad area that leaves the prayer space undisturbed." },
          { label: "Make-up & attire", value: "Akad", detail: "Bridal make-up and attire, in a separate dressing room." },
          { label: "Meal", value: "100 pax", detail: "A simple meal after the akad, in the hall or nearby." },
          { label: "Photo & video", value: "Photo & video", detail: "One photographer and one videographer." },
          { label: "Crew", value: "6 people", detail: "Guiding male and female guests, and running the meal." },
        ],
      },
    ],
  },
  "paket-walimah": {
    name: "Walimah Package",
    promise: "A well-run reception your guests will remember fondly.",
    forWho: "The akad is done. Now it's time for a reception with catering, a stage and a team to run it.",
    summary: "Catering, stage, make-up, photos and crew for the reception, at your own venue or one of our partners.",
    variants: [
      {
        name: "Walimah Package",
        items: [
          catering("300 pax", "Buffet plus two food stalls."),
          { label: "Wedding stage", value: "Included", detail: "Stage and entrance decoration." },
          { label: "Make-up & attire", value: "Reception", detail: "Bridal make-up and attire for the reception." },
          { label: "Photography", value: "6 hours", detail: "Two photographers, online gallery." },
          { label: "Crew", value: "8 people", detail: "Guests, catering and the flow of the reception." },
          { label: "Guest seating", value: "Can be separated", detail: "Separate areas for male and female guests, if the family wishes." },
        ],
      },
    ],
  },
  "paket-khitbah": {
    name: "Khitbah Package",
    promise: "A warm, well-run meeting of two families.",
    forWho: "For a proposal at the family home, from simple to complete with seserahan gifts.",
    summary: "Room decoration, seserahan display, an MC, photos and a meal for both families.",
    variants: [
      {
        name: "Khitbah Package",
        items: [
          { label: "Decoration", value: "Proposal room", detail: "A backdrop and flowers for the family living room." },
          { label: "Seserahan", value: "6 trays", detail: "We arrange the gift trays; the gifts come from the family." },
          { label: "Proposal MC", value: "Included", detail: "Guides the speeches from both families." },
          { label: "Photography", value: "3 hours", detail: "One photographer, online gallery." },
          { label: "Meal", value: "30 pax", detail: "Food for both families." },
        ],
      },
    ],
  },
  "wedding-planner": {
    promise: "Your wedding day runs to plan. You just show up.",
    forWho: "For couples who chose their own vendors and need one team to run the day.",
    summary: "You picked the vendors. Our team takes charge on the day, so every part of the plan runs on time and in order.",
    variants: [
      {
        items: [
          { label: "Wedding planner", value: "1 coordinator", detail: "One person who holds the whole plan, from the technical meeting to the close." },
          { label: "Wedding-day crew", value: "6 people", detail: "Guiding family, guests and vendors. More crew for more guests." },
          { label: "Technical meeting", value: "2 sessions", detail: "With family and vendors, 30 days and 7 days before, to lock the rundown." },
          { label: "Rundown", value: "Akad & walimah", detail: "Planned with your family, with breaks for prayer." },
          { label: "Akad support", value: "Included", detail: coordAkad },
        ],
      },
    ],
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
export const BUDGETS_EN = ["Up to Rp10M", "Up to Rp50M", "Up to Rp100M"];
