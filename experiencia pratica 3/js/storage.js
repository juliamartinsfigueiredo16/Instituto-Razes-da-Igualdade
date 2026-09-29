const CHAVE_CADASTRO = "raizes-da-igualdade:cadastro";

function salvarCadastro(dados) {
  try {
    localStorage.setItem(CHAVE_CADASTRO, JSON.stringify(dados));
    return true;
  } catch (erro) {
    console.error("Não foi possível salvar o cadastro.", erro);
    return false;
  }
}

function recuperarCadastro() {
  try {
    const dados = localStorage.getItem(CHAVE_CADASTRO);
    return dados ? JSON.parse(dados) : null;
  } catch (erro) {
    console.error("Não foi possível recuperar o cadastro.", erro);
    return null;
  }
}

window.armazenamentoCadastro = { salvarCadastro, recuperarCadastro };
