"use strict"

class Tablero {

    constructor(ctx, widthCanvas, heightCanvas, filas, columnas, fill) {
        this.ctx = ctx;
        this.filas = filas;
        this.columnas = columnas;
        this.matriz = [];
        this.widthCanvas = widthCanvas;
        this.heightCanvas = heightCanvas;
        this.fill = fill;
        this.area = [];
    }

    draw(){

        let x = this.widthCanvas/2;
        let y = this.heightCanvas/2;

        let tamFicha = 60;

        let widthTotal = tamFicha*this.columnas;
        let heightTotal = tamFicha * this.filas;

        let movX = widthTotal/2;
        let movY = heightTotal/2 - (tamFicha/2);

        let posX = x-movX;
        let posY = y-movY;

        for(let f=0; f<this.filas; f++){

            let auxX = posX;

            for(let c = 0; c<this.columnas; c++){

                if(this.area.length<this.columnas+1){
                    if(this.area.length === 0){
                        this.area[c]=posX;
                        this.area[c+1]=posX+tamFicha;
                    }else{
                        this.area[c+1]=posX+tamFicha;
                    }
                }

                this.ctx.fillStyle = this.fill;
                this.ctx.fillRect(posX, posY, tamFicha, tamFicha);
                this.ctx.lineWidth = 5;
                this.ctx.strokeRect(posX, posY, tamFicha, tamFicha);

                posX=posX+tamFicha;
            }

            posX = auxX;

            posY = posY + tamFicha;
        }

        // Dibujar los círculos recortados
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
        this.ctx.globalCompositeOperation = 'source-over';

    }

    getColumn(ficha){
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

    }

}