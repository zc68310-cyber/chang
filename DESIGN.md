---
name: "Chang Zhou Portfolio"
description: "A precise editorial operating system for Chang's AI product work."
colors:
  ink: "#0C0C0C"
  silver: "#D7E2EA"
  paper: "#F5F4F0"
  white: "#FFFFFF"
  violet: "#B600A8"
  violet-deep: "#7621B0"
  ember: "#BE4C00"
  project-surface: "#131313"
  media-surface: "#171717"
  browser-surface: "#181818"
  modal-surface: "#111111"
  rule-on-dark: "rgba(215, 226, 234, 0.15)"
  rule-on-light: "rgba(12, 12, 12, 0.15)"
  glass-on-dark: "rgba(255, 255, 255, 0.035)"
  focus-lilac: "#E6A9F1"
typography:
  display:
    fontFamily: "Kanit, Noto Sans SC, sans-serif"
    fontSize: "clamp(3.6rem, 10.5vw, 10.5rem)"
    fontWeight: 800
    lineHeight: 0.82
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Noto Sans SC, Kanit, sans-serif"
    fontSize: "clamp(1.65rem, 3.4vw, 3.2rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Kanit, Noto Sans SC, sans-serif"
    fontSize: "clamp(1.7rem, 3.3vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Noto Sans SC, Kanit, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 2
    letterSpacing: "normal"
  label:
    fontFamily: "Kanit, Noto Sans SC, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.18em"
rounded:
  focus: "6px"
  card: "18px"
  browser: "20px"
  dialog: "24px"
  project: "28px"
  section-mobile: "32px"
  section-desktop: "52px"
  pill: "999px"
  circle: "50%"
spacing:
  compact: "0.75rem"
  gutter-mobile: "1rem"
  gutter-tablet: "1.75rem"
  gutter-desktop: "2.5rem"
  component: "1.25rem"
  cluster: "2.5rem"
  section-mobile: "7rem"
  section-desktop: "10rem"
components:
  button-primary:
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.25rem"
    height: "46px"
  button-outline:
    backgroundColor: "{colors.glass-on-dark}"
    textColor: "{colors.silver}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.25rem"
    height: "46px"
  button-icon:
    backgroundColor: "{colors.glass-on-dark}"
    textColor: "{colors.silver}"
    rounded: "{rounded.circle}"
    width: "44px"
    height: "44px"
  project-card:
    backgroundColor: "{colors.project-surface}"
    textColor: "{colors.silver}"
    rounded: "{rounded.project}"
    padding: "clamp(1.25rem, 3vw, 3.5rem)"
  navigation-link:
    textColor: "{colors.silver}"
    typography: "{typography.label}"
    padding: "4px 0"
---

# Design System: Chang Zhou Portfolio

## Overview

**Creative North Star: "The AI Product Operating System"**

This portfolio presents Chang's work as a precise, inspectable product system rather than a conventional résumé or generic technology landing page. Near-black and off-white editorial fields create a deliberate reading cadence; oversized silver Kanit headings announce each layer while fine rules organize proof, metrics, and supporting copy with almost schematic clarity.

The world is restrained but not sterile. A centered 3D avatar interrupts the hero nameplate, dark product surfaces stack like working instruments, and violet-to-orange energy is reserved for decisive actions and media atmospheres. Chinese detail remains highly legible in Noto Sans SC while compact English labels provide navigation, indexing, and system texture.

**Key Characteristics:**

- Alternating near-black and off-white editorial fields.
- Oversized, tightly tracked Kanit typography paired with calm Chinese body copy.
- Crisp ruled evidence, large numeric indices, and metric-first project framing.
- A centered 3D portrait used as a deliberate interruption, not decoration.
- Restrained violet-to-orange energy reserved for action and media.
- Motion that supports entry, scanning, and depth, with a complete reduced-motion path.

## Colors

The palette is primarily achromatic and editorial; energetic color appears only where action, selection, or missing media needs a clear signal.

### Primary

- **Signal Violet** (`colors.violet`): The dominant point within CTA gradients and the strongest product-energy accent.
- **Deep Electric Violet** (`colors.violet-deep`): Bridges violet to ember in action gradients and marks selected text.

