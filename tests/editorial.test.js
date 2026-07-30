import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "src/content/automotivo");
const trilhasFile = path.join(root, "src/data/trilhas.ts");

function listMarkdownFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => path.join(dir, name));
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  assert.ok(match, "arquivo Markdown precisa de frontmatter YAML");
  return { frontmatter: match[1], body: match[2] };
}

function hasField(frontmatter, field) {
  return new RegExp(`^${field}:`, "m").test(frontmatter);
}

test("existem exatamente as 11 trilhas cadastradas", () => {
  const source = fs.readFileSync(trilhasFile, "utf8");
  const ids = [...source.matchAll(/id:\s*"([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, 11);
  assert.deepEqual(ids, [
    "fundamentos",
    "can",
    "redes-classicas",
    "ecu",
    "diagnostico",
    "autosar",
    "ethernet-sdv",
    "boot-ota",
    "safety-security",
    "testes-processo",
    "sintese",
  ]);
});

test("artigos possuem contrato editorial mínimo", () => {
  const files = listMarkdownFiles(contentDir);
  assert.ok(files.length >= 5, "primeiro lote precisa de pelo menos 5 textos");

  const required = [
    "titulo",
    "resumo",
    "trilha",
    "ordem",
    "nivel",
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

    for (const field of required) {
      assert.ok(hasField(frontmatter, field), `${path.basename(file)} sem campo ${field}`);
    }

    assert.match(frontmatter, /status:\s*(rascunho|revisao|publicado)/);
    assert.match(body, /## Resumo/);
    assert.match(body, /## Perguntas de verificação/);
    assert.match(frontmatter, /laboratorio:/);
  }
});

test("slugs do primeiro lote estão presentes", () => {
  const names = listMarkdownFiles(contentDir).map((file) => path.basename(file, ".md"));
  for (const expected of [
    "mapa",
    "arquitetura-ee",
    "eletricidade-para-devs",
    "representacao-de-dados",
    "tempo-e-determinismo",
  ]) {
    assert.ok(names.includes(expected), `faltando ${expected}.md`);
  }
});

test("não há títulos duplicados", () => {
  const titles = listMarkdownFiles(contentDir).map((file) => {
    const raw = fs.readFileSync(file, "utf8");
    const { frontmatter } = parseFrontmatter(raw);
    const match = frontmatter.match(/^titulo:\s*"([^"]+)"/m);
    assert.ok(match, `${path.basename(file)} sem titulo`);
    return match[1];
  });

  assert.equal(new Set(titles).size, titles.length);
});
