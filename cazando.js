let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");


function graficarGato(){

    ctx.fillStyle="#ecc100";
    ctx.fillRect(canvas.width/2, canvas.height-60, 40, 60);

}