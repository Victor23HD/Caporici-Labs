# Auditoria de padrões (execução real)

Data: 2026-07-30. Branch: `cursor/corpus-automotivo-dd7a`.

## Comandos executados

```bash
# UI/UX Pro Max
python3 .cursor/skills/ui-ux-pro-max/scripts/search.py \
  "technical documentation developer knowledge hub embedded systems" \
  --design-system --persist -p "Caporici Labs" -f markdown

python3 .cursor/skills/ui-ux-pro-max/scripts/search.py \
  "documentation accessibility focus keyboard responsive reading" --domain ux -n 15

python3 .cursor/skills/ui-ux-pro-max/scripts/search.py \
  "layout responsive documentation" --stack astro

# Impeccable
node .cursor/skills/impeccable/scripts/context.mjs --target src/pages/index.astro
npm run build
node .cursor/skills/impeccable/scripts/detect.mjs \
  dist/index.html dist/automotivo/index.html \
  dist/automotivo/mapa/index.html dist/ferramentas/quadro-can/index.html
```

## UI/UX Pro Max (resultado)

- Pattern: FAQ/Documentation Landing
- Style: Minimalism & Swiss Style
- Typography: IBM Plex Sans (body) + JetBrains Mono (code/display accents)
- Persistido em `design-system/caporici-labs/MASTER.md`
- Checklist: contraste, focus, reduced-motion, hover 150–300ms, sem emoji-ícone

Alinhamento com `DESIGN.md`: já coincidia (Swiss docs, Plex + JetBrains, accent azul Caporici). Mantido o accent `#315ee7` do produto em vez do slate genérico sugerido.

## Impeccable detect

### Passada 1

- 10 anti-patterns: `design-system-font` (falso positivo por `fontFamily` com aspas escapadas no YAML)
- 3 advisories: `em-dash-overuse` em home, automotivo index e quadro-can

### Correções

- `DESIGN.md`: stacks tipográficos sem escapes
- Redução de travessões em prosa + UI
- Skill Humanizer instalada + `humanizer-context.md` com voz do projeto

### Passada 2 (após correção tipográfica)

- **0 anti-patterns**
- Advisories de travessão tratados na humanização

## Impeccable audit (manual, dimensões)

| # | Dimensão | Score | Achado |
|---|----------|------:|--------|
| 1 | Accessibility | 3 | `focus-visible`, `lang`, landmarks; touch targets e contraste dark mode merecem checagem visual contínua |
| 2 | Performance | 4 | Site estático Astro, CSS único, ferramenta sem deps |
| 3 | Responsive | 3 | Breakpoints existem; diagrama da home e grade de áreas ok no CSS |
| 4 | Theming | 4 | Tokens + dark mode via `tema.js` |
| 5 | Implementation Integrity | 3 | Coerente com PRODUCT/DESIGN; search ainda ausente (anti-pattern Pro Max) |
| **Total** | | **17/20** | **Good** |

## Humanizer

- Skill: `.cursor/skills/humanizer/` (Aboudjem humanizer-skill)
- Regra Cursor: `.cursor/rules/humanizer.mdc`
- Contexto de voz: `humanizer-context.md`
- Aplicado: travessões, estados de UI quebrados, ajustes de voz na home/ferramentas

## Redesign visual (2026-07-30, turno seguinte)

### Passada split-flap (fraca)
- Seed `f48f179b`: ficou costume, tipografia tímida.

### Passada 360 — consenso Impeccable × UI/UX Pro Max
- Ver `docs/DESIGN-CONSENSUS.md`
- UI/UX: Exaggerated Minimalism
- Impeccable seed `a00f0e7b` → `signals-instruments-phosphor-terminal-midnight`
- Phosphor CRT + cursor âmbar + Azeret Mono mega em home/docs/tools
- Site **ainda não está no ar** (precisa deploy Vercel)

## Pendências conscientes (não bloqueiam)

1. Deploy Vercel (repo tem `vercel.json`, mas não há deployment ativo)
2. Busca no site (recomendação Pro Max para docs hub)
3. Lote 2 do corpus (CAN) ainda não escrito