### Secondary

- **Ember Orange** (`colors.ember`): Finishes the CTA gradient and warms abstract media placeholders without becoming a section color.
- **Display Slate** (`#646973`) and **Display Ice** (`#BBCCD7`): The two endpoints of the hero's silver nameplate gradient; they are reserved for that single typographic surface.
- **Xiaohongshu Red** (`#FF2442`) and **ByteDance Blue** (`#007AFF`): Brand-accurate accents used only inside the fixed company-logo lane.

### Neutral

- **Field Ink** (`colors.ink`): The main canvas, dark section field, and high-contrast text color on paper.
- **Editorial Silver** (`colors.silver`): The branded display color and principal dark-field text tone.
- **Warm Paper** (`colors.paper`): The evidence and capabilities field; it keeps long Chinese copy readable without stark white glare.
- **Pure White** (`colors.white`): Reserved for peak emphasis, active text, and decisive labels.
- **Project Surface** (`colors.project-surface`): The raised dark plane for selected product stories.
- **Media Surface** (`colors.media-surface`): A quiet substrate behind reels and unavailable visuals.
- **Browser Surface** (`colors.browser-surface`): The chrome layer for embedded product previews.
- **Modal Surface** (`colors.modal-surface`): The deepest contained surface for focused project inspection.
- **Dark-Field Rule** (`colors.rule-on-dark`): Separates navigation, headings, evidence, and card content without boxing the page in.
- **Paper-Field Rule** (`colors.rule-on-light`): Structures experience and capability rows on the light field.
- **Dark Glass** (`colors.glass-on-dark`): Adds restrained translucency to secondary controls.
- **Focus Lilac** (`colors.focus-lilac`): The visible keyboard focus outline across dark and light contexts.

### Named Rules

**The Chromatic Rarity Rule.** Violet and ember belong to decisive actions, selected states, and media atmosphere; they never become broad section fills.

**The Two-Field Rule.** Major narrative shifts happen through Field Ink and Warm Paper, while the silver/ink text relationship inverts with the field.

## Typography

**Display Font:** Kanit (with Noto Sans SC and sans-serif fallback)  
**Body Font:** Noto Sans SC (with Kanit and sans-serif fallback)  
**Label Font:** Kanit (with Noto Sans SC and sans-serif fallback)

**Character:** Kanit supplies the portfolio's engineered, editorial voice through dense uppercase forms and aggressive scale. Noto Sans SC carries Chinese evidence with a calmer texture, generous line height, and enough weight to survive both dark and paper fields.

### Hierarchy

- **Display** (800, `clamp(3.6rem, 10.5vw, 10.5rem)`, 0.82): Section nameplates and the contact statement; uppercase, edge-conscious, and intentionally dominant.
- **Hero Display** (900, `clamp(4.8rem, 14.5vw, 17.5rem)`, 1): The single-line identity wordmark behind the avatar, filled with a vertical silver gradient. Its prompt-matched endpoints are an intentional exception to the general display ramp.
- **About Reading** (500, `clamp(1rem, 1.45vw, 1.35rem)`, 1.9): The character-reveal biography, constrained to 760px so most of the statement remains visible within one desktop viewport.
- **Headline** (600, `clamp(1.65rem, 3.4vw, 3.2rem)`, 1.25): Company and project names where Chinese information must stay authoritative.
- **Title** (600, `clamp(1.7rem, 3.3vw, 3.25rem)`, 1): Capability names and other compact editorial statements.
- **Body** (400, 1rem, 2): Chinese explanations, outcomes, and case-study detail; line length is generally constrained to approximately 48–65 characters.
- **Label** (600, 0.75rem, 0.18em, uppercase): Navigation, categories, tags, indices, and operational microcopy.

### Named Rules

**The Split-Language Rule.** Use Kanit for English display, labels, and system indexing; use Noto Sans SC for substantive Chinese reading and product evidence.

**The Nameplate Rule.** Large display text is a structural surface, not an ornamental headline: keep it tightly tracked, uppercase, and visibly anchored to the viewport or section edge.

