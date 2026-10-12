let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
const ALTO_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ALTO_PISO=20;
const ANCHO_PISO=canvas.width;
const ALTO_LIMON=50;
const ANCHO_LIMON=50;
let comidaX=canvas.width/2;
let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTO_PERSONAJE+ALTO_PISO);
let limonX=canvas.width-ANCHO_LIMON;
let limonY=0;
let vidas=3;

function dibujarRectangulo(x, y, ancho, alto, color){

    ctx.fillStyle=color;
    ctx.fillRect(x, y, ancho, alto);

}

function iniciar(){

    dibujarSuelo(0, canvas.height-ALTO_PISO);
    dibujarPersonaje(personajeX, personajeY);
    dibujarLimon(limonX, limonY);

}

function dibujarPersonaje(X, Y){


    dibujarRectangulo(X, Y, ANCHO_PERSONAJE, ALTO_PERSONAJE, "#ecc100");

}

function dibujarLimon(X, Y){

    dibujarRectangulo(X, Y, ANCHO_LIMON, ALTO_LIMON, "#e70404");

}

function dibujarSuelo(X, Y){
    dibujarRectangulo(X, Y, ANCHO_PISO, ALTO_PISO, "#120035");
}

function detectarPiso(){
    if(comidaY+ALTO_COMIDA==canvas.height-ALTO_PISO){
        vidas=vidas-1;
        mostrarEnSpan("vidas", vidas);
    }
    if(vidas==0){
        alert("GAME OVER");
    }
}

