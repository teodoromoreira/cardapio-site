const dias = ["segunda", "terca", "quarta", "quinta", "sexta"];

function carregarCardapio() {
    dias.forEach(dia => {
        const dados = JSON.parse(localStorage.getItem("cardapio-" + dia)) || [];

        const elementos = document.querySelectorAll(`.texto[data-dia="${dia}"]`);

        elementos.forEach((el, i) => {
            el.innerText = dados[i] || "-";
        });
    });
}

window.addEventListener("load", carregarCardapio);