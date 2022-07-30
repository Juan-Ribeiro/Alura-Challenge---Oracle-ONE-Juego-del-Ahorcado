botonIniciarJuego.addEventListener("click", function () {
    visualizarTableroDeJuego();
    iniciarNuevoJuego();
});

botonAgregarNuevaPalabra.addEventListener("click", function () {
    seccionMenuInicio.classList.add("ocultar");
    seccionAgregarPalabra.classList.remove("ocultar");
});

function visualizarTableroDeJuego() {
    seccionMenuInicio.classList.add("ocultar");
    seccionTableroJuego.classList.remove("ocultar");
}

function asignarNuevaPalabraSecretaAlAzar() {
    let numAleatorio = Math.floor(Math.random() * listaDePalabrasSecretas.length);
    palabraSecreta = listaDePalabrasSecretas[numAleatorio];
}

function visualizarContenedorLetrasDePalabraSecreta() {
    for (let i = 0; i < palabraSecreta.length; i++) {
        let contenedorLetra = document.createElement("div");
        let letra = document.createElement("div");
        let rayaLetra = document.createElement("div");

        letra.classList.add("letra-palabra-secreta");
        rayaLetra.classList.add("raya-letra-palabra-secreta");

        contenedorLetra.appendChild(letra);
        contenedorLetra.appendChild(rayaLetra);

        contenedorLetrasPalabraSecreta.appendChild(contenedorLetra);
    }
}