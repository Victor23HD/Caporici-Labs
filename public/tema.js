(function aplicarTema() {
  const CHAVE = "caporici-labs-tema";
  const raiz = document.documentElement;

  function ler() {
    try {
      return localStorage.getItem(CHAVE);
    } catch (erro) {
      return null;
    }
  }

  function gravar(tema) {
    try {
      localStorage.setItem(CHAVE, tema);
    } catch (erro) {
      /* navegação privada pode bloquear armazenamento */
    }
  }

  const escolhido = ler();

  if (escolhido === "claro" || escolhido === "escuro") {
    raiz.dataset.tema = escolhido;
  }

  function temaAtual() {
    if (raiz.dataset.tema) {
      return raiz.dataset.tema;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "escuro"
      : "claro";
  }

  function montarBotao() {
    const botao = document.querySelector(".tema-botao");

    if (!botao) {
      return;
    }

    function rotular() {
      const alvo = temaAtual() === "escuro" ? "claro" : "escuro";
      botao.textContent = alvo === "escuro" ? "Escuro" : "Claro";
      botao.setAttribute("aria-label", `Mudar para o tema ${alvo}`);
    }

    botao.addEventListener("click", () => {
      const alvo = temaAtual() === "escuro" ? "claro" : "escuro";
      raiz.dataset.tema = alvo;
      gravar(alvo);
      rotular();
    });

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", rotular);

    rotular();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", montarBotao);
  } else {
    montarBotao();
  }
})();
