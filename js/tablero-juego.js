botonNuevoJuego.addEventListener("click", function () {
    iniciarNuevoJuego();
});

botonDesistir.addEventListener("click", function () {
    limpiarContenedorTablero();
    ocultarMensajeFinDelJuego();

    document.removeEventListener("keypress", validarTeclaPresionada);

    seccionTableroJuego.classList.add("ocultar");
    seccionMenuInicio.classList.remove("ocultar");
});

function ocultarMensajeFinDelJuego() {
    if (!mensajeFinDelJuego.classList.contains("ocultar")) {
        mensajeFinDelJuego.classList.add("ocultar");
    }
}

function iniciarNuevoJuego() {
    limpiarContenedorTablero();
    reiniciarVariablesDeJuego();
    visualizarContenedorLetrasDePalabraSecreta();

    document.addEventListener("keypress", validarTeclaPresionada);
}

function limpiarContenedorTablero() {
    contenedorLetrasPalabraSecreta.innerHTML = "";
    contenedorLetrasIncorrectas.innerHTML = "";
    contenedorHorca.innerHTML = "";
    mensajeFinDelJuego.innerHTML = "";
    botonDesistir.textContent = "Desistir";
}

function reiniciarVariablesDeJuego() {
    asignarNuevaPalabraSecretaAlAzar();
    ocultarMensajeFinDelJuego();
    cantidadDeIntentosFallidos = 0;
    cantidadDeIntentosAcertados = 0;
    letrasIncorrectasIngresadas = "";

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

function terminarJuego(ganaElJuego) {
    mostrarMensaje(ganaElJuego)
    botonDesistir.textContent = "Volver al menú de inicio";
    document.removeEventListener("keypress", validarTeclaPresionada);
}

function mostrarMensaje(ganaElJuego) {
    mensajeFinDelJuego.classList.remove("ocultar");
    mensajeFinDelJuego.style.display = "flex";
    mensajeFinDelJuego.style.alignSelf = "center";

    ganaElJuego ?
        mensajeFinDelJuego.textContent = "Ganaste, ¡felicidades!" :
        mensajeFinDelJuego.textContent = `¡Fin del juego! La palabra era: ${palabraSecreta}`;
}

function mostrarMensajeDeVictoria() {
    mensajeFinDelJuego.classList.remove("ocultar");
    mensajeFinDelJuego.textContent = "Ganaste, ¡felicidades!";
    botonDesistir.textContent = "Volver al menú de inicio";
}

function validarTeclaPresionada(eventoTecla) {
    eventoTecla.preventDefault();

    let teclaPresionada = eventoTecla.key.toUpperCase();

    if (!letrasAdmitidas.includes(teclaPresionada)) {
        return;
    }

    if (!palabraSecreta.includes(teclaPresionada) && !letrasIncorrectasIngresadas.includes(teclaPresionada)) {
        letrasIncorrectasIngresadas += teclaPresionada;
        cantidadDeIntentosFallidos++;
        agregarLetraIncorrectaATabla(teclaPresionada);
        dibujarAhorcado(cantidadDeIntentosFallidos);

        if (cantidadDeIntentosFallidos >= 7) {
            terminarJuego(false);
        }
        return;
    }

    if (palabraSecreta.includes(teclaPresionada) && !letrasCorrectasIngresadas.includes(teclaPresionada)) {
        letrasCorrectasIngresadas += teclaPresionada;
        agregarLetraCorrectaATabla(teclaPresionada);

        if (cantidadDeIntentosAcertados === palabraSecreta.length) {
            terminarJuego(true);
        }
    }
}

function agregarLetraCorrectaATabla(letra) {
    let indices = [];
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            indices.push(i);
        }
    }

    cantidadDeIntentosAcertados += indices.length;

    let letraActual;
    for (let i = 0; i < indices.length; i++) {
        letraActual = contenedorLetrasPalabraSecreta.childNodes[indices[i]];
        letraActual.firstChild.textContent = palabraSecreta[indices[i]];
    }
}

function agregarLetraIncorrectaATabla(letra) {
    let nuevaLetraIncorrectaHTML = document.createElement("textarea");

    nuevaLetraIncorrectaHTML.textContent = letra;
    nuevaLetraIncorrectaHTML.setAttribute("readonly", true);
    nuevaLetraIncorrectaHTML.classList.add("letra-incorrecta");

    contenedorLetrasIncorrectas.appendChild(nuevaLetraIncorrectaHTML);
}


function dibujarAhorcado() {
    switch (cantidadDeIntentosFallidos) {
        case 1:
            dibujarHorca();
            return;
        case 2:
            dibujarCabeza();
            return;
        case 3:
            dibujarTorso();
            return;
        case 4:
            dibujarPiernaIzquierda();
            return;
        case 5:
            dibujarPiernaDerecha();
            return;
        case 6:
            dibujarBrazoIzquierdo();
            return;
        case 7:
            dibujarBrazoDerecho();
            terminarJuego();
    }
}