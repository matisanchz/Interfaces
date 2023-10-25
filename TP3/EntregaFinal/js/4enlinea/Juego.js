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

var filas = 8;
var columnas = 9;
var tam_ficha = 50;
var margen_tablero = height - filas*tam_ficha;

let posicionYFichasJ1 = (filas-1/2)*tam_ficha + margen_tablero;
let posicionYFichasJ2 = (filas-1/2)*tam_ficha + margen_tablero;

let fichasJ1 = [];
let fichasJ2 = [];

let fichas = [];

function drawFigure(){
    clearCanvas();
    for(let i = 0; i<fichas.length; i++){
        fichas[i].draw();
    }
}

function clearCanvas(){
    ctx.fillStyle = '#F8F8FF';
    ctx.fillRect(0, 0, width, height);
}

//Se instancian las fichas
function crearFichas(){
    for(let i = 0; i<25; i++){
        let radio = 22;
        let ficha = new Ficha(50, posicionYFichasJ1, "green", ctx, radio);
        posicionYFichasJ1 = posicionYFichasJ1 - radio;
        fichas.push(ficha);

    }

    for(let i = 0; i<25; i++){
        let radio = 22;
        let ficha = new Ficha(canvas.width-50, posicionYFichasJ2, "blue", ctx, radio);
        posicionYFichasJ2 = posicionYFichasJ2 - radio;
        fichas.push(ficha);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    crearFichas();
    drawFigure();
})

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
    for(let i = 0; i < fichas.length; i++){
        const element = fichas[i];
        if(element.isPointInside(x, y)){
            return element;
        }
    }
}

function onMouseUp(e){
    isMouseDown = false;
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

