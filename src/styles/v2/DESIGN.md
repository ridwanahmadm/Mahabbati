---
name: Mahabbati Wedding Organizer (/v2/ variant)
description: A syar’i wedding organizer set like a printed undangan; ivory paper, violet ink, gold only as a hairline, every price said out loud.
colors:
  undangan-ivory: "oklch(97.6% 0.011 85)"
  warm-linen: "oklch(95% 0.016 72)"
  lilac-mist: "oklch(91.5% 0.022 300)"
  violet-ink: "oklch(28% 0.045 290)"
  violet-ink-soft: "oklch(38% 0.05 290)"
  muted-violet: "oklch(47% 0.035 290)"
  sand-rule: "oklch(86% 0.022 80)"
  hairline-gold: "oklch(63% 0.085 80)"
  pale-gold: "oklch(82% 0.07 85)"
  mahabbati-violet: "oklch(42% 0.095 300)"
  mahabbati-violet-deep: "oklch(35% 0.09 300)"
  ivory-on-violet: "oklch(98.5% 0.006 85)"
  focus-violet: "oklch(48% 0.14 300)"
  night-violet: "oklch(25% 0.055 295)"
  night-ivory: "oklch(96% 0.012 85)"
  night-lilac: "oklch(84% 0.03 295)"
  scrim-violet: "oklch(17% 0.04 295)"
typography:
  display:
    fontFamily: "Libre Baskerville, ui-serif, Georgia, serif"
    fontSize: "clamp(2.125rem, 3.2vw + 1.2rem, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  display-page:
    fontFamily: "Libre Baskerville, ui-serif, Georgia, serif"
    fontSize: "clamp(2.75rem, 5vw + 1rem, 5.25rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Libre Baskerville, ui-serif, Georgia, serif"
    fontSize: "clamp(2rem, 2.5vw + 1rem, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Libre Baskerville, ui-serif, Georgia, serif"
    fontSize: "1.953rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title-sm:
    fontFamily: "Libre Baskerville, ui-serif, Georgia, serif"
    fontSize: "1.5625rem"
    fontWeight: 400
    lineHeight: 1.2
  price:
    fontFamily: "Libre Baskerville, ui-serif, Georgia, serif"
    fontSize: "clamp(1.875rem, 1.2vw + 1.25rem, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    fontFeature: "lnum, tnum"
  lead:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 0.35vw + 1rem, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0em"
rounded:
  card: "2px"
  pill: "999px"
spacing:
  3xs: "2px"
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
  3xl: "96px"
  gutter: "64px"
  gap-columns: "40px"
  section-gap-s: "120px"
  section-gap: "144px"
  section-gap-l: "176px"
components:
  button-primary:
    backgroundColor: "{colors.mahabbati-violet}"
    textColor: "{colors.ivory-on-violet}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.mahabbati-violet-deep}"
    textColor: "{colors.ivory-on-violet}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.violet-ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-quiet-hover:
    backgroundColor: "{colors.warm-linen}"
  button-on-dark:
    backgroundColor: "{colors.night-ivory}"
    textColor: "{colors.violet-ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-line-dark:
    backgroundColor: "transparent"
    textColor: "{colors.night-ivory}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-sm:
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  package-card:
    backgroundColor: "{colors.undangan-ivory}"
    textColor: "{colors.violet-ink}"
    rounded: "{rounded.card}"
    padding: "12px"
  tier-option:
    backgroundColor: "{colors.undangan-ivory}"
    textColor: "{colors.violet-ink}"
    rounded: "{rounded.card}"
    padding: "12px 16px"
  tier-option-selected:
    backgroundColor: "{colors.warm-linen}"
    textColor: "{colors.violet-ink}"
  closing-band:
    backgroundColor: "{colors.night-violet}"
    textColor: "{colors.night-ivory}"
  nav-link:
    textColor: "{colors.violet-ink-soft}"
    typography: "{typography.label}"
---

