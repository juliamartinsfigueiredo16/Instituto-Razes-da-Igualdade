// Ponto de entrada: inicializa a aplicação após os demais módulos.
if (window.spa && window.rede && window.acessibilidade) {
  window.rede.iniciarMonitoramentoDeRede();
  window.acessibilidade.iniciarControleDeContraste();
  window.spa.iniciarRoteador();
} else {
  console.error("Não foi possível iniciar todos os módulos da aplicação.");
}
