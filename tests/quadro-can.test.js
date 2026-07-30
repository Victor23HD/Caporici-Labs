import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const { parseFrame, formatFrame } = require("../src/lib/quadro-can.cjs");

test("decompõe um quadro válido", () => {
  const hello = formatFrame(parseFrame("18F", "48 45 4C 4C 4F 00 00 01"));
  assert.equal(hello.idHex, "0x18F");
  assert.equal(hello.idDecimal, "399");
  assert.equal(hello.idBinary, "00110001111");
  assert.equal(hello.dlc, "8 bytes");
  assert.equal(hello.payloadAscii, "HELLO...");
});

test("descreve prioridades extremas em português", () => {
  assert.equal(
    formatFrame(parseFrame("000", "")).priority,
    "Maior prioridade possível em 11 bits",
  );
  assert.equal(
    formatFrame(parseFrame("7FF", "00")).priority,
    "Menor prioridade possível em 11 bits",
  );
  assert.equal(formatFrame(parseFrame("001", "7F")).dlc, "1 byte");
  assert.equal(formatFrame(parseFrame("0x001", "")).payloadDecimal, "Sem dados");
  assert.equal(
    formatFrame(parseFrame("100", "00")).priority,
    "Vence a arbitragem contra o identificador 0x101",
  );
});

test("rejeita identificadores e payloads inválidos", () => {
  assert.throws(() => parseFrame("800", ""), /0x000 até 0x7FF/);
  assert.throws(
    () => parseFrame("100", "00 01 02 03 04 05 06 07 08"),
    /no máximo 8 bytes/,
  );
  assert.throws(() => parseFrame("100", "0 FF"), /dois dígitos hexadecimais/);
});
