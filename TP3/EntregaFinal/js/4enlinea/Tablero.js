"use strict"

class Tablero {

    constructor(ctx, width, height, filas, columnas) {
        this.ctx = ctx;
        this.filas = filas;
        this.columnas = columnas;
        this.matriz = [];
    }

    draw(){

        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }

}

// Exporta la clase Tablero para que pueda ser importada en otros archivos
export default Tablero;