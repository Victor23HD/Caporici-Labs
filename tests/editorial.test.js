import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "src/content/automotivo");
const trilhasFile = path.join(root, "src/data/trilhas.ts");

function listContentFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
    .map((name) => path.join(dir, name));
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  assert.ok(match, "arquivo precisa de frontmatter YAML");
  return { frontmatter: match[1], body: match[2] };
}

function hasField(frontmatter, field) {
  return new RegExp(`^${field}:`, "m").test(frontmatter);
}

test("artefatos de padrão existem", () => {
  for (const file of [
    "PRODUCT.md",
    "DESIGN.md",
    "docs/EDITORIAL.md",
    ".cursor/rules/caporici-labs.mdc",
    ".cursor/skills/impeccable/SKILL.md",
    ".cursor/skills/ui-ux-pro-max/SKILL.md",
    ".cursor/skills/humanizer/SKILL.md",
    "humanizer-context.md",
    "docs/AUDIT-STANDARDS.md",
    "design-system/caporici-labs/MASTER.md",
    "src/components/mdx/Note.astro",
    "src/components/mdx/Tip.astro",
    "src/components/mdx/Warning.astro",
    "src/components/mdx/Danger.astro",
  ]) {
    assert.ok(fs.existsSync(path.join(root, file)), `faltando ${file}`);
  }
});

test("existem exatamente as 11 trilhas cadastradas", () => {
  const source = fs.readFileSync(trilhasFile, "utf8");
  const ids = [...source.matchAll(/id:\s*"([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, 11);
});

test("artigos possuem contrato editorial + Diátaxis", () => {
  const files = listContentFiles(contentDir);
  assert.ok(files.length >= 5, "primeiro lote precisa de pelo menos 5 textos");

  const required = [
    "titulo",
    "resumo",
    "trilha",
    "ordem",
    "nivel",
    "tipoDiataxis",
    "status",
    "objetivos",
    "fontes",
    "limitacoes",
    "revisao",
    "atualizadoEm",
  ];

  for (const file of files) {
    const raw = fs.readFileSync(file, "utf8");
    const { frontmatter, body } = parseFrontmatter(raw);

    assert.ok(file.endsWith(".mdx"), `${path.basename(file)} deve ser MDX`);

    for (const field of required) {
      assert.ok(hasField(frontmatter, field), `${path.basename(file)} sem campo ${field}`);
    }

    assert.match(
      frontmatter,
      /tipoDiataxis:\s*(tutorial|howto|reference|explanation)/,
    );
    assert.match(frontmatter, /status:\s*(rascunho|revisao|publicado)/);
    assert.match(body, /## Resumo/);
    assert.match(body, /## Perguntas de verificação/);
    assert.match(frontmatter, /laboratorio:/);
    assert.doesNotMatch(body, /<div class="obs">/);
  }
});

test("slugs do primeiro lote estão presentes como explanation", () => {
  const expected = [
    "mapa",
    "arquitetura-ee",
    "eletricidade-para-devs",
    "representacao-de-dados",
    "tempo-e-determinismo",
  ];

  for (const slug of expected) {
    const file = path.join(contentDir, `${slug}.mdx`);
    assert.ok(fs.existsSync(file), `faltando ${slug}.mdx`);
    const raw = fs.readFileSync(file, "utf8");
    assert.match(raw, /tipoDiataxis:\s*explanation/);
  }
});

test("não há títulos duplicados", () => {
  const titles = listContentFiles(contentDir).map((file) => {
    const raw = fs.readFileSync(file, "utf8");
    const { frontmatter } = parseFrontmatter(raw);
    const match = frontmatter.match(/^titulo:\s*"([^"]+)"/m);
    assert.ok(match, `${path.basename(file)} sem titulo`);
    return match[1];
  });

  assert.equal(new Set(titles).size, titles.length);
});

test("home não usa gradient text nem eyebrow kicker", () => {
  const home = fs.readFileSync(path.join(root, "src/pages/index.astro"), "utf8");
  assert.doesNotMatch(home, /class="eyebrow"/);
  assert.doesNotMatch(home, /background-clip:\s*text/);
  const h1 = home.match(/<h1>[\s\S]*?<\/h1>/);
  assert.ok(h1, "home precisa de H1");
  assert.doesNotMatch(h1[0], /<span/);
});
