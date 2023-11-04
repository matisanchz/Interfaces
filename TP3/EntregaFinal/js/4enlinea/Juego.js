"use strict"

let canvas = document.querySelector('canvas');
canvas.width = 1370;
canvas.height = 600;

let ctx = canvas.getContext('2d');

//ctx.stroke();

 // Carga la imagen de fondo


let width = canvas.width;
let height = canvas.height;

let isMouseDown = false;
let lastClickedFigure = null;

let firstTimeCharging = true;

let filas = 0;
let columnas = 0;
let tam_ficha = 0;
let num_ganador = 0;
let radio = 0;
let tablero = null;
let margen_tablero = height - filas*tam_ficha;

let fichaJ1 = "";
let fichaJ2 = "";

let posicionYFichasJ1 = (filas-1/2)*tam_ficha + margen_tablero;
let posicionYFichasJ2 = (filas-1/2)*tam_ficha + margen_tablero;

let fichasJ1 = [];
let fichasJ2 = [];

let fichas = [];

function drawFigure(){
    clearCanvas();
    for(let i = 0; i<fichas.length; i++){
        if(firstTimeCharging){
            setTimeout(() => {
                fichas[i].draw();
            },i * 20);
        }else{
            fichas[i].draw();
        }
        
    }
    firstTimeCharging = false;
    tablero.setTableroDibujado(false);
    tablero.draw();
    drawTimer();
}

function drawMap(){
    let backgroundImage = new Image();
    backgroundImage.src = 'media/imagenes/4-en-linea/sas.svg'; // Reemplaza 'tu_imagen_de_fondo.jpg' con la ruta de tu imagen.
   
    backgroundImage.onload = function() {
        // Dibuja la imagen de fondo en el lienzo
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        
        // Dibuja un cuadrado en el lienzo
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Relleno rojo semitransparente
        ctx.fillRect(100, 100, 200, 200); // Cambia las coordenadas y dimensiones según tus necesidades
    };
}

function clearCanvas(){
    ctx.fillStyle = '#F8F8FF';
    ctx.fillRect(0, 0, width, height);
    //drawMap();
}

//Se instancian las fichas
function crearFichas(){
    for(let i = 0; i<15; i++){
        let ficha = new Ficha(50, posicionYFichasJ1, "red", ctx, radio, 1, fichaJ1);
        posicionYFichasJ1 = posicionYFichasJ1 - radio;
        fichas.push(ficha);

    }

    for(let i = 0; i<15; i++){
        let ficha = new Ficha(canvas.width-50, posicionYFichasJ2, "blue", ctx, radio, 2, fichaJ2);
        posicionYFichasJ2 = posicionYFichasJ2 - radio;
        fichas.push(ficha);
    }
}

let play = document.getElementById('play-game');

play.addEventListener('click', function(e){
    let div = document.querySelector(".game-menu");
    div.classList.toggle("none");
    canvas.classList.toggle("pointer-events");
    inicializar();
});

function inicializar(){
    configurarJuego();
    configurarJugadores();
    crearFichas();
    crearTablero();
    drawFigure();
}

function configurarJugadores(){
    fichaJ1 = document.getElementById("fichaJ1").value;
    fichaJ2 = document.getElementById("fichaJ2").value;
}

//Configurarmos las variables del juego
function configurarJuego() {
    let select = elegirModo();
    console.log(select);
    filas = select[0];
    columnas = select[1];
    num_ganador = select[2];
    tam_ficha = select[3];
    radio = select[4];
}

//Chequear el valor del tam_ficha
function elegirModo(){
    let modo = document.getElementById("game-mode").value;
    let var_tablero = [];
    let filas, columnas, numero_ganador;
    
    if (modo == 4) {
        filas = 6;
        var_tablero.push(filas);
        columnas = 7;
        var_tablero.push(columnas);
        numero_ganador = 4;
        var_tablero.push(numero_ganador);
        tam_ficha = 85;
        var_tablero.push(tam_ficha);
        radio = 35;
        var_tablero.push(radio);

    } else if (modo == 5) {
        filas = 7;
        var_tablero.push(filas);
        columnas = 8;
        var_tablero.push(columnas);
        numero_ganador = 5;
        var_tablero.push(numero_ganador);
        tam_ficha = 58;
        var_tablero.push(tam_ficha);
        radio = 20;
        var_tablero.push(radio);

    } else if (modo == 6) {
        filas = 8;
        var_tablero.push(filas);
        columnas = 9;
        var_tablero.push(columnas);
        numero_ganador = 6;
        var_tablero.push(numero_ganador);
        tam_ficha = 49;
        var_tablero.push(tam_ficha);
        radio = 16;
        var_tablero.push(radio);

    } else if (modo == 7) {
        filas = 9;
        var_tablero.push(filas);
        columnas = 10;
        var_tablero.push(columnas);
        numero_ganador = 7;
        var_tablero.push(numero_ganador);
        tam_ficha = 45;
        var_tablero.push(tam_ficha);
        radio = 15.5;
        var_tablero.push(radio);
    } 

    return var_tablero;
  }

