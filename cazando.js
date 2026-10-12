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

function dibujarRectangulo(x, y, ancho, alto, color){

    ctx.fillStyle=color;
    ctx.fillRect(x, y, ancho, alto);

}

function iniciarJuego(){

    dibujarGato(gatoX, gatoY);
    dibujarComida(comidaX, comidaY);

}

function dibujarGato(X, Y){


    dibujarRectangulo(X, Y, ANCHO_GATO, ALTO_GATO, "#ecc100");

}

function dibujarComida(X, Y){

    dibujarRectangulo(X, Y, ANCHO_COMIDA, ALTO_COMIDA, "#e70404");

}

function moverIzquierda(){
    gatoX=gatoX-10;
    actualizarPantalla();
    detectarColision();
}

function moverDerecha(){
    gatoX=gatoX+10;
    actualizarPantalla();
    detectarColision();
}

function moverArriba(){
    gatoY=gatoY-10;
    actualizarPantalla();
    detectarColision();
}

function moverAbajo(){
    gatoY=gatoY+10;
    actualizarPantalla();
    detectarColision();
}

function actualizarPantalla(){
    limpiarCanva();
    dibujarGato(gatoX, gatoY);
    dibujarComida(comidaX, comidaY);
}

function limpiarCanva(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function detectarColision(){
    if(comidaX+ANCHO_COMIDA>gatoX && comidaX<gatoX+ANCHO_GATO && comidaY+ALTO_COMIDA>gatoY && comidaY<gatoY+ALTO_GATO){
        alert("ATRAPADO!!");
    }
}
