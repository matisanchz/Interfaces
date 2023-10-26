"use strict"

// Importa la clase Ficha desde Ficha.js
import Ficha from './Ficha.js';
import Tablero from './Tablero.js';

let canvas = document.querySelector('canvas');
canvas.width = 1370;
canvas.height = 600;

let ctx = canvas.getContext('2d');

ctx.stroke();

let width = canvas.width;
let height = canvas.height;

let isMouseDown = false;
let lastClickedFigure = null;

var filas = 7;
var columnas = 6;
var tam_ficha = 50;
let tablero = null;
var margen_tablero = height - filas*tam_ficha;

let posicionYFichasJ1 = (filas-1/2)*tam_ficha + margen_tablero;
let posicionYFichasJ2 = (filas-1/2)*tam_ficha + margen_tablero;

let fichasJ1 = [];
let fichasJ2 = [];

let fichas = [];

function drawFigure(){
    clearCanvas();
    tablero.draw();
    for(let i = 0; i<fichas.length; i++){
        fichas[i].draw();
    }

    drawTimer();
}

function clearCanvas(){
    ctx.fillStyle = '#F8F8FF';
    ctx.fillRect(0, 0, width, height);
}

//Se instancian las fichas
function crearFichas(){
    for(let i = 0; i<21; i++){
        let radio = 22;
        let ficha = new Ficha(50, posicionYFichasJ1, "red", ctx, radio);
        posicionYFichasJ1 = posicionYFichasJ1 - radio;
        fichas.push(ficha);

    }

    for(let i = 0; i<21; i++){
        let radio = 22;
        let ficha = new Ficha(canvas.width-50, posicionYFichasJ2, "blue", ctx, radio);
        posicionYFichasJ2 = posicionYFichasJ2 - radio;
        fichas.push(ficha);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    crearFichas();
    crearTablero();
    drawFigure();
})

function crearTablero(){
    tablero = new Tablero(ctx, width, height, filas, columnas, "red");
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

function onMouseUp(e){
    isMouseDown = false;
    if(lastClickedFigure!=null){
        if(!isOnArea(lastClickedFigure)){
            lastClickedFigure.setOrigenPosition();
            drawFigure();
        }else{
            lastClickedFigure.setPosX(tablero.getColumn(lastClickedFigure));
            drawFigure();
            movePixel(lastClickedFigure);
        }
    } 
}

function movePixel(figure){
    setTimeout(() => {
        let y = figure.getPosY();
        figure.setPosY(y+4);
        drawFigure();
        movePixel(figure);
    },0.1);
}

function isOnArea(figure){
    let x = width/2;
    let y = height/2;

    let tamFicha = 60;

    let widthTotal = tamFicha*columnas;
    let heightTotal = tamFicha * filas;

    let movX = widthTotal/2;
    let movY = heightTotal/2 - (tamFicha/2);

    let posXIzq = x-movX;
    let posXDer = posXIzq + (columnas*60);
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

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);

