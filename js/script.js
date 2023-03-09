const images = [
    { src: "./fotos/Gatsu.png", filter: "contrast(200%)"},
    { src: "./fotos/batman.jpg", filter: "blur(2px)" },
    { src: "./fotos/punisher.webp", filter: "grayscale(100%)" },
    { src: "./fotos/soloLeveling.png", filter: "sepia(50%)" }
];
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let currentIndex = 0;
let audio = document.getElementById("sonidoPagina");
function drawImage() {
    const img = new Image();
    img.src = images[currentIndex].src;
    img.onload = function() {
        ctx.filter = images[currentIndex].filter; // Aplicar el filtro correspondiente
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Dibujar la imagen en el canvas
        audio.play();
    }
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    drawImage();
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    drawImage();
}

let intervalId = setInterval(nextImage, 5000)

leftButton.addEventListener("click", function() {
    clearInterval(intervalId);
    prevImage();    
    intervalId = setInterval(nextImage, 5000);
});

rightButton.addEventListener("click", function() {
    clearInterval(intervalId);
    nextImage();
    intervalId = setInterval(nextImage, 5000);
});

vidAud.addEventListener("click", () => {
    if(vidbg.muted == true){
        vidbg.muted = false;
        vol.src="./fotos/unmute.svg";
    }else{
        vidbg.muted = true;
        vol.src="./fotos/mute.svg"
    }
})