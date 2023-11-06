"use strict"

class Tablero {

    constructor(ctx, widthCanvas, heightCanvas, filas, columnas, fill, tamFicha) {
        this.ctx = ctx;
        this.filas = filas;
        this.columnas = columnas;
        this.matriz = this.iniciarMatriz();
        this.widthCanvas = widthCanvas;
        this.heightCanvas = heightCanvas;
        this.fill = fill;
        this.area = [];
        this.image = new Image();
        this.image.src = 'media/imagenes/4-en-linea/casilla.svg';
        this.tableroDibujado = false;
        this.tamFicha = tamFicha;
    }

    iniciarMatriz(){
        let matriz = new Array(this.filas);
        for(let i = 0; i< this.filas; i++){
            matriz[i] = new Array(this.columnas);
        }
        console.log(matriz);
        return matriz;
    }

    draw(){
        if(!this.image.complete){
            this.image.onload = () => {
                this.drawPasamanos();
            };
        }else{
            this.drawPasamanos();
        }
    }

    drawPasamanos(){
        if (!this.tableroDibujado) {
            this.drawTable();
            this.tableroDibujado = true; // Marcar el tablero como dibujado
          }
    }

    drawTable(){

        let x = this.widthCanvas/2;
        let y = this.heightCanvas/2;

        let widthTotal = this.tamFicha*this.columnas;
        let heightTotal = this.tamFicha * this.filas;

        let movX = widthTotal/2;
        let movY = heightTotal/2 - (this.tamFicha/2);

        let posX = x-movX;
        let posY = y-movY;

        for(let f=0; f<this.filas; f++){

            let auxX = posX;

            for(let c = 0; c<this.columnas; c++){

                if(this.area.length<this.columnas+1){
                    if(this.area.length === 0){
                        this.area[c]=posX;
                        this.area[c+1]=posX+this.tamFicha;
                    }else{
                        this.area[c+1]=posX+this.tamFicha;
                    }
                }

                /*this.ctx.fillStyle = this.fill;
                this.ctx.fillRect(posX, posY, tamFicha, tamFicha);
                this.ctx.lineWidth = 5;
                this.ctx.strokeRect(posX, posY, tamFicha, tamFicha);*/

                this.ctx.drawImage(this.image, posX, posY, this.tamFicha, this.tamFicha);
        


                posX=posX+this.tamFicha;
            }

            posX = auxX;

            posY = posY + this.tamFicha;
        }

        /*// Dibujar los círculos recortados
        this.ctx.globalCompositeOperation = 'destination-out';
        posX = x - movX;
        posY = y - movY;
        for (let f = 0; f < this.filas; f++) {
            let auxX = posX;
            for (let c = 0; c < this.columnas; c++) {
                // Guardar el estado actual del contexto
                this.ctx.save();

                // Dibujar un círculo recortado en el cuadrado
                this.ctx.beginPath();
                this.ctx.arc(posX + tamFicha / 2, posY + tamFicha / 2, 22, 0, 2 * Math.PI);
                this.ctx.clip();
                this.ctx.clearRect(posX, posY, tamFicha, tamFicha);

                // Restaurar el estado del contexto para el siguiente cuadrado
                this.ctx.restore();

                posX = posX + tamFicha;
            }
            posX = auxX;
            posY = posY + tamFicha;
        }
        // Restaurar el modo de composición predeterminado
        this.ctx.globalCompositeOperation = 'source-over';*/

    }

    isWinner(posX, posY, jugador, modo){
        return (this.checkHorizontal(posX, modo, jugador) ||
                this.checkVertical(posY, modo, jugador) ||
                this.checkDiagonalUno(posX, posY, modo, jugador) ||
                this.checkDiagonalDos(posX, posY, modo, jugador));
    }

    checkHorizontal(fila, modo, jugador){
        let hayGanador = false
        let col = 0;
        let cant = 0;
        while (col < this.columnas && hayGanador == false) {
            if((this.matriz[fila][col])!==undefined 
                && (this.matriz[fila][col].getJugador() === jugador) 
                && cant < modo) {
                cant++;
            }else{
                cant = 0;
            }
            if (cant === modo) {
                hayGanador = true;
            }
            col++;
      
        }
        return hayGanador;
    }

