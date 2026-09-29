(() => {
  function configurarFormulario() {
    const formulario = document.querySelector("#formulario-cadastro");
    if (!formulario) return;

    const feedback = formulario.querySelector("#feedback-cadastro");
    const { salvarCadastro, recuperarCadastro } = window.armazenamentoCadastro;
    const dadosSalvos = recuperarCadastro();

    if (dadosSalvos) {
      formulario.nome.value = dadosSalvos.nome || "";
      formulario.email.value = dadosSalvos.email || "";
      feedback.textContent = "Dados recuperados do armazenamento local.";
    }

    function validarCampo(campo) {
      const mensagemErro = campo.parentElement.querySelector(".mensagem-erro");
      let mensagem = "";

      campo.setCustomValidity("");

      if (campo.value.trim() === "") {
        mensagem = "Este campo é obrigatório.";
      } else if (campo.name === "nome" && campo.value.trim().length < 3) {
        mensagem = "Digite pelo menos 3 caracteres no nome.";
      } else if (campo.type === "email" && !campo.validity.valid) {
        mensagem = "Digite um endereço de e-mail válido.";
      }

      if (mensagem) campo.setCustomValidity(mensagem);

      const possuiErro = !campo.validity.valid;
      campo.setAttribute("aria-invalid", String(possuiErro));
      campo.parentElement.classList.toggle("campo-com-erro", possuiErro);
      mensagemErro.textContent = mensagem;
      return !possuiErro;
    }

    formulario.addEventListener("input", (evento) => {
      const campo = evento.target;
      if (!campo.matches("input")) return;

      validarCampo(campo);
      feedback.textContent = "";
    });

    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const camposValidos = [...formulario.querySelectorAll("[required]")]
        .map(validarCampo)
        .every(Boolean);

      if (!camposValidos || !formulario.checkValidity()) {
        feedback.textContent = "Revise os campos destacados antes de enviar.";
        formulario.querySelector(":invalid")?.focus();
        return;
      }

      const dadosCadastro = Object.fromEntries(new FormData(formulario).entries());
      const foiSalvo = salvarCadastro(dadosCadastro);
      feedback.textContent = foiSalvo
        ? "Dados validados e salvos neste navegador com sucesso."
        : "Os dados são válidos, mas não foi possível salvá-los no navegador.";

      if (foiSalvo && window.bootstrap) {
        const toast = document.querySelector("#toast-cadastro");
        window.bootstrap.Toast.getOrCreateInstance(toast, { delay: 5000 }).show();
      }
    });
  }

  window.formularioCadastro = { configurarFormulario };
})();
