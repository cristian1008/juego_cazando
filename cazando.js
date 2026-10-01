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


function iniciarJuego(){

    graficarGato(gatoX, gatoY);
    graficarComida(comidaX, comidaY);

}

function graficarGato(X, Y){

    ctx.fillStyle="#ecc100";
    ctx.fillRect(X, Y, ANCHO_GATO, ALTO_GATO);

}

function graficarComida(X, Y){

    ctx.fillStyle="#e70404";
    ctx.fillRect(X, Y, ANCHO_COMIDA, ALTO_COMIDA);

}