function criarElemento(tag, texto, classe) {
  const elemento = document.createElement(tag);
  elemento.textContent = texto;
  if (classe) elemento.className = classe;
  return elemento;
}

function criarPagina(titulo, descricao) {
  const secao = document.createElement("section");
  secao.append(criarElemento("h1", titulo), criarElemento("p", descricao));
  return secao;
}

function criarCampo(id, rotulo, tipo, autocomplete) {
  const grupo = document.createElement("p");
  grupo.className = "campo-formulario";
  const label = criarElemento("label", rotulo);
  const input = document.createElement("input");

  label.htmlFor = id;
  input.id = id;
  input.name = id;
  input.type = tipo;
  input.required = true;
  input.autocomplete = autocomplete;
  const erro = document.createElement("span");

  erro.id = `erro-${id}`;
  erro.className = "mensagem-erro";
  erro.setAttribute("aria-live", "polite");
  input.setAttribute("aria-describedby", erro.id);
  grupo.append(label, input, erro);
  return grupo;
}

function criarToast() {
  const toast = document.createElement("div");
  const conteudo = document.createElement("div");
  const texto = criarElemento("div", "Cadastro salvo com sucesso.", "toast-body");
  const fechar = document.createElement("button");

  toast.id = "toast-cadastro";
  toast.className = "toast align-items-center text-bg-success border-0 position-fixed bottom-0 end-0 m-3";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  toast.setAttribute("aria-atomic", "true");
  conteudo.className = "d-flex";
  fechar.type = "button";
  fechar.className = "btn-close btn-close-white me-2 m-auto";
  fechar.setAttribute("data-bs-dismiss", "toast");
  fechar.setAttribute("aria-label", "Fechar aviso");
  conteudo.append(texto, fechar);
  toast.append(conteudo);
  return toast;
}

function templateInicio() {
  return criarPagina(
    "Educação antirracista transforma vidas",
    "Conheça o Instituto Raízes da Igualdade e participe da construção de uma educação mais justa."
  );
}

function templateProjetos() {
  const secao = criarPagina(
    "Projetos em destaque",
    "Nossas iniciativas levam formação, literatura e cidadania para escolas e comunidades."
  );
  const lista = document.createElement("div");
  lista.className = "lista-projetos";
  const modeloProjeto = document.querySelector("#template-projeto");
  const projetos = [
    {
      titulo: "Baobá nas Escolas",
      descricao: "Formação continuada de educadores para uma prática pedagógica antirracista."
    },
    {
      titulo: "Quilombo Literário",
      descricao: "Distribuição de literatura com protagonistas negros e indígenas."
    },
    {
      titulo: "Projeto VOZES",
      descricao: "Oficinas de audiovisual e cidadania para jovens das periferias."
    }
  ];

  projetos.forEach((projeto) => {
    const card = modeloProjeto.content.cloneNode(true);
    card.querySelector("[data-titulo]").textContent = projeto.titulo;
    card.querySelector("[data-descricao]").textContent = projeto.descricao;
    lista.append(card);
  });

  secao.append(lista);
  return secao;
}

function templateCadastro() {
  const secao = criarPagina(
    "Faça parte da transformação",
    "Preencha seus dados para demonstrar interesse em voluntariado, doação ou parceria."
  );
  const formulario = document.createElement("form");
  const mensagem = document.createElement("p");
  const botao = criarElemento("button", "Enviar interesse");

  formulario.id = "formulario-cadastro";
  formulario.noValidate = true;
  formulario.append(
    criarCampo("nome", "Nome completo", "text", "name"),
    criarCampo("email", "E-mail", "email", "email")
  );

  mensagem.id = "feedback-cadastro";
  mensagem.className = "feedback-formulario";
  mensagem.setAttribute("role", "status");
  mensagem.setAttribute("aria-live", "polite");
  botao.type = "submit";
  formulario.append(mensagem, botao);
  secao.append(formulario, criarToast());
  return secao;
}

window.templates = { templateCadastro, templateInicio, templateProjetos };
