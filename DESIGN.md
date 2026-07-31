---
name: Caporici Labs
description: Developer docs portal — dark chrome, grid paper, section cards
colors:
  nav: "#0B1220"
  cue: "#3B82F6"
  bg: "#F4F6F9"
  bg-raised: "#FFFFFF"
  line: "#D5DDE8"
  text: "#0F172A"
  muted: "#475569"
  accent: "#1D4ED8"
  docs: "#2563EB"
  tools: "#0F766E"
  code: "#334155"
  amber: "#B45309"
  danger: "#B91C1C"
typography:
  display:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, sans-serif"
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
  sm: "6px"
  md: "10px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "10px 18px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "10px 18px"
  portal-card:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "24px 22px"
---

## Overview

Caporici Labs follows a **developer documentation portal** pattern inspired by [TOTVSTec docs](https://totvs.github.io/totvstec-doc/) — dark navbar, paper+grid body, centered brand hero, interactive section cards — **without** TOTVS logo, green brand, TLPP marks, or “plataforma” eyebrow.

UI/UX Pro Max: FAQ/Documentation Landing × Swiss Minimalism. Cyclorama dawn and phosphor terminal worlds are retired.

- Home = Persuade (portal landing)
- Docs = Read (sidebar + measure)
- Tools = Operate

## Colors

- Near-black navbar `#0B1220` with Caporici blue cue line `#3B82F6` (not TOTVS cyan/green identity).
- Paper body `#F4F6F9` with subtle engineering grid.
- Section rails: Docs blue, Tools teal, Código slate — category coding, Caporici-owned.
- Light-first; dark theme inverts surfaces while keeping dark chrome.

## Typography

- **Sora** for brand and headings.
- **Public Sans** for body (Inter / IBM Plex avoided).
- **JetBrains Mono** for code and IDs only.

## Layout

- Sticky dark navbar; hamburger on narrow screens.
- Centered hero: brand title + one lede (no eyebrow kicker).
- Three interactive portal cards as primary IA.
- Docs: sticky sidebar + ~68ch column.
- Section gaps ~72px.

## Elevation & Depth

- Soft offset shadows on cards and docs nav.
- Hover lifts cards slightly (`translateY(-3px)`).
- Grid is atmosphere, not content.

## Shapes

- Card radius 10px; controls 6px; theme toggle pill.
- Left accent rail (5px) only on interactive portal cards — earned by the TOTVSTec reference pattern.

## Components

- Primary button: solid accent, small radius.
- Portal cards: white/raised surface, icon, uppercase title, description, category rail.
- Callouts: raised panels with uppercase cue labels.

## Do's and Don'ts

**Do**

- Keep Caporici Labs as the hero brand signal.
- Sell synthesis in body sections under the portal cards.
- Stay honest about research tracks.

**Don't**

- TOTVS logo, green, TLPP icons, or “TOTVSTec” naming.
- Eyebrow kickers above the brand title.
- Phosphor terminal / cyclorama theatrical costume.
- Icon-only card grids without a real destination.
