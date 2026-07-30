import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

function exists(relativePath) {
  return fs.existsSync(path.join(dist, relativePath));
}

function read(relativePath) {
  return fs.readFileSync(path.join(dist, relativePath), "utf8");
}

test("build gera as rotas públicas esperadas", () => {
  assert.ok(exists("index.html"), "home");
  assert.ok(exists("automotivo/index.html"), "automotivo");
  assert.ok(exists("ferramentas/index.html"), "ferramentas");
  assert.ok(exists("ferramentas/quadro-can/index.html"), "quadro-can");

  for (const slug of [
    "mapa",
    "arquitetura-ee",
    "eletricidade-para-devs",
    "representacao-de-dados",
    "tempo-e-determinismo",
  ]) {
    assert.ok(exists(`automotivo/${slug}/index.html`), slug);
  }
});

test("páginas expõem navegação e acessibilidade básica", () => {
  const home = read("index.html");
  assert.match(home, /lang="pt-BR"/);
  assert.match(home, /Caporici Labs/);
  assert.match(home, /Victor Caporici/);
  assert.match(home, /Eleven trilhas|Onze trilhas|Corpus automotivo/i);

  const artigo = read("automotivo/mapa/index.html");
  assert.match(artigo, /aria-label="Navegação do eixo automotivo"/);
  assert.match(artigo, /Ideia de laboratório/);
  assert.match(artigo, /Onde isto pode falhar/);
  assert.match(artigo, /Fontes/);
  assert.match(artigo, /aria-current="page"/);
});

test("assets da ferramenta CAN são publicados", () => {
  assert.ok(exists("ferramentas/quadro-can/core.js"));
  assert.ok(exists("ferramentas/quadro-can/app.js"));
  assert.ok(exists("tema.js"));
});
