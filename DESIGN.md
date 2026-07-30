---
name: Caporici Labs
description: Documentary engineering hub — Swiss clarity with a calm technical accent
colors:
  bg: "#ffffff"
  bg-soft: "#f6f8fa"
  bg-raised: "#ffffff"
  line: "#e6e8eb"
  line-strong: "#cfd3d8"
  text: "#191b1d"
  muted: "#626970"
  accent: "#315ee7"
  accent-soft: "#eef2ff"
  accent-secondary: "#16a579"
  accent-contrast: "#ffffff"
  danger: "#9b1c1c"
  dark-bg: "#0b0d0f"
  dark-bg-soft: "#121519"
  dark-text: "#f0f2f3"
  dark-muted: "#979fa7"
  dark-accent: "#8ba8ff"
  dark-accent-secondary: "#57d5ad"
typography:
  display:
    fontFamily: "\"IBM Plex Sans\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  body:
    fontFamily: "\"IBM Plex Sans\", ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  mono:
    fontFamily: "\"JetBrains Mono\", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.9em"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "7px"
  md: "10px"
  lg: "14px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  callout:
    backgroundColor: "{colors.bg-soft}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
---

## Overview

Caporici Labs is a **Read**-first product with a Persuade home that still behaves like documentation, not a course funnel. Visual language: Swiss/minimal documentation — high contrast, calm blue accent, green secondary for “verified/available”, generous whitespace, grid discipline. Dark mode follows the OS (overrideable) with the same structure, not a neon theme.

Identity anchors: wordmark “Caporici Labs”, dual-tone mark (blue + green square), author section for Victor Caporici, Portuguese-first copy.

## Colors

- Neutrals carry hierarchy; accent is reserved for links, current nav, and verified/status chips.
- Secondary green marks availability, labs, and “executable” cues — never decoration-only.
- Danger red only for validation errors and destructive meaning.
- Soft surfaces (`bg-soft`) hold meta blocks and callouts without heavy cards.

## Typography

- **IBM Plex Sans** for UI and body: technical, readable, not startup-default Inter.
- **JetBrains Mono** for code, identifiers, IDs, and measurement labels.
- Article measure ~68ch. Display tracking no tighter than -0.04em.
- Headings carry weight; do not rely on eyebrows/kickers above H1.

## Layout

- Max content width ~1080px; reading column narrower.
- Docs: sticky sidebar (240px) + content.
- Home: one hero composition, then single-purpose sections.
- Rhythm: more space above a section heading than below it.
- Mobile: collapse sidebar above content; stack hero diagram under copy.

## Elevation & Depth

- Prefer borders over shadows. Soft shadow only on interactive raised tools (CAN explorer) and the author panel.
- No glow, no glass stacks, no nested cards.
- Sticky topbar uses light blur for legibility, not spectacle.

## Shapes

- Radius 7–14px. Pills only for true toggles/buttons/status chips.
- Callouts are full bordered soft panels — not thick colored side bars.
- Diagram nodes on the home use monospace labels and a grid underlay.

## Components

- **Topbar:** brand + text nav + theme toggle. Nav uses muted → text hover; current page is weight, not underline noise.
- **Buttons:** primary is high-contrast ink on paper (inverts in dark). Secondary is outline.
- **Callouts (MDX):** `Note`, `Tip`, `Warning`, `Danger` — same shell, distinct label color.
- **Lab idea:** dedicated panel after article body; never pretend the repo exists.
- **Article meta:** definition grid for track, level, status, revision.
- **Prev/next:** two plain linked panels at article end.

## Do's and Don'ts

**Do**

- Declare sources, versions, and limits on every technical claim.
- Keep Diátaxis types pure: don’t mix a tutorial and a reference in one page.
- Prefer SVG/drawn marks over emoji icons.
- Show hover, focus-visible, and error states.
- Respect `prefers-reduced-motion`.

**Don't**

- Purple gradients, glassmorphism, metric-stat hero strips, icon-card grids as IA.
- Gradient text or decorative monospace costumes.
- Fake “Available” domains or unspoken draft content in production.
- Thick accent borders as the main callout style.
- Marketing slogans that a neighboring SaaS could reuse unchanged.
