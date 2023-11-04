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

let fichaJ1 = "";
let fichaJ2 = "";

let posicionYFichasJ1 = 0;
let posicionYFichasJ2 = 0;
let fichasJ1 = [];
let fichasJ2 = [];

let fichas = [];

//Crea el resto de figuras

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
}

//En teoria, limpia el canvas para volver a crear todo

function clearCanvas(){
    ctx.fillStyle = '#F8F8FF';
    ctx.fillRect(0, 0, width, height);
    //drawMap();
}

//Dibuja el fondo de mi canvas, con una imagen

function drawMap(){
    let backgroundImage = new Image();
    backgroundImage.src = 'media/imagenes/4-en-linea/de_dust.svg';
    
    setTimeout(() => {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    },20);
}




//Se instancian las fichas
function crearFichas(){

    let cant_fichas = filas * columnas / 2;

    let posInicial = width/2 + (columnas/2*tam_ficha) + tam_ficha*2;

    for(let i = 0; i<cant_fichas; i++){
        let ficha = new Ficha(posInicial, posicionYFichasJ1, "red", ctx, radio, 1, fichaJ1);
        posicionYFichasJ1 = posicionYFichasJ1 - (radio/4*3);
        fichas.push(ficha);
    }

    for(let i = 0; i<cant_fichas; i++){
        let ficha = new Ficha(canvas.width-posInicial, posicionYFichasJ2, "blue", ctx, radio, 2, fichaJ2);
        posicionYFichasJ2 = posicionYFichasJ2 - (radio/4*3);
        fichas.push(ficha);
    }
}

let play = document.getElementById('play-game');

play.addEventListener('click', function(e){
    let manu = document.querySelector(".game-menu");
    manu.classList.toggle("none");
    canvas.classList.toggle("pointer-events");
    let btns = document.querySelector(".game-playing");
    btns.classList.toggle("none");
    let timer = document.querySelector(".timer");
    timer.classList.toggle("none");
    inicializar();
});

function inicializar(){
    configurarJuego();
    configurarJugadores();
    crearFichas();
    crearTablero();
    drawFigure();
    iniciarTimer();
}

function iniciarTimer(){
    let timer = document.querySelector(".timer");
    let time = timer.firstElementChild;
    console.log(time);
    let status = 200;
    setInterval(() => {
        time.innerHTML = `Tiempo restante: ${status}`;
        if(status >= 0){
            status -= 1;
        }else{
            mjeAlert();
        }
           
    }, 1000);
}

//document.getElementById('restart').addEventListener('click', restart);

document.getElementById('return').addEventListener('click', refresh);

function refresh(){
    location.reload();
}

//Arreglar el restart
function restart(){
    clearCanvas();

    inicializar();
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
    let margen_tablero = height - filas*tam_ficha;
    posicionYFichasJ1 = (filas-1/2)*tam_ficha + margen_tablero;
    posicionYFichasJ2 = (filas-1/2)*tam_ficha + margen_tablero;

    if(num_ganador==5 || num_ganador==6){
        posicionYFichasJ1 = posicionYFichasJ1 - tam_ficha;
        posicionYFichasJ2 = posicionYFichasJ2 - tam_ficha;
    }

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
        tam_ficha = 78;
        var_tablero.push(tam_ficha);
        radio = 30;
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
