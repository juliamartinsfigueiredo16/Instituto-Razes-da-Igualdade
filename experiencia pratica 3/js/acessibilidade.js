(() => {
  const CHAVE_CONTRASTE = "raizes-da-igualdade:alto-contraste";

  function aplicarAltoContraste(ativado) {
    document.body.classList.toggle("alto-contraste", ativado);
    const botao = document.querySelector("#alternar-contraste");
    if (!botao) return;

    botao.setAttribute("aria-pressed", String(ativado));
    botao.textContent = ativado ? "Desativar alto contraste" : "Ativar alto contraste";
  }

  function iniciarControleDeContraste() {
    const botao = document.querySelector("#alternar-contraste");
    if (!botao) return;

    const contrasteSalvo = localStorage.getItem(CHAVE_CONTRASTE) === "ativo";
    aplicarAltoContraste(contrasteSalvo);

    botao.addEventListener("click", () => {
      const ativado = !document.body.classList.contains("alto-contraste");
      aplicarAltoContraste(ativado);
      localStorage.setItem(CHAVE_CONTRASTE, ativado ? "ativo" : "inativo");
    });
  }

  window.acessibilidade = { iniciarControleDeContraste };
})();