## Layout

The page is a full-width editorial sequence with a shared maximum content width of 1440px. Horizontal gutters progress from 1rem on mobile to 1.75rem at the small breakpoint and 2.5rem on large screens. Section rhythm is intentionally generous, commonly moving from 7rem vertical padding on mobile to 10rem on larger screens.

The first viewport is edge-to-edge and at least 680px tall: navigation rules the top edge, the nameplate sits behind a centered transparent 3D head, proof occupies the bottom-left, and the primary CTA/download cluster occupies the bottom-right. The portrait is a floating hero visual with no avatar frame, fill, clipping, padding, or shadow. At 768px, bottom proof and action content changes from a single stack to a two-column alignment; project cards and section heading rows make the same shift from stacked reading to paired editorial columns.

Evidence sections use ruled rows instead of boxed cards. The experience grid expands to a narrow index/metric rail plus a wide narrative column on large screens, with a fixed 150×32px company-logo lane. Project stories use contained, two-column cards with a 0.92/1.08 copy-to-preview ratio and become ordinary stacked cards only below 768px. At and above 768px, each story occupies an 85vh scroll slot and its card remains sticky at 96px plus a 28px index offset so the next card can cover it.

Responsive breakpoints are 420px for extra-small hero corrections, 640px for tablet gutters and type, 768px for structural column changes, 1024px for large editorial grids, and 1280px for expanded project padding. On mobile, the portrait uses `clamp(280px, 72vw, 420px)`, project cards return to ordinary document flow, hover-only translations are suppressed, and the horizontal navigation remains scrollable rather than collapsing into an unrelated menu pattern.

**The Ruled Evidence Rule.** Prefer border lines, spacing, and alignment over nested panels when structuring experience, capability, and metric content.

## Elevation & Depth

The system is flat at the page level and selectively lifted inside the dark product world. Section depth comes from field inversion, transparent 3D decoration, sticky overlap, tonal surfaces, and 15–22% rules. Shadows are reserved for project cards, browser shells, About's four decorative objects, modal focus, and the primary CTA; the unframed hero portrait and broad editorial sections remain shadowless.

### Shadow Vocabulary

- **Project Lift** (`0 32px 70px rgba(0, 0, 0, 0.42)`): Gives sticky product stories enough depth to layer during scroll.
- **Browser Lift** (`0 24px 58px rgba(0, 0, 0, 0.35)`): Treats product previews as instruments nested within their project card.
- **Action Glow** (`0 12px 34px rgba(118, 33, 176, 0.28)`): Adds energy only beneath the gradient CTA.
- **Modal Lift** (`0 30px 100px rgba(0, 0, 0, 0.55)`): Establishes the focused inspection layer above a blurred dark scrim.

### Named Rules

**The Instrument Depth Rule.** Elevation belongs to interactive product instruments and isolated 3D decorations; the hero portrait, editorial fields, and evidence rows remain flat.

## Shapes

The form language contrasts uncompromising full-bleed fields and sharp ruled rows with carefully selected soft enclosures. Only icon controls are circular; the hero portrait remains an unframed transparent cutout. Action controls are pills. Media, browser shells, cards, and dialogs use increasingly generous radii that track their visual mass. The projects section itself arrives as a large rounded sheet overlapping the paper field.

Borders are hairline and translucent rather than decorative. Circular ornaments and orbits may carry faint inset effects, but recurring content silhouettes remain simple: line, circle, pill, and large rounded rectangle.

**The Radius by Mass Rule.** Use circular or pill geometry for compact controls, 18–24px corners for contained media and dialogs, and 28–52px corners only for large project or section surfaces.

## Components

### Buttons

Buttons feel compact, engineered, and decisive.

- **Shape:** Full pill with a minimum 46px height, compact horizontal padding, and a 1px translucent border.
- **Primary:** White uppercase Kanit over the violet-to-orange gradient, with a restrained violet shadow. Hover scales to 1.025 and press scales to 0.985 over 220ms.
- **Hover / Focus:** Keyboard focus uses a 2px lilac outline offset by 4px. Motion is removed under reduced-motion preference.
- **Secondary / Outline:** Editorial Silver over Dark Glass with a Dark-Field Rule border; hover lifts 2px and increases background, border, and text contrast.
- **Icon:** A 44px circular control for modal close and other unambiguous glyph actions.

