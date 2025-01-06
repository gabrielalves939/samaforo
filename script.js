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
