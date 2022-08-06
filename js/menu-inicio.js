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