---
name: Caporici Labs
description: Stagecraft cyclorama dawn for engineering knowledge synthesis
colors:
  night: "#050506"
  cobalt: "#0A2BFF"
  rose-gather: "#D24BFF"
  rose-light: "#FF7BAE"
  dawn-wash: "#FFD7E6"
  day: "#FFFFFF"
  bg: "#07070A"
  bg-soft: "#101018"
  bg-raised: "#14141E"
  line: "#2A2A38"
  line-strong: "#4A4A5C"
  text: "#F4EEF2"
  muted: "#C4B4BE"
  accent: "#FF7BAE"
  accent-secondary: "#6D8CFF"
  amber: "#FFB36A"
  danger: "#FF8A8A"
  light-bg: "#F7F2F5"
  light-text: "#121018"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, Impact, sans-serif"
    fontSize: "clamp(1.55rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  stencil:
    fontFamily: "Big Shoulders Stencil Display, Big Shoulders Display, sans-serif"
    fontSize: "clamp(3rem, 9vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "0.02em"
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
  sm: "3px"
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
    backgroundColor: "linear-gradient(110deg, {colors.cobalt}, {colors.rose-gather} 55%, {colors.rose-light})"
    textColor: "{colors.day}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  callout:
    backgroundColor: "{colors.bg-soft}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
---

## Overview

Caporici Labs is **stagecraft cyclorama dawn**: a night-to-day horizon field (cobalt → rose → dawn wash) that sells synthesis — clarity emerging from scattered noise — not terminal cosplay.

User-pinned world `stagecraft-theater-lighting-cyclorama-dawn` (Rain Garden alternate declined). UI/UX Pro Max leans portfolio storytelling × exaggerated minimalism; generic SaaS and phosphor costume rejected.

- Home = Persuade (full-bleed cyclorama, synthesis thesis)
- Docs = Read (same DNA, quieter)
- Tools = Operate (cue labels, honest outputs)

## Colors

- Night `#050506` owns the stage floor.
- Cobalt and rose are the cue lights — committed at page scale in the hero wash and primary CTA gradient.
- Dawn wash / day are horizon highlights and light text on the hero.
- Amber is attention / research-wait only; danger stays diagnostic.
- Light theme inverts to paper with rose accent, keeping the same cue language.

## Typography

- **Big Shoulders Stencil Display** for brand, cue labels, primary CTAs.
- **Big Shoulders Display** for section headlines.
- **Public Sans** for body reading.
- **JetBrains Mono** only for payloads, IDs, and code.
- Brand type reaches ~5.6rem; tracking stays readable (no tighter than -0.02em on display).

## Layout

- First viewport is full-bleed cyclorama photography + wash, not a boxed hero card.
- Controls and CTAs sit low in the hero frame so the field can breathe.
- Body sections use horizon rules and multi-column strips, not icon-card grids.
- Docs: sticky sidebar + ~68ch column.
- Large section gaps (~88px).

## Elevation & Depth

- Film grain overlay is atmospheric; disabled under reduced motion only for animation, grain may remain subtle.
- Soft rose glow on primary CTA; shadows carry offset + blur.
- Borders over nested cards; no glass stacks as structure.

## Shapes

- Pill CTAs match the world’s activate controls.
- Content lists and callouts stay small-radius rectangles (`4px` / `6px`).
- Favicon is a miniature cyclorama + monolith cutout.

## Components

- Primary button: cobalt→rose gradient pill, stencil uppercase.
- Secondary button: ghost pill with dawn-edge border.
- Synthesis steps / layers / area rows: ruled lists, not cards-of-icons.
- Callouts keep label + body; tip/warn/danger via cue color on the label.

## Do's and Don'ts

**Do**

- Sell gathering + synthesis in Portuguese, first person where authorship matters.
- Keep research tracks labeled until real content exists.
- Let the cyclorama field carry atmosphere; keep body quieter for reading.

**Don't**

- Terminal prompts, scanline CRT costume, phosphor green brand.
- Purple SaaS landing defaults disconnected from this world’s cue lights.
- Eyebrow kickers, gradient text, fake stats, icon-card information architecture.
- Soft Rain Garden wellness look as a second identity.