    checkVertical(col,modo, jugador){
        let hayGanador = false
        let fila = 0;
        let cant = 0;
        while (fila < this.filas && hayGanador == false) {
            if((this.matriz[fila][col])!==undefined 
                && (this.matriz[fila][col].getJugador() === jugador) 
                && cant < modo) {
                cant++;
            }else{
                cant = 0;
            }
            if (cant === modo) {
                hayGanador = true;
            }
            fila++;
        }
        return hayGanador;
    }

    checkDiagonalUno(fila,col,modo,jugador){
        let hayGanador = false;
        let cant=0;
        while (fila>0 && col>0){//llevo fila y columna a la primer posición de la diagonal (arriba a la izquierda)
            fila--;
            col--;
        }
        while (fila < this.filas && col <this.columnas && hayGanador == false) {
            if((this.matriz[fila][col])!==undefined 
                && (this.matriz[fila][col].getJugador() === jugador) 
                && cant < modo) {
                cant++;
            }else{
                cant = 0;
            }
            if (cant == modo) {
                hayGanador = true;
            }
            fila++;
            col++;
        }
        return hayGanador;
    }

    checkDiagonalDos(fila,col,modo,jugador){
        let hayGanador = false;
        let cant=0;
        while (fila>0 && col<columnas-1){//llevo fila y columna a la primer posición de la diagonal (arriba a la derecha)
            fila--;
            col++;
        }
        while (fila < this.filas && col >=0 && hayGanador == false) {
            if((this.matriz[fila][col])!==undefined 
                && (this.matriz[fila][col].getJugador() === jugador) 
                && cant < modo) {
                cant++;
            }else{
                cant = 0;
            }
            if (cant == modo) {
                hayGanador = true;
            }
            
            fila++;
            col--;
        }
        return hayGanador;
    }

    /*getColumnPos(ficha){
        let posX = ficha.getPosX();

        for(let i = 0; i< this.area.length; i++){
            if(i===0){
                if(posX>=this.area[i]&&posX<=this.area[i+1]){
                    return this.area[i] + ((this.area[i+1] - this.area[i])/2);
                }
            }else{
                if(posX>this.area[i]&&posX<=this.area[i+1]){
                    return this.area[i] + ((this.area[i+1] - this.area[i])/2);
                }
            }
            
        }

        return -1;

    }*/

    getColumnPos(pos){
        return this.area[pos] + ((this.area[pos+1] - this.area[pos])/2);
    }

    getColumn(ficha){
        let posX = ficha.getPosX();

        for(let i = 0; i< this.area.length; i++){
            if(i===0){
                if(posX>=this.area[i]&&posX<=this.area[i+1]){
                    return i;
                }
            }else{
                if(posX>this.area[i]&&posX<=this.area[i+1]){
                    return i;
                }
            }
        }

        return -1;

    }

    fillSpace(figure, col){
        for(let i=this.filas-1; i>=0; i--){
            if(this.matriz[i][col]===null||this.matriz[i][col]===undefined){
                this.matriz[i][col] = figure;
                return i;
            }
        }
        return -1;
    }

    getMatriz(){
        return this.matriz;
    }

    getPosY(){
        let y = this.heightCanvas/2;

        let heightTotal = this.tamFicha * this.filas;

        let movY = heightTotal/2 - (this.tamFicha/2);

        return (y-movY-(this.tamFicha/2));
    }

    /*getHeight(){
        let tamFicha = 60;
        return tamFicha * this.filas;
    }*/

    getHeight(col){
        let fila = this.filas;
        for(let i=this.filas-1; i>=0; i--){
            if(this.matriz[i][col]===null||this.matriz[i][col]===undefined){
                break;
            }else{
                fila = fila - 1;
            }
        }
        return this.tamFicha * fila;
    }

    getImagen(){
        return this.image;
    }
    
    setTableroDibujado(bool){
        this.tableroDibujado = bool;
    }

}