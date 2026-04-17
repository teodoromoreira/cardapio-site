// BOTÃO VOLTAR AO TOPO
const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});

botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// SELECIONA TODOS OS CARDS
const cards = document.querySelectorAll(".card");


// CLIQUE NOS CARDS (EFEITO POPUP + APAGAR OUTROS)
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


// ANIMAÇÃO AO ROLAR (CARDS APARECENDO)
const sections = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const posicao = sec.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 50) {
            sec.classList.add("apareceu");
        }
    });
});


// 🔥 DESTAQUE AUTOMÁTICO DO DIA (EFEITO POPUP AO ABRIR)
const hoje = new Date().getDay();
const dias = ["segunda", "terca", "quarta", "quinta", "sexta"];

if (hoje >= 1 && hoje <= 5) {
    const id = dias[hoje - 1];
    const cardHoje = document.getElementById(id);

    if (cardHoje) {

        // deixa todos apagados
        cards.forEach(c => {
            c.classList.remove("ativo");
            c.classList.add("inativo");
        });

        // ativa o card do dia
        cardHoje.classList.remove("inativo");
        cardHoje.classList.add("ativo");

        // CRIAR BADGE "HOJE" 
        const badge = document.createElement("span");
        badge.innerText = "⭐ HOJE";
        badge.classList.add("badge-hoje");

        cardHoje.appendChild(badge);

        // centraliza na tela
        cardHoje.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}