// variável principal
let contador = 0;

// carregar valor salvo ao abrir a página
if (localStorage.getItem("contador") !== null) {
    contador = parseInt(localStorage.getItem("contador"));
    atualizarDisplay();
}

// atualiza o HTML e salva
function atualizarDisplay() {
    document.getElementById("contador").innerText = contador;
    localStorage.setItem("contador", contador);
}

// incrementa
function incrementar() {
    contador += 1;
    atualizarDisplay();
}

// decrementa
function decrementar() {
    contador -= 1;
    atualizarDisplay();
}

// reseta
function resetar() {
    contador = 0;
    atualizarDisplay();
}
