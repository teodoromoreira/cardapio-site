const dias = ["segunda", "terca", "quarta", "quinta", "sexta"];

function salvarCardapio() {
    dias.forEach(dia => {
        const valores = [];

        for (let i = 0; i < 4; i++) {
            const input = document.querySelector(`input[data-dia="${dia}"][data-index="${i}"]`);
            valores.push(input?.value || "");
        }

        localStorage.setItem("cardapio-" + dia, JSON.stringify(valores));
    });

    alert("✅ Cardápio salvo com sucesso!");
}

function carregarAdmin() {
    dias.forEach(dia => {
        const dados = JSON.parse(localStorage.getItem("cardapio-" + dia)) || [];

        for (let i = 0; i < 4; i++) {
            const input = document.querySelector(`input[data-dia="${dia}"][data-index="${i}"]`);
            if (input) input.value = dados[i] || "";
        }
    });
}

window.addEventListener("load", carregarAdmin);

function abrirAdmin() {
    const painel = document.querySelector(".admin-panel");
    painel.classList.toggle("ativo");
}  

const SENHA = "admin123"; // Defina sua senha aqui

function logar() {
    const valor = document.getElementById("senha").value;
    if (valor === SENHA) {
        document.getElementById("login").style.display = "none";
        document.querySelector(".admin-panel").style.display = "block";
    } else {
        alert("Senha incorreta!");
    }
}