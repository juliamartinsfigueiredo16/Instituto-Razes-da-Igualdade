(() => {
  function iniciarRoteador() {
    const app = document.querySelector("#app");
    const linksNavegacao = document.querySelectorAll('nav a[href^="#"]');
    const { templateCadastro, templateInicio, templateProjetos } = window.templates;
    const { configurarFormulario } = window.formularioCadastro;
    const rotas = {
      "#inicio": templateInicio,
      "#projetos": templateProjetos,
      "#cadastro": templateCadastro
    };
    let rotaAtual = window.location.hash || "#inicio";

    if (!app) throw new Error("Área principal da aplicação não foi encontrada.");

    function renderizarPagina(destino = rotaAtual) {
      const hashAtual = rotas[destino] ? destino : "#inicio";
      const template = rotas[hashAtual];

      rotaAtual = hashAtual;
      app.replaceChildren(template());
      configurarFormulario();
      app.focus();

      linksNavegacao.forEach((link) => {
        const paginaAtiva = link.getAttribute("href") === hashAtual;
        if (paginaAtiva) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    linksNavegacao.forEach((link) => {
      link.addEventListener("click", (evento) => {
        evento.preventDefault();
        const destino = link.getAttribute("href");

        if (window.location.protocol === "file:") {
          renderizarPagina(destino);
        } else if (window.location.hash === destino) {
          renderizarPagina(destino);
        } else {
          window.location.hash = destino;
        }
      });
    });

    window.addEventListener("hashchange", () => renderizarPagina(window.location.hash));
    renderizarPagina();
  }

  window.spa = { iniciarRoteador };
})();
