const luzes = document.querySelectorAll(".luz");
let indiceAtual = 0;

function trocarLuz() {
  // Remove a classe "ativo" de todas as luzes
  luzes.forEach((luz) => luz.classList.remove("ativo"));

  // Adiciona a classe "ativo" à luz atual
  luzes[indiceAtual].classList.add("ativo");

  // Define o próximo índice (circular entre 0, 1 e 2)
  indiceAtual = (indiceAtual + 1) % luzes.length;
}

// Alternar as luzes a cada 1 segundo
setInterval(trocarLuz, 1000);
