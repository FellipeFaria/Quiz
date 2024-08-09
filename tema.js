const temas = document.querySelectorAll("input.trocatema");
const card = document.querySelector(".card");
const cardFooter = document.querySelector(".card-footer");
const btnEnviar = document.getElementById("enviar");
const body = document.body;

function trocaTema(tema) {
    card.classList.remove("claro-card", "escuro-card");
    cardFooter.classList.remove("claro-card-footer", "escuro-card-footer");
    btnEnviar.classList.remove("claro-button", "escuro-button");
    body.classList.remove("claro-body", "escuro-body");

    if(tema === "tema-claro") {
        card.classList.add("claro-card");
        cardFooter.classList.add("claro-card-footer");
        btnEnviar.classList.add("claro-button");
        body.classList.add("claro-body");
    } else if(tema === "tema-escuro") {
        card.classList.add("escuro-card");
        cardFooter.classList.add("escuro-card-footer");
        btnEnviar.classList.add("escuro-button");
        body.classList.add("escuro-body");
    }
}

temas.forEach(tema => {
    tema.addEventListener("change", (event) => {
        trocaTema(event.target.id);
    });
});
