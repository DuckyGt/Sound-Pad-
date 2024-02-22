// Função para tocar o som
function tocarSom(id) {
    const som = document.getElementById(id);
    som.currentTime = 0;
    som.play();
  }
  
  // Função para lidar com o clique das teclas
  function adicionarEventoDeClique() {
    const teclas = document.querySelectorAll('.tecla');
  
    teclas.forEach(tecla => {
      tecla.addEventListener('click', function() {
        const idSom = 'som_' + this.classList[1];
        tocarSom(idSom);
      });
    });
  }
  
  // Função para lidar com as teclas do teclado
  function adicionarEventoDeTeclado() {
    const mapeamentoTeclado = {
      'q': 'som_tecla_pom',
      'w': 'som_tecla_clap',
      'e': 'som_tecla_tim',
      'a': 'som_tecla_puff',
      's': 'som_tecla_splash',
      'd': 'som_tecla_toim',
      'z': 'som_tecla_psh',
      'x': 'som_tecla_tic',
      'c': 'som_tecla_tom'
    };
  
    document.addEventListener('keydown', function(event) {
      const tecla = event.key.toLowerCase();
      if (mapeamentoTeclado[tecla]) {
        tocarSom(mapeamentoTeclado[tecla]);
      }
    });
  }
  
  // Inicialização
  function iniciar() {
    adicionarEventoDeClique();
    adicionarEventoDeTeclado();
  }
  
  iniciar();
  