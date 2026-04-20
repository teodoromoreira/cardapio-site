// BOTÃO VOLTAR AO TOPO
const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {
    botaoTopo.style.display = window.scrollY > 200 ? "block" : "none";
});

botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// CONFIG
const dias = ["segunda", "terca", "quarta", "quinta", "sexta"];
const tipos = ["light", "gogreen", "bonapetit", "allgourmet"];
const cards = document.querySelectorAll(".card");

// 🔥 PADRÃO DE CORES (corrigido)
const specialClassMap = {
    "light": "light",
    "gogreen": "gogreen",
    "bonapetit": "bonapetit",
    "all gourmet": "gourmet",
    "allgourmet": "gourmet"
};

// 🔥 FORMATA LINHA (mantém cores)
function formatLine(line) {
    const trimmed = line.trim();
    if (!trimmed) return "";

    const match = trimmed.match(/^(.+?)\s*:\s*(.+)$/);

    if (!match) {
        return `<li>${trimmed}</li>`;
    }

    const label = match[1].toLowerCase().trim();
    const text = match[2].trim();

    const cssClass = specialClassMap[label];

    if (cssClass) {
        return `<li><span class="${cssClass}">${match[1]}:</span> ${text}</li>`;
    }

    return `<li>${trimmed}</li>`;
}


// CARREGAR INPUTS
function carregarInputs() {
    dias.forEach(dia => {
        const textarea = document.getElementById("adm-" + dia);
        if (!textarea) return;

        const salvo = localStorage.getItem("cardapio-" + dia);
        textarea.value = salvo ?? menuDefaults[dia];
    });
}

// FECHAR ADMIN
function fecharAdmin() {
    painel.classList.remove("ativo");
}

// 🔥 DESTAQUE DO DIA (CORRIGIDO)
function highlightTodayCard() {
    const hoje = new Date().getDay();
    if (hoje < 1 || hoje > 5) return;

    const id = dias[hoje - 1];
    const cardHoje = document.getElementById(id);
    if (!cardHoje) return;

    // remove badge antigo
    document.querySelectorAll(".badge-hoje").forEach(b => b.remove());

    cards.forEach(c => {
        c.classList.remove("ativo");
        c.classList.add("inativo");
    });

    cardHoje.classList.remove("inativo");
    cardHoje.classList.add("ativo");

    const badge = document.createElement("span");
    badge.innerText = "⭐ HOJE";
    badge.className = "badge-hoje";

    cardHoje.appendChild(badge);

    setTimeout(() => {
        cardHoje.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 300);
}

// CLICK NOS CARDS
cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(c => {
            c.classList.remove("ativo");
            c.classList.add("inativo");
        });

        card.classList.remove("inativo");
        card.classList.add("ativo");
    });
});

// ANIMAÇÃO SCROLL
window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const posicao = card.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 50) {
            card.classList.add("apareceu");
        }
    });
});

function carregarCardapio() {
    document.querySelectorAll(".texto").forEach(el => {
        const dia = el.dataset.dia;
        const tipo = el.dataset.tipo;

        const valor = localStorage.getItem(`${dia}-${tipo}`);
        if (valor) el.textContent = valor;
    });
}

window.addEventListener("load", carregarCardapio);