function dibujarHorca() {
    let lineaPisoHorca = document.createElement("div");
    let lineaColumnaHorca = document.createElement("div");
    let lineaTechoHorca = document.createElement("div");
    let lineaCuerdaHorca = document.createElement("div");

    lineaPisoHorca.classList.add("linea-horca");
    lineaPisoHorca.style.width = "100%";
    lineaPisoHorca.style.height = "5px";
    lineaPisoHorca.style.top = "100%";

    lineaColumnaHorca.classList.add("linea-horca");
    lineaColumnaHorca.style.left = "25%";
    lineaColumnaHorca.style.height = "100%";
    lineaColumnaHorca.style.width = "4.5px";

    lineaTechoHorca.classList.add("linea-horca");
    lineaTechoHorca.style.bottom = "100%";
    lineaTechoHorca.style.left = "25%";
    lineaTechoHorca.style.width = "50%";
    lineaTechoHorca.style.height = "4.5px";

    lineaCuerdaHorca.classList.add("linea-horca");
    lineaCuerdaHorca.style.bottom = "101%";
    lineaCuerdaHorca.style.left = "73.5%";
    lineaCuerdaHorca.style.width = "4.5px";
    lineaCuerdaHorca.style.height = "calc(100%/6)";


    contenedorHorca.appendChild(lineaPisoHorca);
    contenedorHorca.appendChild(lineaColumnaHorca);
    contenedorHorca.appendChild(lineaTechoHorca);
    contenedorHorca.appendChild(lineaCuerdaHorca);
}


function dibujarCabeza() {
    let circuloCabeza = document.createElement("div");

    circuloCabeza.classList.add("linea-horca");
    circuloCabeza.style.bottom = "102%";
    circuloCabeza.style.left = "62.5%";

    circuloCabeza.style.borderRadius = "50%";
    circuloCabeza.style.border = "5px solid #0A3871";
    circuloCabeza.style.background = "none";

    circuloCabeza.style.height = "17.5%";
    circuloCabeza.style.width = "20%";

    contenedorHorca.appendChild(circuloCabeza);
}

function dibujarTorso() {
    let lineaTorso = document.createElement("div");

    lineaTorso.classList.add("linea-horca");
    lineaTorso.style.height = "30%";
    lineaTorso.style.width = "5px";
    lineaTorso.style.bottom = "103%";
    lineaTorso.style.left = "73.5%";

    contenedorHorca.appendChild(lineaTorso);
}

function dibujarPiernaIzquierda() {
    let lineaPiernaIzquierda = document.createElement("div");

    lineaPiernaIzquierda.classList.add("linea-horca");
    lineaPiernaIzquierda.style.width = "5px";
    lineaPiernaIzquierda.style.height = "20%";
    lineaPiernaIzquierda.style.bottom = "105%";
    lineaPiernaIzquierda.style.left = "67.5%";
    lineaPiernaIzquierda.style.transform = "rotate(30deg)";

    contenedorHorca.appendChild(lineaPiernaIzquierda);
}

function dibujarPiernaDerecha() {
    let lineaPiernaDerecha = document.createElement("div");

    lineaPiernaDerecha.classList.add("linea-horca");
    lineaPiernaDerecha.style.position = "relative";
    lineaPiernaDerecha.style.width = "5px";
    lineaPiernaDerecha.style.height = "20%";
    lineaPiernaDerecha.style.bottom = "125%";
    lineaPiernaDerecha.style.left = "79.5%";
    lineaPiernaDerecha.style.transform = "rotate(-30deg)";


    contenedorHorca.appendChild(lineaPiernaDerecha);
}

function dibujarBrazoIzquierdo() {
    let lineaBrazoIzquierdo = document.createElement("div");

    lineaBrazoIzquierdo.classList.add("linea-horca");
    lineaBrazoIzquierdo.style.position = "relative";
    lineaBrazoIzquierdo.style.width = "5px";
    lineaBrazoIzquierdo.style.height = "20%";
    lineaBrazoIzquierdo.style.bottom = "174%";
    lineaBrazoIzquierdo.style.left = "67.5%";
    lineaBrazoIzquierdo.style.transform = "rotate(30deg)";


    contenedorHorca.appendChild(lineaBrazoIzquierdo);
}

function dibujarBrazoDerecho() {
    let lineaBrazoDerecho = document.createElement("div");

    lineaBrazoDerecho.classList.add("linea-horca");
    lineaBrazoDerecho.style.position = "relative";
    lineaBrazoDerecho.style.width = "5px";
    lineaBrazoDerecho.style.height = "20%";
    lineaBrazoDerecho.style.bottom = "194%";
    lineaBrazoDerecho.style.left = "79.5%";
    lineaBrazoDerecho.style.transform = "rotate(-30deg)";

    contenedorHorca.appendChild(lineaBrazoDerecho);
}