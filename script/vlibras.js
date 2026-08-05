// Function para injetar o VLibras globalmente
function initVLibras() {
  // 1. Cria a estrutura HTML que o widget precisa
  const vlibrasContainer = document.createElement('div');
  vlibrasContainer.setAttribute('vw', '');
  vlibrasContainer.classList.add('enabled');

  vlibrasContainer.innerHTML = `
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  `;

  // 2. Anexa a estrutura no final do <body>
  document.body.appendChild(vlibrasContainer);

  // 3. Cria e anexa o script oficial
  const script = document.createElement('script');
  script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
  script.async = true;

  // 4. Inicializa o widget assim que o script terminar de carregar
  script.onload = () => {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  };

  // Anexa o script ao final do <body>
  document.body.appendChild(script);
}

// Executa a função quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVLibras);
} else {
  initVLibras();
}