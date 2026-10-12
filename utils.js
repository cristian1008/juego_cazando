function generarAleatorio(min, max){
    let ramdom=Math.random();
    let numero=ramdom*(max-min);
    let numeroEntero=Math.ceil(numero);
    numeroEntero=numeroEntero+min;
    return numeroEntero;
}

function mostrarEnSpan(idSpan, valor){

    let cmpVida = document.getElementById(idSpan);
    cmpVida.textContent=valor;

}