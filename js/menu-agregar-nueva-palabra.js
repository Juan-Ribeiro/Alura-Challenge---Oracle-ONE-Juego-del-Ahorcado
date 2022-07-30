areaTextoAgregarPalabra.addEventListener("keypress", function (e) {
    let tecla = e.keyCode ? e.keyCode : e.charCode;
    if (!((tecla > 64 && tecla < 91) || (tecla > 96 && tecla < 123))) {
        e.preventDefault();
    }
});

botonVolverAlMenu.addEventListener("click", function (e) {
    e.preventDefault();

    modificarMensajeEstadoDePalabraAgregada("");
    seccionAgregarPalabra.classList.add("ocultar");
    seccionMenuInicio.classList.remove("ocultar");
});

botonGuardarNuevaPalabra.addEventListener("click", function (e) {
    e.preventDefault();

    let palabraNueva = areaTextoAgregarPalabra.value.toUpperCase();

    if (validarPalabra(palabraNueva)) {
        listaDePalabrasSecretas.push(palabraNueva);
        modificarMensajeEstadoDePalabraAgregada(`Se ha agregado la palabra "${palabraNueva}" correctamente.`);
    } else {
        modificarMensajeEstadoDePalabraAgregada(`La palabra "${palabraNueva}" ya existe en el juego.`);
    }

    areaTextoAgregarPalabra.value = "";
});

function modificarMensajeEstadoDePalabraAgregada(mensaje) {
    mensajeEstadoDePalabraAgregada.textContent = mensaje;
}

function validarPalabra(palabraNueva) {
    return !listaDePalabrasSecretas.includes(palabraNueva);
}