document.addEventListener('DOMContentLoaded', function(){

})

function crearTablero(){
    tablero = new Tablero(ctx, width, height, filas, columnas, "green", tam_ficha);
}

function drawTimer(){

    let posicionY = height/2 - 250;
    let posicionX = width/2 - 250;

    ctx.font = "30px Roboto";  // Define la fuente y el tamaño de la letra
    ctx.fillStyle = "black";   // Define el color del texto

    // Dibuja la frase en el canvas
    ctx.fillText("Tiempo restante: ", posicionX, posicionY);
}

function onMouseDown(e){
    isMouseDown = true;

    if(lastClickedFigure != null){
        lastClickedFigure.setResaltado(false);
        lastClickedFigure = null;
    }

    let ClientRect = canvas.getBoundingClientRect();

    var scaleX = canvas.width / ClientRect.width;
    var scaleY = canvas.height / ClientRect.height;

    let x =  (e.clientX - ClientRect.left) * scaleX;
    let y = (e.clientY - ClientRect.top) * scaleY;

    let clickFig = findClickedFigure(x , y ); //coordenadas x e y dentro del canvas

    if(clickFig!=null){
        clickFig.setResaltado(true);
        lastClickedFigure = clickFig;
    }
    drawFigure();
}

function findClickedFigure(x, y){
    for(let i = fichas.length-1; i >= 0; i--){
        const element = fichas[i];
        if(element.isPointInside(x, y)){
            return element;
        }
    }
}

function mjeAlert(){
    alert('Termino el juego');
}

function onMouseUp(e){
    isMouseDown = false;
    if(lastClickedFigure!=null){
        if(!isOnArea(lastClickedFigure)){
            lastClickedFigure.setOrigenPosition();
            drawFigure();
        }else{
            let posColumn = tablero.getColumn(lastClickedFigure);
            let movimiento = tablero.getHeight(posColumn);
            lastClickedFigure.setResaltado(false);
            let posRow = tablero.fillSpace(lastClickedFigure, posColumn);
            if(posRow>=0){
                lastClickedFigure.setDisable(true);
                lastClickedFigure.setPosX(tablero.getColumnPos(posColumn));
                lastClickedFigure.setPosY(tablero.getPosY());
                drawFigure();
                console.log(posRow);
                console.log(posColumn);
                dropFigure(lastClickedFigure, (lastClickedFigure.getPosY() + movimiento), posRow, posColumn);
                /*if(tablero.isWinner(posRow, posColumn, lastClickedFigure.getJugador())){
                    mjeAlert();
                }*/
            }else{
                lastClickedFigure.setOrigenPosition();
                drawFigure();
            }
        }
    } 
}

function dropFigure(figure, height, posRow, posColumn){
    setTimeout(() => {
        if(figure.getPosY()<height){
            let y = figure.getPosY();
            figure.setPosY(y+2);
            drawFigure();
            dropFigure(figure, height, posRow, posColumn);
        }else{
            if(tablero.isWinner(posRow, posColumn, figure.getJugador(), num_ganador)){
                mjeAlert();
            }
        }
    },1);
}

function isOnArea(figure){
    let x = width/2;
    let y = height/2;

    let widthTotal = tam_ficha*columnas;
    let heightTotal = tam_ficha * filas;

    let movX = widthTotal/2;
    let movY = heightTotal/2 - (tam_ficha/2);

    let posXIzq = x-movX;
    let posXDer = posXIzq + (columnas*tam_ficha);
    let posYAbajo = y-movY;

    return (figure.getPosX() > posXIzq && 
            figure.getPosX() < posXDer)
            && figure.getPosY() < posYAbajo;
}

function onMouseMove(e){

    let ClientRect = canvas.getBoundingClientRect();

    var scaleX = canvas.width / ClientRect.width;
    var scaleY = canvas.height / ClientRect.height;

    let x = (e.clientX - ClientRect.left) * scaleX;
    let y = (e.clientY - ClientRect.top) * scaleY;
    
    if(isMouseDown && lastClickedFigure != null){
        lastClickedFigure.setPosition(x, y);
        drawFigure();
    }
}

canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mouseup', onMouseUp);
canvas.addEventListener('mousemove', onMouseMove);

function disableEvents(){
    canvas.removeEventListener('mousedown', onMouseDown);
    canvas.removeEventListener('mouseup', onMouseUp);
    canvas.removeEventListener('mousemove', onMouseMove);
}

function enableEvents(){
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mousemove', onMouseMove);
}
