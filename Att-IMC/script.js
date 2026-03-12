const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const calcularBtn = document.getElementById("calcularBtn");
const resultadoDiv = document.getElementById("resultado");
const valorIMC = document.getElementById("valorIMC");
const classificacao = document.getElementById("classificacao");

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return { texto: "Abaixo do peso", classe: "abaixo" };
    } else if (imc < 24.9) {
        return { texto: "Peso normal", classe: "normal" };
    } else if (imc < 29.9) {
        return { texto: "Sobrepeso", classe: "sobrepeso" };
    } else if (imc < 34.9) {
        return { texto: "Obesidade grau I", classe: "obesidade1" };
    } else if (imc < 39.9) {
        return { texto: "Obesidade grau II", classe: "obesidade2" };
    } else {
        return { texto: "Obesidade grau III", classe: "obesidade3" };
    }
}

calcularBtn.addEventListener("click", () => {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        return;
    }

    const imc = calcularIMC(peso, altura);
    const resultado = classificarIMC(imc);

    resultadoDiv.className = "resultado";
    resultadoDiv.classList.add(resultado.classe);
    resultadoDiv.classList.remove("oculto");

    valorIMC.textContent = `IMC: ${imc.toFixed(2)}`;
    classificacao.textContent = resultado.texto;
});