document.addEventListener("DOMContentLoaded", function () {
    const estrellasContainer = document.getElementById('estrellas');
    const numeroEstrellas = 100; // Número de estrellas

    for (let i = 0; i < numeroEstrellas; i++) {
        const estrella = document.createElement('div');
        estrella.classList.add('estrella');

        // Posición aleatoria
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        estrella.style.left = `${x}px`;
        estrella.style.top = `${y}px`;

        // Retraso aleatorio para la animación
        const delay = Math.random() * 2;
        estrella.style.animationDelay = `${delay}s`;

        estrellasContainer.appendChild(estrella);
    }
});