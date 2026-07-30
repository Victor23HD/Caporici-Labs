---
name: Caporici Labs
description: Midnight phosphor terminal × exaggerated minimalism for embedded engineering knowledge
colors:
  bg: "#050705"
  bg-soft: "#0b110d"
  bg-raised: "#0f1611"
  line: "#1c2a20"
  line-strong: "#2f4636"
  text: "#d9ffe6"
  muted: "#86a892"
  accent: "#6dff9a"
  accent-soft: "#12301c"
  accent-secondary: "#4fd6a0"
  accent-contrast: "#050705"
  amber: "#ffb020"
  danger: "#ff8a8a"
  light-bg: "#eef2ec"
  light-text: "#101612"
typography:
  display:
    fontFamily: "Azeret Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(3.4rem, 12vw, 7.2rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.06em"
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
  sm: "2px"
  md: "4px"
  lg: "6px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "88px"
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

Caporici Labs is a **phosphor midnight terminal** executed with **exaggerated minimalism**: near-black field, green bloom type, amber cursor, massive mono headlines, subtle scanlines, sparse directory listings.

Consensus: Impeccable challenger `signals-instruments-phosphor-terminal-midnight` (seed `a00f0e7b`) × UI/UX Pro Max **Exaggerated Minimalism**. Generic slate SaaS palette rejected.

- Home = Persuade (boot session)
- Docs = Read (same DNA, quieter)
- Tools = Operate (prompt inputs, dump output)

## Colors

- Phosphor green is the brand signal and interactive accent.
- Amber is the cursor / attention / WAIT lamp only.
- Soft green marks OK / LIVE / published.
- Light mode is an inverted daylight terminal paper, not a purple-gray SaaS sheet.

## Typography

- **Azeret Mono** for brand, nav, section prompts, flags, paths.
- **Atkinson Hyperlegible** for body reading at night.
- **JetBrains Mono** for payloads, IDs, code fences.
- Hero brand type reaches ~7rem; tracking no tighter than -0.06em on mega only.

## Layout

- First viewport is full-bleed phosphor field, not a boxed board card.
- Content lists are terminal rows: `flag | path | meta`.
- Docs: sticky file-tree sidebar + ~68ch column.
- Large section gaps (~88px) per exaggerated minimalism.

## Elevation & Depth

- Bloom/glow only on phosphor brand, primary CTA, and code panels.
- Scanline overlay is atmospheric, disabled under `prefers-reduced-motion`.
- Borders over nested cards; no glass stacks.

## Motion

- One authored moment: amber cursor breathing on the brand.
- Entry bloom is optional and quiet; no scattered section animations.
- Reduced-motion kills scanlines and cursor blink.

## Do's and Don'ts

**Do**

- Keep WAIT honest for research tracks; OK/LIVE only for shipped work.
- Preserve Portuguese technical voice and Diátaxis purity.
- Let whitespace and scale carry hierarchy.

**Don't**

- Soft SaaS card grids, purple gradients, eyebrow kickers, gradient text.
- Costume split-flap frames that don't commit at page scale.
- Fake completeness for unfinished domains.
