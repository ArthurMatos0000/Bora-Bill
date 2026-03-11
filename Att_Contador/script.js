let valor = 0;

const contador = document.getElementById("contador");
const btnAumentar = document.getElementById("btnAumentar");
const btnDiminuir = document.getElementById("btnDiminuir");

function atualizarTela() {
  contador.textContent = valor;
}

btnAumentar.addEventListener("click", function () {
  valor++;
  atualizarTela();
});

btnDiminuir.addEventListener("click", function () {
  if (valor > 0) { 
    valor--;
    atualizarTela();
  }
});