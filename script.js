const luzes = document.querySelectorAll(".luz");
let indiceAtual = 0;
let intervalo;
let tempoTroca = 2000; // Tempo padrão: 2 segundos (ajustável)

// Função para alternar as luzes automaticamente
function trocarLuz() {
  luzes.forEach((luz) => luz.classList.remove("ativo"));
  luzes[indiceAtual].classList.add("ativo");
  indiceAtual = (indiceAtual + 1) % luzes.length;
}

// Inicia o modo automático
function iniciarAutomatico() {
  pararAutomatico(); // Garante que não haverá múltiplos intervalos ativos
  intervalo = setInterval(trocarLuz, tempoTroca);
}

// Para o modo automático
function pararAutomatico() {
  clearInterval(intervalo);
}

// Funções para acender cada luz manualmente
function acenderLuz(cor) {
  pararAutomatico(); // Para o modo automático
  luzes.forEach((luz) => luz.classList.remove("ativo"));
  document.querySelector(`.${cor}`).classList.add("ativo");
}

// Adiciona eventos aos botões
document
  .getElementById("botao-vermelho")
  .addEventListener("click", () => acenderLuz("vermelho"));
document
  .getElementById("botao-amarelo")
  .addEventListener("click", () => acenderLuz("amarelo"));
document
  .getElementById("botao-verde")
  .addEventListener("click", () => acenderLuz("verde"));
document.getElementById("botao-automatico").addEventListener("click", () => {
  tempoTroca = 3000; // Define o intervalo mais lento (ex.: 3 segundos)
  iniciarAutomatico();
});

// Inicia o modo automático ao carregar a página
iniciarAutomatico();
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // Quantidade de partículas
      density: {
        enable: true,
        value_area: 800, // Área em que as partículas se espalham
      },
    },
    color: {
      value: "#ffffff", // Cor das partículas
    },
    shape: {
      type: "circle", // Formato das partículas
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5, // Opacidade das partículas
      random: false,
    },
    size: {
      value: 3, // Tamanho das partículas
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150, // Distância entre partículas conectadas
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2, // Velocidade de movimento
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // Partículas se afastam ao passar o mouse
      },
      onclick: {
        enable: true,
        mode: "push", // Adiciona partículas ao clicar
      },
    },
    modes: {
      repulse: {
        distance: 100, // Distância de "repulsa" ao passar o mouse
      },
      push: {
        particles_nb: 4, // Quantidade de partículas ao clicar
      },
    },
  },
});
