import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import vm from "node:vm";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const lib = createRequire(import.meta.url)("../src/lib/quadro-can.cjs");

test("implementação do navegador permanece equivalente à biblioteca testada", () => {
  const source = fs.readFileSync(
    path.join(root, "public/ferramentas/quadro-can/core.js"),
    "utf8",
  );
  const sandbox = { window: {} };
  vm.runInNewContext(source, sandbox);
  const browser = sandbox.window.QuadroCan;

  const samples = [
    ["18F", "48 45 4C 4C 4F 00 00 01"],
    ["000", ""],
    ["7FF", "00"],
    ["0x100", "0A 1B"],
  ];

  for (const [id, payload] of samples) {
    assert.equal(
      JSON.stringify(browser.formatFrame(browser.parseFrame(id, payload))),
      JSON.stringify(lib.formatFrame(lib.parseFrame(id, payload))),
    );
  }

  assert.throws(() => browser.parseFrame("800", ""), /0x000 até 0x7FF/);
});
