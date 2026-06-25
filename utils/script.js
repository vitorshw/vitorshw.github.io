let indiceAtual = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(indice) {
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("ativo");
    }
    
    
    if (indice >= slides.length) {
        indiceAtual = 0;
    } else if (indice < 0) {
        indiceAtual = slides.length - 1;
    } else {
        indiceAtual = indice;
    }
    
    
    slides[indiceAtual].classList.add("ativo");
}

function mudarSlide(direcao) {
    mostrarSlide(indiceAtual + direcao);
}

setInterval(function() {
    mudarSlide(1);
}, 4000);