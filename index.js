document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const situacao = document.getElementById("situacao");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const limite = parseFloat(document.getElementById("limitePermitido").value);
        const velocidadeVeiculo = parseFloat(document.getElementById("velocidadeCondutor").value);

        if (Number.isNaN(limite) || Number.isNaN(velocidadeVeiculo)) {
            situacao.innerText = "Velocidade inválida";
        } else if (velocidadeVeiculo <= limite) {
            situacao.innerText = "Situação: Sem multa para o condutor.";
        } else if (velocidadeVeiculo <= limite * 1.2) {
            situacao.innerText = "Situação: Multa leve para o condutor.";
        } else if (velocidadeVeiculo <= limite * 2) {
            situacao.innerText = "Situação: Multa grave para o condutor.";
        } else if (velocidadeVeiculo <= limite * 3) {
            situacao.innerText = "Situação: Multa gravíssima para o condutor.";
        }
    });
});
