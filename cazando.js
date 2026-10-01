let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
const ALTO_GATO=60;
const ANCHO_GATO=40;
const ALTO_COMIDA=50;
const ANCHO_COMIDA=50;
let gatoX=canvas.width/2;
let gatoY=canvas.height-ALTO_GATO;
let comidaX=canvas.width-ANCHO_COMIDA;
let comidaY=canvas.height-ALTO_COMIDA;

function graficarRectangulo(x, y, ancho, alto, color){

    ctx.fillStyle=color;
    ctx.fillRect(x, y, ancho, alto);

}

function iniciarJuego(){

    graficarGato(gatoX, gatoY);
    graficarComida(comidaX, comidaY);

}

function graficarGato(X, Y){


    graficarRectangulo(X, Y, ANCHO_GATO, ALTO_GATO, "#ecc100");

}

function graficarComida(X, Y){

    graficarRectangulo(X, Y, ANCHO_COMIDA, ALTO_COMIDA, "#e70404");

}