function iniciar() {
    const mensaje = "Feliz San Valentín, Andrea ❤️ Seguí sonriendo, porque si todos vieran <br> tu sonrisa como yo, ningún astronauta volvería a ir a las estrellas.";
    const elemento = document.getElementById("mensaje");
    const musica = document.getElementById("musica");

    musica.play(); // reproduce la canción

    elemento.textContent = "";
    let i = 0;

    function escribir() {
        if (i < mensaje.length) {
            elemento.textContent += mensaje.charAt(i);
            i++;
            setTimeout(escribir, 55);
        }
    }

    escribir();
}

/* Corazones rojos flotando */
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = "24px";
    heart.style.animation = "subir 4s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}, 700);

const style = document.createElement("style");
style.innerHTML = `
@keyframes subir {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-100vh); opacity: 0; }
}
`;
document.head.appendChild(style);

