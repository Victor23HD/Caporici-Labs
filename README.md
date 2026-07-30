# Caporici Labs

Documentação técnica independente sobre software embarcado, escrita em português,
de desenvolvedor para desenvolvedor. Padrões automotivos são caros, longos e
escritos para comitês; aqui eles são traduzidos para o modelo mental que alguém
que programa precisa ter antes de encarar a norma.

## Stack

- [Astro](https://astro.build/) para site estático
- Conteúdo em Markdown com metadados editoriais
- Ferramentas no navegador sem dependências de runtime
- Tema claro/escuro com preferência do sistema

## Desenvolvimento

```bash
npm install
npm run dev
```

```bash
npm run build
npm test
```

## Corpus automotivo

O eixo automotivo é publicado em 11 trilhas progressivas. O primeiro lote cobre
fundamentos:

1. Como o software de um veículo se organiza
2. Arquitetura elétrica e eletrônica do veículo
3. Eletricidade para desenvolvedores embarcados
4. Representação de dados no embarcado automotivo
5. Tempo e determinismo em software automotivo

Textos ficam em `src/content/automotivo/`. Trilhas ficam em `src/data/trilhas.ts`.

### Estados editoriais

| Status | Significado |
| --- | --- |
| `rascunho` | Em escrita; visível só em desenvolvimento |
| `revisao` | Aguardando leitura/discussão; visível só em desenvolvimento |
| `publicado` | Aparece na versão pública do site |

## Contrato de um artigo

Todo texto declara:

- trilha, ordem, nível e pré-requisitos
- objetivos de aprendizagem
- fontes tipadas (`norma`, `documentacao`, `pratica`, `secundaria`)
- limitações explícitas
- ideia de laboratório futuro (quando fizer sentido)
- resumo e perguntas de verificação

## Ferramentas

### Explorador de quadros CAN

`/ferramentas/quadro-can/` decompõe um identificador de 11 bits e até 8 bytes.
Não decodifica sinais sem DBC. A lógica está em
`public/ferramentas/quadro-can/core.js` e é coberta por testes.

## Padrão editorial

Toda afirmação relevante aponta para uma fonte. Quando a fonte é uma norma paga,
isso é dito explicitamente. Toda ferramenta declara o que não faz. Toda página
responde:

> Como isso foi verificado, contra qual versão, e onde pode estar errado?

Este material não substitui SAE, ISO, CiA ou AUTOSAR. Ele existe para você
chegar nesses documentos já entendendo o que está lendo.
