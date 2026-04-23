const SENHA = "1234";

function logar() {
    const valor = document.getElementById("senha").value;

    if (valor === SENHA) {
        document.getElementById("login").style.display = "none";
        document.getElementById("painel").style.display = "block";
    } else {
        alert("Senha incorreta");
    }
}

function salvarCardapio() {
    const inputs = document.querySelectorAll("input[data-dia]");

    inputs.forEach(input => {
        const dia = input.dataset.dia;
        const tipo = input.dataset.tipo;

        localStorage.setItem(`${dia}-${tipo}`, input.value);
    });

    alert("Salvo com sucesso!");
}

function carregar() {
    const inputs = document.querySelectorAll("input[data-dia]");

    inputs.forEach(input => {
        const dia = input.dataset.dia;
        const tipo = input.dataset.tipo;

        const chave = `${dia}-${tipo}`;
        input.value = localStorage.getItem(chave) || "";
    });
}

window.addEventListener("load", carregar);