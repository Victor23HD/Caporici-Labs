const form = document.querySelector("#frame-form");
const idInput = document.querySelector("#can-id");
const payloadInput = document.querySelector("#payload");
const errorOutput = document.querySelector("#error");

const outputs = {
  idHex: document.querySelector("#id-hex"),
  idDecimal: document.querySelector("#id-decimal"),
  idBinary: document.querySelector("#id-binary"),
  dlc: document.querySelector("#dlc"),
  priority: document.querySelector("#priority"),
  payloadDecimal: document.querySelector("#payload-decimal"),
  payloadAscii: document.querySelector("#payload-ascii"),
};

function parseFrame() {
  const rawId = idInput.value.trim().replace(/^0x/i, "");

  if (!/^[0-9a-f]{1,3}$/i.test(rawId)) {
    throw new Error("Use 1–3 hexadecimal digits for an 11-bit CAN ID.");
  }

  const id = Number.parseInt(rawId, 16);

  if (id > 0x7ff) {
    throw new Error("Classical 11-bit identifiers range from 0x000 to 0x7FF.");
  }

  const rawPayload = payloadInput.value.trim();
  const bytes = rawPayload === "" ? [] : rawPayload.split(/\s+/);

  if (bytes.length > 8) {
    throw new Error("A Classical CAN frame carries at most 8 payload bytes.");
  }

  if (bytes.some((byte) => !/^[0-9a-f]{2}$/i.test(byte))) {
    throw new Error("Write each payload byte as two hex digits, separated by spaces.");
  }

  return {
    id,
    bytes: bytes.map((byte) => Number.parseInt(byte, 16)),
  };
}

function toAscii(byte) {
  return byte >= 32 && byte <= 126 ? String.fromCharCode(byte) : ".";
}

function renderFrame(frame) {
  const hexId = frame.id.toString(16).toUpperCase().padStart(3, "0");
  const nextId = Math.min(frame.id + 1, 0x7ff)
    .toString(16)
    .toUpperCase()
    .padStart(3, "0");

  outputs.idHex.textContent = `0x${hexId}`;
  outputs.idDecimal.textContent = String(frame.id);
  outputs.idBinary.textContent = frame.id.toString(2).padStart(11, "0");
  outputs.dlc.textContent = `${frame.bytes.length} ${
    frame.bytes.length === 1 ? "byte" : "bytes"
  }`;
  outputs.priority.textContent =
    frame.id === 0
      ? "Highest possible 11-bit priority"
      : frame.id === 0x7ff
        ? "Lowest possible 11-bit priority"
      : `Higher than ID 0x${nextId}`;
  outputs.payloadDecimal.textContent =
    frame.bytes.length === 0 ? "No data" : frame.bytes.join(" ");
  outputs.payloadAscii.textContent =
    frame.bytes.length === 0 ? "No data" : frame.bytes.map(toAscii).join("");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorOutput.textContent = "";

  try {
    renderFrame(parseFrame());
  } catch (error) {
    errorOutput.textContent = error.message;
  }
});

renderFrame(parseFrame());
