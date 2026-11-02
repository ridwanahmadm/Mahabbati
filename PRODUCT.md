# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 5 static output, GSAP and Lenis for motion, deployed to GitHub Pages through Actions (`BASE_PATH=/Mahabbati`). Bilingual: Indonesian at the root, English under `/en/`.

## What it is

Mahabbati is an Islamic (syar'i) wedding organizer in Jakarta, part of a small ecosystem that also runs a ta'aruf (marriage-introduction) app and a pre-marriage class. This site is the Wedding Organizer's acquisition microsite: visitors arrive mostly from Instagram ads and leave by starting a WhatsApp consultation with the WO team.

## Users and their job

- Couples aged about 20 to 35 who are already set to marry, and the families helping them, choosing who will run their khitbah, akad and walimah.
- They want to see that the WO can make the day beautiful, that it keeps the event syar'i, what each package costs and contains, and that it can be trusted with a deposit.
- Success: the visitor understands the offer in the first screen and starts a WhatsApp consultation with a prefilled message naming a package.

## Offer (confirmed facts)

- Five package families with tiers, prices from the stakeholder sheet "Paket wedding MAHABBATI_REVAMP.xlsx" (28 Oct 2026), stored in `src/data/packages.ts`: Khitbah (Rp15–25 jt), Akad (Rp17–35 jt), Walimah (Rp43–75 jt), Mahabbati Complete (Rp40–96 jt, 100–500 pax), Akad di Masjid (Rp27,5–50 jt).
- Every tier includes an ustadz (tausiyah), an MC, photo and video, crew. Akad tiers and the Masjid Akad tier include a 4-session pre-marriage class on Zoom with the asatidz of Mahabbati.
- Make-up for the bride is always by a female artist. Male and female guest areas can be separated. Rundowns pause for prayer. A written quote comes before any deposit.
- WhatsApp for the WO: 0822-6150-5350. Email salam@mahabbati.com. Address: Jl. Komp. Bappenas Siaga Raya No. 66, Pejaten Barat, Jakarta 12510.

## Evidence available

- 10+ couples married through the WO (stated by Mahabbati; one public story, "F & N", on Instagram).
- Google Play rating 4.7 for the app; named Play reviews belong to the app, not the WO.
- Instagram community @mahabbati_official.
- No real event portfolio photos and no WO client testimonials beyond F & N yet (open: the client will supply them).

## Constraints that bind every surface

- Never show a muslimah's face in photos: back view, hands or silhouette only. Men's faces are fine.
- Asatidz are never named or pictured; they appear only as "asatidz Mahabbati". No "lulusan Timur Tengah" claim.
- Never invent a testimonial, figure, portfolio caption or logo. Sample data is labelled as sample.
- WCAG 2.2 AA, including every colour pair.
- Pushing to `main` changes the live site: ask first, every time.

## Brand commitments

- Logo: the m♡ hand-drawn mark and the MAHABBATI wordmark.
- Faces: Libre Baskerville for headlines, Inter for body.
- Palette from the brand: primary #45445E, deep #33324A, accent #69699E, secondary #C9CFF2, lavender #E2E5F4 / #F1F2FA, ink #222136, gold #D9C38E to #A8894F.
- Voice: warm, plain, to the point; Indonesian "kamu/kalian".

## Open decisions

- Real portfolio photos and WO testimonials (to be supplied).
- App Store URL (placeholder).
- Partner venues are all sample data.
