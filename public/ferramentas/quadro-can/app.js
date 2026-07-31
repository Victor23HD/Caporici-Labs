const form = document.querySelector("#form-quadro");
const idInput = document.querySelector("#identificador");
const payloadInput = document.querySelector("#payload");
const errorOutput = document.querySelector("#erro");

const outputs = {
  idHex: document.querySelector("#id-hex"),
  idDecimal: document.querySelector("#id-decimal"),
  idBinary: document.querySelector("#id-binario"),
  dlc: document.querySelector("#dlc"),
  priority: document.querySelector("#prioridade"),
  payloadDecimal: document.querySelector("#payload-decimal"),
  payloadAscii: document.querySelector("#payload-ascii"),
};

function renderFrame(frame) {
  const view = window.QuadroCan.formatFrame(frame);

  outputs.idHex.textContent = view.idHex;
  outputs.idDecimal.textContent = view.idDecimal;
  outputs.idBinary.textContent = view.idBinary;
  outputs.dlc.textContent = view.dlc;
  outputs.priority.textContent = view.priority;
  outputs.payloadDecimal.textContent = view.payloadDecimal;
  outputs.payloadAscii.textContent = view.payloadAscii;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorOutput.textContent = "";

  try {
    renderFrame(window.QuadroCan.parseFrame(idInput.value, payloadInput.value));
  } catch (error) {
    errorOutput.textContent = error.message;
  }
});

renderFrame(window.QuadroCan.parseFrame(idInput.value, payloadInput.value));
