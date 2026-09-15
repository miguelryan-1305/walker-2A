// Animação suave ao passar o mouse nos cards

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});


// Pequena mensagem no console
console.log("♡ Bem-vindo ao portfólio do Miguel Ryan!");