<!-- Scope: this file documents the /v2/ candidate variant only (src/layouts/V2.astro, src/styles/v2/, src/components/v2/, src/views/v2/). The live site (src/styles/global.css, src/views/*.astro) follows a different system and is NOT described here. Move this file and design.json to the repo root only if the client adopts /v2/. -->

# Design System: Mahabbati Wedding Organizer (/v2/ variant)

> Documents the **/v2/ candidate variant**, not the live site. Move to the repository root only if the client adopts /v2/. Recorded from the shipped code on 2 November 2026; the build, not the brief, is the source of truth.

## Overview

**Creative North Star: "The Printed Undangan"**

The /v2/ pages read like a wedding invitation and the walimah it announces. Warm ivory paper carries violet ink set in a classical serif; gold appears only as a thin rule or a double hairline frame, the way foil sits on a printed card. Photographs are full colour and do the emotional work: the first screen is a dressed walimah tent, veiled on its left by the paper itself so the headline sits on ivory rather than on a dark overlay.

Density is generous and quiet. Sections are separated by large vertical gaps (144px desktop) and by alternating ivory and linen bands, never by boxes or shadows. Lists are ruled like an order of service: hairline rules between items, serif names, Inter detail. One deep-violet band with a faint Islamic lattice closes every page with the WhatsApp ask. Motion is limited to one authored moment, the drapes opening on the hero photograph, plus short state transitions.

Prices are part of the voice, not hidden in a modal: every package shows "mulai Rp15 jt" style figures in serif lining numerals on a short gold rule.

**Key Characteristics:**
- Warm ivory paper, violet ink, gold strictly as hairline ornament.
- Libre Baskerville 400 for everything that is named or priced; Inter for everything that explains.
- Flat paper surfaces; depth comes from photography, tonal bands and hairline frames.
- One filled action per surface: the violet pill (inverted to ivory on the night band).
- Full-colour photography, captioned honestly; illustrations say "Ilustrasi".

## Colors

A warm-paper and violet-ink palette with gold as foil and one night-violet band.

### Primary
- **Mahabbati Violet** (mahabbati-violet): the single action colour. Filled pill buttons, text links, the logo lockup, the m-heart ornament, FAQ plus icons, item icons and quantity labels on package detail, and the tier radio dot. 8.2:1 on ivory; ivory text on it is 8.4:1.
- **Mahabbati Violet Deep** (mahabbati-violet-deep): hover and pressed fill for the primary pill only.
- **Focus Violet** (focus-violet): the 2px focus outline on every interactive element (6.5:1 on ivory).

### Secondary
- **Hairline Gold** (hairline-gold): decorative only. The 64 to 72px rule under the hero headline and section heads, the short rule above each price, the outer and inner borders of the double frame (at 70% and 35% mix), the top border of price lists and the estimator, the active nav underline, the ampersand in the couple's initials. 3.3:1 on ivory, which is why it never carries body text.
- **Pale Gold** (pale-gold): the lattice pattern on the night band (at 9% opacity) and the divider beside the closing contact.

### Neutral
- **Undangan Ivory** (undangan-ivory): the page, the header once scrolled, cards, the hero scrim colour.
- **Warm Linen** (warm-linen): alternating section bands, footer, the "all at once" moment row, selected tier, hover fill of quiet buttons.
- **Lilac Mist** (lilac-mist): image placeholder behind photos while loading; selection highlight.
- **Violet Ink** (violet-ink): headings, prices, primary text (13.8:1 on ivory).
- **Violet Ink Soft** (violet-ink-soft): body paragraphs under headings, ledes, nav links (9.5:1).
- **Muted Violet** (muted-violet): "mulai", "sampai", tier pax, breadcrumbs, footer legal (6.4:1 on ivory, 6.0:1 on linen).
- **Sand Rule** (sand-rule): every 1px list divider, the scrolled header hairline, borders of tier options and the estimator.
- **Night Violet / Night Ivory / Night Lilac**: the closing band surface, its headline (14.4:1) and its lede (9.9:1).
- **Scrim Violet** (scrim-violet): only as the colour of the soft package-card hover shadow.

### Named Rules
**The Foil Rule.** Gold is a 1px line, a frame or a single ornamental glyph at display size. It is never a fill, never a button, never body or label text.

**The AA Pair Rule.** Every text pair in the system clears WCAG AA, computed from these tokens: ink on ivory 13.8:1, ink-soft 9.5:1, muted 6.4:1, violet 8.2:1, ivory on violet 8.4:1, night-ivory on night 14.4:1. A new pair is admitted only after its ratio is computed.

**The One Night Rule.** Night violet appears once per page, as the closing band. Every other surface is ivory or linen.

## Typography

**Display Font:** Libre Baskerville 400 (with ui-serif, Georgia, serif)
**Body Font:** Inter Variable (with Inter, ui-sans-serif, system-ui)

**Character:** A bookish, invitation-weight serif at a single regular weight, slightly tightened (-0.015em), paired with a neutral grotesque that keeps details legible. Contrast comes from family and size, never from bold serif.

### Hierarchy
- **Display** (400, clamp 2.125 to 4.25rem, 1.08): the home hero headline only, max 14ch.
- **Display page** (400, clamp 2.75 to 5.25rem, 1.05): inner page heads and package detail titles, 12 to 16ch.
- **Headline** (400, clamp 2 to 3.5rem, 1.12): section h2, balanced, max 30ch.
- **Title** (400, 1.953rem, 1.15): moment names, package card names, Tentang parts; 1.5625rem for standards, compact rows and mobile menu links.
- **Price** (400, clamp 1.875 to 2.5rem, lining tabular numerals): every rupiah figure, including tier prices, the estimator total and the sticky bar.
- **Lead** (Inter 400, clamp 1.125 to 1.375rem, 1.45): one-sentence ledes under headlines, 34 to 52ch.
- **Body** (Inter 400, 1rem, 1.55): paragraphs, max 65ch.
- **Label** (Inter 500 to 600, 0.875rem, no tracking, sentence case): nav, captions, "mulai", footer column heads, contact-grid headings.

Serif is also used for things that are spoken rather than explained: FAQ questions, the F & N story sentence, the hero promise on package detail, item titles, contact values.

### Named Rules
**The Spoken Serif Rule.** If it is a name, a question, a promise or a price, it is set in Libre Baskerville; if it explains, it is Inter.

**The Plain Label Rule.** Small headings are Inter in sentence case at 0 tracking. No uppercase tracked labels and no kicker line above a headline; a gold rule may sit there instead.

## Layout

A 1440px container with 64px gutters (24px under 60rem, 16px under 40rem). Sections breathe on three vertical gaps: 120, 144 and 176px on desktop, scaling to 80/96/120 and 56/72/96. Content grids are asymmetric 5:7 or 7:5 splits (moments, FAQ, package head, closing band, Tentang parts) with a 40px column gap, collapsing to one column at 60rem or 40rem.

Page rhythm alternates ivory and linen bands so photo-heavy sections never touch each other; the closing night band ends every page above a linen footer. Centred composition is reserved for the framed standards panel and the couple's story; everything else is left-aligned.

Breakpoints in use: 30rem (footer single column), 40rem (single column, full-width buttons), 48rem (hero copy moves to the bottom), 60rem (most grids collapse, estimator unsticks), 64rem (nav becomes the Menu button, cards go two-up).

Header height is 76px; anchor scrolling is offset by header plus 24px.

## Elevation & Depth

Flat paper. The card shadow token is none. Depth is made by photography, by the ivory scrim fading into the hero image, by linen bands and by double gold hairlines. The only shadow is a state response: a package card on hover gains a soft, low, diffuse shadow tinted with scrim violet (`0 14px 30px -22px`), alongside its frame turning full gold.

### Named Rules
**The Flat Paper Rule.** Nothing is raised at rest. A shadow may appear only on hover of a linked card, and only as a soft blurred tint, never a hard offset.

## Shapes

Near-square paper corners (2px) on cards, photos, tier options, the estimator and the skip link; full pills (999px) for every button and the mobile Menu toggle; perfect circles for the portfolio rail arrows (52px) and radio dots. Borders are 1px hairlines; the one 2px border is the gold top edge of the price estimator.

The double frame is the signature form: an outer gold hairline at 70% strength with an inner one at 35%, inset 5px on package cards and 8px on the standards panel. The hero photograph is clipped only during its opening animation.

## Components

### Buttons
Soft, confident pills; one filled action per surface.
- **Shape:** full pill (999px), 52px tall, 24px side padding, Inter 560 at 1rem, optional 20px icon with 8px gap.
- **Primary:** Mahabbati violet fill, ivory text; hover deepens to violet deep; press nudges down 1px.
- **Quiet:** transparent with a 35% ink outline and ink text; hover fills linen and the outline turns solid ink. Over the hero photograph it carries a 70% ivory fill so it stays legible.
- **On dark:** on the night band the primary inverts to a night-ivory fill with ink text; the secondary is a 55% ivory outline.
- **Small:** 44px tall, 16px padding, 0.875rem; used for the header Konsultasi pill.
- **Text link:** violet, Inter 560, underline offset 0.22em.
- **Focus:** 2px focus-violet outline, 3px offset.

### Package cards (signature)
Set like an undangan card.
- **Frame:** ivory card, 12px inner padding, double gold hairline (outer 70%, inner 35% inset 5px), 2px corners.
- **Content:** 4:3 full-colour photo, then a centred body: serif name, one-line "for whom", optional tier list, and at the foot a 48px gold rule over "mulai", the serif price, and "sampai Rp25 jt, 100 sampai 300 tamu".
- **Layout:** three across, two under 64rem, one under 40rem; the all-in package spans two columns with photo and body side by side.
- **Hover / Focus:** frame goes full gold, name turns violet, soft shadow; the whole card is the link and shows the focus outline 4px outside.

### Compact package rows
Ruled list for "Paket lainnya": gold top rule, sand dividers, 96px 4:5 thumbnail, serif name, right-aligned "mulai" plus serif price. Whole row is the link.

### Lists and moments
Order-of-service lists: 1px sand rule above and between items, 40px vertical padding, serif title in a narrow left column with Inter detail and a violet text link to the right. The closing "all at once" row sits on linen.

### Standards panel
A centred double-gold frame (96px by 64px padding), the Mahabbati m-heart mark in violet as the ornament above the heading, then a three-column grid where each item is headed by a 40px gold rule, a serif title and a one-sentence Inter line.

### Portfolio rail
Horizontal scroll-snap rail of full-colour photos at a fixed height (clamp 320 to 480px), 2px corners, a small caption under each that begins "Ilustrasi:". Two circular outline buttons step one photo and disable at the ends. The section note states the photos are Unsplash illustrations.

### Couple story
Centred: the couple's initials in very large serif with a gold ampersand, one serif sentence in Mahabbati's words, and an Inter source line linking to the Instagram post. No photograph and no quotation marks.

### FAQ
Native disclosure rows on a ruled list; serif question at 1.25rem with a violet plus icon that rotates 45 degrees when open; answer in ink-soft Inter, max 60ch. A short aside on the left carries a WhatsApp text link.

### Closing band
Night-violet band with a pale-gold Islamic lattice masked across it at 9% opacity, 88px tile. Headline and lede on the left, inverted pill plus outline pill; on the right a gold-ruled column with the WhatsApp number in serif.

### Navigation
- **Bar:** 76px, logo lockup in violet at left, five Inter 500 0.875rem links in ink-soft, then the small Konsultasi pill.
- **States:** hover and current page turn ink with a 1px gold underline.
- **Over the hero:** on the home page the header is fixed and transparent over the photograph's ivory scrim; once the page scrolls (or the menu opens) it fills ivory and a sand hairline appears beneath it.
- **Mobile (under 64rem):** links and pill hide behind an outlined "Menu" pill; the panel lists links in serif 1.5625rem on sand rules, followed by the full WhatsApp pill. Escape closes it and returns focus.

### Hero
Full-bleed photograph (min 600px, up to 100svh capped at 940px) with an ivory scrim: a horizontal gradient from solid paper at the left fading to clear by 76%, plus a short top fade under the header. Copy sits left, max 640px: headline, 72px gold rule, lede, two buttons. Under 48rem the scrim runs bottom-up and the copy drops to the bottom. On load the image opens once like drapes: clip from 34% left inset to full while easing from 1.05 scale, 1.8s ease-out; skipped under reduced motion.

### Package detail, tier picker and sticky price bar
- **Detail hero:** two columns, serif title and promise, then the price on a gold top rule in large serif numerals, then actions; a 4:5 photo on the right (3:2 and first on small screens).
- **Inclusions:** two-column ruled list; violet Material Symbols icon, serif item title, violet quantity, Inter detail. Tier headings are Inter 600 on a gold rule.
- **Estimator:** ivory panel with sand border and 2px gold top edge, sticky beside the content on desktop. Tier options are 2px-cornered rows with a custom radio (muted ring, violet dot); selected rows turn violet-bordered on linen. Total in large serif numerals, full-width primary pill below.
- **Sticky bar:** under 60rem only, a fixed ivory bar with a sand top rule showing the tier label and serif price beside the action.

### Footer
Linen; logo lockup over a short about line, three link columns headed in Inter 600, a sand rule, then a small muted legal row.

## Do's and Don'ts

### Do:
- **Do** keep gold to 1px rules, the double frame and the ornamental ampersand; compute contrast for any new text pair against the token values first.
- **Do** set names, questions, promises and every price in Libre Baskerville 400 with lining tabular numerals.
- **Do** write prices as "Rp15 jt" in lists, prefaced by "mulai", and ranges with "sampai" ("sampai Rp25 jt", "100 sampai 300 tamu").
- **Do** caption every illustrative portfolio photo "Ilustrasi: ..." and state in the section that the photos are not Mahabbati event documentation.
- **Do** use typographic apostrophes in copy (syar’i, ta’aruf) and commas or full stops instead of dashes in prose.
- **Do** keep one filled action per surface; on the night band the filled action is the ivory pill.
- **Do** alternate ivory and linen bands so two photo sections never sit back to back, and end every page with the night band.
- **Do** keep the drapes-opening hero animation as the only authored motion; all other motion is 120 to 420ms state transitions, removed under reduced motion.

### Don't:
- **Don't** show a muslimah's face in any photograph; use back views, hands, silhouettes, decor or venues.
- **Don't** name or picture the asatidz; refer to them only as "asatidz Mahabbati".
- **Don't** invent testimonials, couples, client counts, ratings or other figures; the F & N story is the only testimony and it carries its source.
- **Don't** use gold for body text, labels, button fills or backgrounds (3.3:1 on ivory).
- **Don't** add eyebrows, kickers or uppercase tracked labels above headings.
- **Don't** use dark overlays on photographs; the hero is veiled with ivory paper, not shaded.
- **Don't** add resting shadows, hard offset shadows, or rounded corners beyond 2px on cards and photos.
- **Don't** use icon-card grids or floral clip art; the m-heart mark and the lattice are the only ornaments.
- **Don't** tint photographs into duotone; they stay full colour.
