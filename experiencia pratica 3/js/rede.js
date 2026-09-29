(() => {
  function iniciarMonitoramentoDeRede() {
    const status = document.querySelector("#status-rede");
    if (!status) return;

    function atualizarStatus() {
      const estaOnline = navigator.onLine;
      status.hidden = estaOnline;
      status.textContent = estaOnline
        ? "Conexão restabelecida."
        : "Você está sem conexão. Os dados preenchidos continuam disponíveis neste navegador.";
    }

    window.addEventListener("online", atualizarStatus);
    window.addEventListener("offline", atualizarStatus);
    atualizarStatus();
  }

  window.rede = { iniciarMonitoramentoDeRede };
})();
