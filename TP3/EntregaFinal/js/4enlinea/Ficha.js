"use strict"

class Ficha{

    //Se crea el constructor de la ficha, con los parámetros necesarios para poder dibujarla en los diferentes casos que se presenten
    constructor(posX, posY, fill, context, radius, jugador, imageURL){
        this.image = new Image();
        this.image.src = imageURL;
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.context = context;
        this.radius = radius;
        this.resaltado = false;
        this.resaltadoEstilo = 'black';
        this.posOrigenX = posX;
        this.posOrigenY = posY;
        this.disable = false;
        this.jugador = jugador;
        this.cargoImg = false;
    }

    draw(){
        this.context.fillStyle = this.fill;
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.fill();

        if (!this.image.complete) {
            // Espera a que la imagen se cargue antes de dibujarla
            this.image.onload = () => {
                this.context.drawImage(this.getImagen(), this.posX - this.radius, this.posY - this.radius, this.radius * 2, this.radius * 2);
            };
        } else {
            this.context.drawImage(this.getImagen(), this.posX - this.radius, this.posY - this.radius, this.radius * 2, this.radius * 2);
        }
        this.context.closePath();
    }

    /*draw(){
        this.context.fillStyle = this.fill;
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.fill();

       if (this.image != undefined) {
            if (this.cargoImg) {
                this.context.drawImage(this.getImagen(), this.posX - this.radius, this.posY - this.radius, this.radius * 2, this.radius * 2);
            }
            else {
                //this.getImagen().onload = () => {
                this.context.drawImage(this.getImagen(), this.posX - this.radius, this.posY - this.radius, this.radius * 2, this.radius * 2);
                this.cargoImg = true;
            }
        }
        this.context.closePath();
    }*/

    /*draw(){
        this.context.fillStyle = this.fill;
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        if(this.resaltado === true){
            this.context.strokeStyle = this.resaltadoEstilo;
            this.context.lineWidth = 5;
            this.context.stroke();
        }else{
            this.context.strokeStyle = this.resaltadoEstilo;
            this.context.lineWidth = 3;
            this.context.stroke();
        }
        this.context.closePath();
    }*/

    isPointInside(x, y){
        if(!this.disable){
            let _x = this.posX - x;
            let _y = this.posY - y;
            return Math.sqrt(_x * _x + _y * _y) < this.radius;
        }else{
            return false;
        }
    }

    setFill(fill){
        this.fill = fill
    }

    setPosition(x, y){
        this.posX = x;
        this.posY = y;
    }

    setPosX(x){
        this.posX = x;
    }

    setPosY(y){
        this.posY = y;
    }

    setOrigenPosition(){
        this.posX = this.posOrigenX;
        this.posY = this.posOrigenY;
    }

    setResaltado(resaltado){
        this.resaltado = resaltado;
    }

    setDisable(disable){
        this.disable = true;
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
    getPosOrigenX(){
        return this.posOrigenX;
    }
    getPosOrigenY(){
        return this.posOrigenY;
    }
    getFill(){
        return this.Fill;
    }
    getRadius(){
        return this.radius;
    }
    getJugador(){
        return this.jugador;
    }
    getImagen(){
        return this.image;
    }

}