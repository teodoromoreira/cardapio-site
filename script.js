import { db } from "./firebase.js";
import { doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const dias = ["segunda", "terca", "quarta", "quinta", "sexta"];

function escutarCardapio() {
    dias.forEach(dia => {
        const ref = doc(db, "cardapio", dia);

        onSnapshot(ref, (docSnap) => {
            if (!docSnap.exists()) return;

            const dados = docSnap.data().itens;

            const elementos = document.querySelectorAll(`.texto[data-dia="${dia}"]`);

            elementos.forEach((el, i) => {
                el.innerText = dados[i] || "-";
            });
        });
    });
}

window.addEventListener("load", escutarCardapio);