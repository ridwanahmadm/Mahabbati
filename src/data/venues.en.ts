// English copy for venues.ts. Same order as VENUES; prices, capacity and photos come from venues.ts.
import type { Overlay } from "../i18n/merge";
import type { Venue, VenueType } from "./venues";

export const VENUE_TYPES_EN: Record<VenueType, string> = {
  masjid: "Mosque",
  gedung: "Hall & ballroom",
  taman: "Garden & outdoor",
  villa: "House & villa",
  restoran: "Private restaurant",
};

export const CITIES_EN: Record<string, string> = {
  "Jakarta Selatan": "South Jakarta",
  "Jakarta Pusat": "Central Jakarta",
  Depok: "Depok",
  Bogor: "Bogor",
};

export const VENUES_EN: Record<string, Overlay<Venue>> = {
  "masjid-jakarta-selatan": {
    name: "Partner mosque in South Jakarta",
    priceNote: "infaq and operating costs",
    alt: "A white mosque courtyard with carved lattice and a small pool.",
    facilities: ["Akad room separate from the prayer hall", "Hall for the meal", "Women's dressing room", "Parking for 40 cars"],
  },
  "masjid-raya-jakarta-pusat": {
    name: "Partner grand mosque in Central Jakarta",
    priceNote: "infaq and operating costs",
    alt: "Inside a grand mosque with tall pillars and a carved dome.",
    facilities: ["Large akad capacity", "Support from the mosque committee", "Separate areas for men and women"],
  },
  "ballroom-jakarta-pusat": {
    name: "Hotel ballroom in Central Jakarta",
    priceNote: "6-hour room hire",
    alt: "A ballroom with crystal chandeliers and white-clothed tables.",
    facilities: ["Prayer room on the same floor", "Dressing room and family room", "Basement parking", "Hotel or partner catering"],
  },
  "gedung-depok": {
    name: "Multipurpose hall in Depok",
    priceNote: "8-hour hall hire",
    alt: "A hall set with round tables and wooden chairs for the meal.",
    facilities: ["Prayer room", "Dressing room", "Parking for 80 cars", "Guest areas can be separated"],
  },
  "taman-bogor": {
    name: "Outdoor garden in Bogor",
    priceNote: "full-day hire",
    alt: "A green garden with white chairs facing the akad arch.",
    facilities: ["Back-up tent for rain", "Prayer room", "Dressing room", "Parking for 50 cars"],
  },
  "villa-puncak": {
    name: "Family villa in Puncak",
    priceNote: "1-night villa hire",
    alt: "A white villa with steps, a lawn and guest chairs.",
    facilities: ["Rooms for close family", "Lawn for the akad", "Kitchen for catering"],
  },
  "restoran-jakarta-selatan": {
    name: "Private restaurant in South Jakarta",
    priceNote: "minimum menu order",
    alt: "A long table with white flowers in a private dining room.",
    facilities: ["Private room", "Halal menu", "Suits a khitbah or an intimate wedding"],
  },
};