### Cards / Containers

Cards read as product evidence surfaces, not generic content tiles.

- **Corner Style:** Large project corners use the Project radius; nested media uses Card or Browser radii.
- **Background:** Project Surface contains the story, while Browser Surface and Media Surface create nested tonal depth.
- **Shadow Strategy:** Only project, browser, floating label, and modal surfaces receive structural shadows.
- **Border:** A single translucent silver hairline preserves the technical, ruled character.
- **Internal Padding:** 1.25rem on mobile, expanding through 2rem to 3.5rem on large screens.

### Navigation

Navigation is a single ruled row with a compact `CZ / 26` identifier and widely tracked uppercase anchors. Links rest in muted silver, brighten to white on hover, and draw a one-pixel underline from right to left. The row stays horizontally scrollable on narrow screens so the editorial line and direct anchors remain intact.

### Evidence Rows

Experience and capability entries are separated by hairlines and generous vertical space. Large low-contrast indices create hierarchy without becoming decoration; metrics, roles, summaries, and tags occupy consistent reading lanes. Capability rows translate by 0.5rem on hover at pointer-friendly widths, while mobile removes the translation.

### Project Preview

Product media sits inside a browser-like shell with a 42px bar, three restrained status dots, and a centered monospaced-feeling Kanit address. The health-platform cover uses `object-cover`; MemoryJar uses `object-contain` on Browser Surface so its title, wooden box, and monkey remain intact. The fallback remains available for genuinely missing future media but is not shown for these projects.

### Modal

The project dialog is a deep contained surface on a near-black translucent, blurred scrim. It uses a sticky ruled header, circular close control, up to 94vh of internal scrolling, a 24px radius, focus trapping, Escape dismissal, scroll lock, and focus return. It enters with a short fade, 24px rise, and subtle scale, all removed for reduced motion.

### Motion

Viewport content enters through an 800ms opacity, 28px rise, and 8px blur release using `cubic-bezier(0.25, 0.1, 0.25, 1)`. Hero elements use 850–900ms staged entrances and the pointer magnet is clamped to 12px. The two Selected Work rows translate in opposite directions from the page-scroll offset and repeat their six-item set three times; pointer hover reduces their travel rate. Project cards stay sticky while the earlier card scales from 1 to 0.97 as the next card covers it. The About statement reveals character by character while four 3D corner objects enter from ±80px over 900ms. Under `prefers-reduced-motion: reduce`, smooth scrolling is disabled and animation durations collapse, while the Projects sticky layout remains intact and only its scale response is suppressed.

## Do's and Don'ts

### Do:

- **Do** alternate Field Ink and Warm Paper to pace the story and signal a real change in evidence type.
- **Do** make measurable outcomes, project roles, and product proof easy to scan through rules, indices, and disciplined lanes.
- **Do** preserve the hero's three-part composition: edge-to-edge silver nameplate, centered unframed 3D portrait, and bottom proof/action anchors.
- **Do** reserve violet-to-orange energy for decisive actions, selection, and intentional media atmosphere.
- **Do** provide visible focus, 44px touch targets, intentional media fallbacks, and a complete reduced-motion experience.
- **Do** let Chinese copy carry substance while English Kanit carries navigation, naming, and editorial identity.

### Don't:

- **Don't** turn the portfolio into a conventional résumé page, generic startup landing page, or grid of interchangeable feature cards.
- **Don't** spread accent color across full sections or use competing gradients; chromatic rarity is part of the hierarchy.
- **Don't** soften every surface with the same radius or shadow; depth and curvature must correspond to component mass and purpose.
- **Don't** replace the crisp ruled evidence system with excessive containers, badges, or decorative dividers.
- **Don't** animate merely to decorate, and never preserve scroll transforms, magnetic response, or staged reveals when reduced motion is requested.
- **Don't** allow missing media to collapse layout, trigger broken requests, or look like unfinished implementation.
