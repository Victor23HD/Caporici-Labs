function parseFrame(rawIdInput, rawPayloadInput) {
  const rawId = rawIdInput.trim().replace(/^0x/i, "");

  if (!/^[0-9a-f]{1,3}$/i.test(rawId)) {
    throw new Error(
      "Use de 1 a 3 dígitos hexadecimais para um identificador de 11 bits.",
    );
  }

  const id = Number.parseInt(rawId, 16);

  if (id > 0x7ff) {
    throw new Error(
      "Identificadores clássicos de 11 bits vão de 0x000 até 0x7FF.",
    );
  }

  const rawPayload = rawPayloadInput.trim();
  const byteTokens = rawPayload === "" ? [] : rawPayload.split(/\s+/);

  if (byteTokens.length > 8) {
    throw new Error("Um quadro CAN clássico carrega no máximo 8 bytes de dados.");
  }

  if (byteTokens.some((byte) => !/^[0-9a-f]{2}$/i.test(byte))) {
    throw new Error(
      "Escreva cada byte com dois dígitos hexadecimais, separados por espaço.",
    );
  }

  return {
    id,
    bytes: byteTokens.map((byte) => Number.parseInt(byte, 16)),
  };
}

function toAscii(byte) {
  return byte >= 32 && byte <= 126 ? String.fromCharCode(byte) : ".";
}

function describePriority(id) {
  if (id === 0) {
    return "Maior prioridade possível em 11 bits";
  }

  if (id === 0x7ff) {
    return "Menor prioridade possível em 11 bits";
  }

  const nextId = (id + 1).toString(16).toUpperCase().padStart(3, "0");
  return `Vence a arbitragem contra o identificador 0x${nextId}`;
}

function formatFrame(frame) {
  const total = frame.bytes.length;

  return {
    idHex: `0x${frame.id.toString(16).toUpperCase().padStart(3, "0")}`,
    idDecimal: String(frame.id),
    idBinary: frame.id.toString(2).padStart(11, "0"),
    dlc: `${total} ${total === 1 ? "byte" : "bytes"}`,
    priority: describePriority(frame.id),
    payloadDecimal: total === 0 ? "Sem dados" : frame.bytes.join(" "),
    payloadAscii: total === 0 ? "Sem dados" : frame.bytes.map(toAscii).join(""),
  };
}

module.exports = { parseFrame, formatFrame };
