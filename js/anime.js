const cajaoculta = document.querySelector('.cajaoculta');

// Crear la animación con anime.js
const animacion = anime({
  targets: cajaoculta,
  translateX: [0 , 1200], // Mueve la cajaoculta 200px hacia la derecha
  duration: 60000 // Duración de la animación: 1 segundo
})
animacion.play();