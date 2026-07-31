# Padrão editorial Caporici Labs

Este documento amarra Diátaxis, Markdown/MDX e o contrato de qualidade do corpus.

## Diátaxis

| Tipo | Campo | Serve a | Não misture com |
| --- | --- | --- | --- |
| Explanation | `explanation` | Entender o porquê / modelo mental | Passos de tarefa |
| Tutorial | `tutorial` | Aprender fazendo, com sucesso guiado | Receita para expert |
| How-to | `howto` | Resolver um objetivo real | Lição pedagógica longa |
| Reference | `reference` | Fatos precisos e consultáveis | Narrativa interpretativa |

O lote 1 (fundamentos) é **explanation**. Labs futuros tendem a **tutorial** ou **howto**. Tabelas de PGN/serviço UDS tendem a **reference**.

## MDX aprovado

Use apenas:

- `<Note>` — contexto neutro
- `<Tip>` — prática recomendada
- `<Warning>` — armadilha comum
- `<Danger>` — risco de falha grave / segurança

Regras:

1. Linha em branco antes e depois do callout
2. Sem HTML cru para callouts
3. Sem emoji como ícone
4. Code fence com linguagem
5. Termo técnico: português + original em inglês na primeira ocorrência

## Frontmatter mínimo

```yaml
titulo:
resumo:
trilha:
ordem:
nivel: introdutorio | intermediario | avancado
tipoDiataxis: tutorial | howto | reference | explanation
status: rascunho | revisao | publicado
objetivos: []
fontes: [{ titulo, tipo, url?, nota? }]
limitacoes: []
revisao:
atualizadoEm:
laboratorio?: { titulo, objetivo, dificuldade, entradas, saida, riscos }
```

## Fluxo

`rascunho → discussão → revisao → publicado`

Em produção, só `publicado` aparece. Dev local mostra todos os status.
