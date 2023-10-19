"use strict"

class ficha{
    constructor(posX, posY, fill, context, radius){
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.context = context;
        this.radius = radius;
    }

    setFill(fill){
        this.fill = fill
    }

    getPosition(){
        return{
            x: this.getPosX(),
            y: this.getPosY()
        };
    }

    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }
    getFill(){
        return this.Fill;
    }

    draw(){
        this.context.fillStyle = this.fill;
    }
}