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
let puntaje=0;
let vidas=3;
let velocidadCaida=200;
let intervalo;

function dibujarRectangulo(x, y, ancho, alto, color){

    ctx.fillStyle=color;
    ctx.fillRect(x, y, ancho, alto);

}

function iniciar(){

    intervalo=setInterval(bajarLimon, velocidadCaida);
    mostrarEnSpan("tiempo", velocidadCaida);
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
    if(limonY+ALTO_LIMON==canvas.height-ALTO_PISO){
        vidas=vidas-1;
        mostrarEnSpan("vidas", vidas);
    }
    if(vidas==0){
        alert("GAME OVER");
    }
}


function actualizarPantalla(){
    dibujarSuelo(0, canvas.height-ALTO_PISO);
    dibujarPersonaje(personajeX, personajeY);
    dibujarLimon(limonX, limonY);
}

function bajarLimon(){
    limonY=limonY+10;
    actualizarPantalla();
    detectarAtrapado();
    detectarPiso();
}

function detectarAtrapado(){
    if(limonX+ANCHO_LIMON>personajeX && limonX<personajeX+ANCHO_PERSONAJE && limonY+ALTO_LIMON>personajeY && limonY<personajeY+ALTO_PERSONAJE){
        puntaje=puntaje+1;
        mostrarEnSpan("puntos", puntaje);

        if(puntaje==3){
            velocidadCaida=150;
            mostrarEnSpan("tiempo", velocidadCaida);
            clearInterval(intervalo);
            intervalo=setInterval(bajarLimon, velocidadCaida);

        }else if(puntaje==6){
            velocidadCaida=100;
            mostrarEnSpan("tiempo", velocidadCaida);
            clearInterval(intervalo);
            intervalo=setInterval(bajarLimon, velocidadCaida);
        }
        else if(puntaje==10){
            alert("GANADOR YA TIENE LOS LIMONES SUFUCIENTES PARA EL TEQUILA VE A DISFRUTAR!!");
        }

    }
}
