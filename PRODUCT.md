# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 5 (static site), Markdown/MDX content collections, plain CSS design tokens, dependency-free browser tools (CAN explorer), Node test runner for editorial and domain checks. Deploy target: static hosting (Vercel-compatible).

## Users

Primary users are software developers working with — or migrating into — mission-critical embedded systems, especially automotive (C/C++, RTOS, Linux, CAN, diagnostics). They need mental models before standards, and they distrust marketing-shaped docs.

Secondary audiences: engineering managers evaluating technical depth; cross-domain engineers (aviation, rail, agriculture, marine) looking for transferable patterns.

Situation: reading at a desk or late at night, often comparing a confusing standard, vendor PDF, or forum answer with a working implementation.

## Product Purpose

Caporici Labs organizes, connects, and verifies dispersed knowledge about critical embedded systems so a developer can understand the whole path — from electrical signal to cloud — without buying a course or trusting unsourced claims.

Success means: a reader finishes a page knowing what is fact, what is industrial practice, what is didactic simplification, and what to do next; tools and future labs prove claims without becoming a SaaS product.

## Positioning

Independent, author-curated engineering synthesis — not a vendor docs portal, not a course funnel, not a standards bookstore. Victor Caporici researches, structures, and exposes limits. Confidence comes from sources, versioning, and runnable checks, not from authority theater.

The mechanism a neighbor cannot copy truthfully: the combination of production C/C++ judgment, Diátaxis-shaped progressive corpus, explicit limitation statements, and browser/lab tools that refuse to pretend they know more than they do.

## Capabilities

- Multi-domain hub with Automotive as the first deep axis
- Progressive learning tracks from architecture to protocol, platform, safety, and process
- Diátaxis content types: explanation, tutorial, how-to, reference
- Browser tools with declared non-goals (e.g. CAN frame explorer without DBC decoding)
- Editorial workflow: draft → review → published
- Future executable labs linked from articles without making text depend on them

## Constraints

- Portuguese first; English only after content stabilizes
- Do not reproduce paid standards; cite edition and mark unpaid summaries honestly
- No fake completeness: research tracks stay labeled until real content exists
- No vehicle injection or unsafe hardware guidance
- Keep pages readable without a build for content authors once published; Astro build is the shipping path
- Brand voice is technical, calm, first-person when authorship matters, never coach/hype

## Voice

Calm, precise, developer-to-developer. Prefer concrete failure modes over slogans. Use “eu” when describing synthesis and judgment; use “você” for the reader’s work. Portuguese technical terms with English original on first use.

## Anti-references

- Purple gradient SaaS landing pages
- “Boost your productivity” / course-selling hero patterns
- Card grids of icons as information architecture
- Fake testimonials, fake stats, fake partner logos
- Pretending draft domains are finished products
- Tools that silently invent signal meaning without a DBC/spec

## Accessibility

Target WCAG AA contrast as floor. Keyboard focus visible. Respect `prefers-reduced-motion`. Docs mode prioritizes reading measure (~65–75ch) and clear hierarchy over decoration.
