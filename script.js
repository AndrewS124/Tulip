document.addEventListener("DOMContentLoaded", function () {
    const estrellasContainer = document.getElementById('estrellas');
    const numeroEstrellas = 100; 

    for (let i = 0; i < numeroEstrellas; i++) {
        const estrella = document.createElement('div');
        estrella.classList.add('estrella');

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        estrella.style.left = `${x}px`;
        estrella.style.top = `${y}px`;

        // animaciion espera
        const delay = Math.random() * 2;
        estrella.style.animationDelay = `${delay}s`;

        estrellasContainer.appendChild(estrella);
    }
});


const petalo1 = document.getElementById('petalo-1');
const petalo2 = document.getElementById('petalo-2');
const petalo3 = document.getElementById('petalo-3');
const mensajeCumpleanos = document.getElementById('mensaje-cumpleanos');
const textoCumpleanos = document.getElementById('texto-cumpleanos');


function obtenerAreasBloqueadas() {
    const tulipan = document.querySelector('.tulipan')?.getBoundingClientRect();
    const spotify = document.querySelector('.spotify-container iframe')?.getBoundingClientRect();

    return [
        tulipan ? { x1: tulipan.left, y1: tulipan.top, x2: tulipan.right, y2: tulipan.bottom } : null,
        spotify ? { x1: spotify.left, y1: spotify.top, x2: spotify.right, y2: spotify.bottom } : null
    ].filter(area => area !== null);
}

function generarPosicionAleatoria() {
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;
    const anchoMensaje = 150; 
    const altoMensaje = 100; 

    let x, y;
    let enAreaProhibida;

    do {
        //  coordenadas aleatorias
        x = Math.floor(Math.random() * (anchoVentana - anchoMensaje));
        y = Math.floor(Math.random() * (altoVentana - altoMensaje));

        // areas bloqueadas
        const areasProhibidas = obtenerAreasBloqueadas();
        enAreaProhibida = areasProhibidas.some(area => 
            x < area.x2 && x + anchoMensaje > area.x1 &&
            y < area.y2 && y + altoMensaje > area.y1
        );

    } while (enAreaProhibida); 

    return { x, y };
}

function mostrarMensaje() {
    const posicion = generarPosicionAleatoria();
    mensajeCumpleanos.style.display = 'block';
    mensajeCumpleanos.style.left = `${posicion.x}px`;
    mensajeCumpleanos.style.top = `${posicion.y}px`;
    textoCumpleanos.textContent = 'Feliz cumpleaños Mamu ✨';
}

petalo1.addEventListener('click', mostrarMensaje);
petalo2.addEventListener('click', mostrarMensaje);
petalo3.addEventListener('click', mostrarMensaje);