---
name: Caporici Labs
description: Split-flap concourse board for critical embedded engineering knowledge
colors:
  bg: "#0a0b0d"
  bg-soft: "#121418"
  bg-raised: "#181b21"
  line: "#2c3139"
  line-strong: "#4a5160"
  text: "#f3f0e8"
  muted: "#a39e92"
  accent: "#f0b429"
  accent-soft: "#3a2e12"
  accent-secondary: "#3dbe8c"
  accent-contrast: "#0a0b0d"
  danger: "#e07a7a"
  flap: "#14171c"
  flap-text: "#f3f0e8"
  light-bg: "#e7e4dc"
  light-text: "#121418"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, ui-sans-serif, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0.04em"
  body:
    fontFamily: "Atkinson Hyperlegible, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.9em"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "3px"
  md: "6px"
  lg: "10px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-contrast}"
    rounded: "{rounded.sm}"
    padding: "10px 18px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "10px 18px"
  callout:
    backgroundColor: "{colors.bg-soft}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
---

## Overview

Caporici Labs wears a **split-flap departure board** visual world: matte flap faces, steel frame, amber status lamps, painted condensed destinations, green for on-time/publicado. Dark concourse is the primary night-desk scene; light mode is a daylight terminal inversion of the same grammar.

Seed: `f48f179b`. Challenger built: `signals-instruments-split-flap-concourse` (won audience identification + product clarity over grounded schematic-wall #7).

Home mode: Persuade. Docs/tools: Read/Operate inside the same board language.

## Colors

- Neutrals are steel and flap black, not SaaS gray-lilac.
- Amber (`accent`) marks attention, HOLD, and primary CTA lamp.
- Green (`accent-secondary`) marks PUB / LIVE / on-time only.
- No purple, no neon glow stacks, no cream+terracotta editorial costume.

## Typography

- **Barlow Condensed** for board destinations, nav, section titles on marketing surfaces.
- **Atkinson Hyperlegible** for body reading.
- **JetBrains Mono** for codes, IDs, clocks, status chips.
- Docs headings drop forced all-caps so long Portuguese titles stay readable.

## Layout

- Home hero is a full-bleed board frame, not a two-column SaaS hero.
- Lists of domains/tracks/resources are board rows (code | destination | status).
- Docs: sticky platform sidebar + reading column (~68ch).
- More space above section headings than below.

## Elevation & Depth

- Flap faces use a horizontal split highlight (lid seam), not glassmorphism.
- Soft shadow on the board frame and tool panel only.
- Borders over nested cards.

## Components

- Wordmark: flap tile `CL` + condensed Caporici Labs.
- Primary button: amber lamp slab, uppercase condensed.
- Callouts: soft panels, label in condensed caps, no thick side bars.
- Tool inputs sit on flap-black fields with mono digits.

## Motion

- Board rows and destination flaps drop with a short rotateX cascade.
- Respect `prefers-reduced-motion`.
- Clock on the board refreshes quietly.

## Do's and Don'ts

**Do**

- Keep statuses honest: HOLD for research tracks, PUB only for published work.
- Preserve Portuguese technical voice and Diátaxis purity in content.
- Treat the board as information architecture, not decoration.

**Don't**

- Icon-card grids as the home IA.
- Gradient text, eyebrow kickers, purple SaaS chrome.
- Fake “Available” domains.
- Soften HOLD into false completeness.
