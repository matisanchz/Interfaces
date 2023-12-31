"use strict";

let cards = document.querySelectorAll(".card-img");

let cards_payable = document.querySelectorAll(".card-payable");

let cards_bought = document.querySelectorAll(".card-bought");

const juegos=[
    {'nombre' : 'shell-shockers', 
    'valor' : '$ 0.95'},
    {'nombre' : 'air-wars3', 
    'valor' : '$ 0.95'},
    {'nombre' : 'bad-egg', 
    'valor' : '$ 1.00'},
    {'nombre' : 'metal-slug', 
    'valor' : '$ 0.50'},
    {'nombre' : 'ratchet-clank', 
    'valor' : '$ 2.50'},
    {'nombre' : 'zelda', 
    'valor' : '$ 1.50'},
    {'nombre' : 'force', 
    'valor' : '$ 1.00'},
    {'nombre' : 'forward-assault', 
    'valor' : '$ 1.20'},
    {'nombre' : 'crazy-speed', 
    'valor' : '$ 1.00'},
    {'nombre' : 'rally-point3', 
    'valor' : '$ 1.00'},
    {'nombre' : 'resident-evil4', 
    'valor' : '$ 2.00'},
    {'nombre' : 'saw', 
    'valor' : '$ 1.50'},
    {'nombre' : 'silent-hill2', 
    'valor' : '$ 1.50'},
    {'nombre' : 'tower-defense', 
    'valor' : '$ 0.50'},
    {'nombre' : 'w2100', 
    'valor' : '$ 0.50'},
    {'nombre' : 'starcraft', 
    'valor' : '$ 1.80'},
    {'nombre' : 'tomb-rider', 
    'valor' : '$ 0.50'},
    {'nombre' : 'mah', 
    'valor' : '$ 0.50'},
    {'nombre' : 'candy', 
    'valor' : '$ 0.50'}
];

cards_payable.forEach(function(card){
    let cart = document.createElement("img");
    cart.src =  "media/iconos/card-cart.svg";
    cart.className = "icon-cart";

    let paid = document.createElement("img");
    paid.src =  "media/iconos/paid.svg";
    paid.className = "icon-paid";

    let label = document.createElement("img");
    label.src =  "media/iconos/label.svg";
    label.className = "label none";
    
    let path = card.src;

    let partes = path.split("/");
    
    let archivo = partes[partes.length - 1].split(".")[0];

    let objeto = juegos.find(juego => juego.nombre === archivo);

    let price = document.createElement("p");

    price.textContent = objeto.valor;
    price.className = "price none";
    
    card.insertAdjacentElement("afterend", cart);
    card.insertAdjacentElement("afterend", paid);
    card.insertAdjacentElement("afterend", label);
    card.insertAdjacentElement("afterend", price);
});

cards_bought.forEach(function(card){
    let basket = document.createElement("img");
    basket.src =  "media/iconos/bought.svg";
    basket.className = "icon-cart basket";
    
    card.insertAdjacentElement("afterend", basket);
});

let carts = document.querySelectorAll(".icon-cart");

carts.forEach(function(cart){
    cart.addEventListener("click", function() {

        let source = this.src;
        if(source.includes("card-cart")){
            source = source.replace("card-cart", "card-added");
        }else{
            source = source.replace("card-added", "card-cart");
            cart.classList.add("giro");

            cart.addEventListener("animationend", () =>{
                cart.classList.remove("giro");
            });
        }
        this.src = source;
    });

    cart.addEventListener("mouseover", () => {
        let source = cart.src;

        if(source.includes("card-cart")){
            cart.classList.add("rotating");
        }
    });

    cart.addEventListener("mouseout", () => {
        cart.classList.remove("rotating");
    });
});

//Por cada card
cards.forEach(function(card){

    //Aplico evento hover -> cambio imagen a gift
    card.addEventListener("mouseover", function() {
        let source = card.getAttribute("src");
        source = source.replace("imagenes", "gifs");
        source = source.replace(".png", ".gif");
        this.src = source;
        card.classList.toggle('difference');
        
        let nodoImg = document.createElement("img");

        let clases = card.classList;

        let clasesArray = Array.from(clases);

        if(clasesArray.includes("card-primary")){
            nodoImg.src =  "media/iconos/play.svg";
        }else{
            nodoImg.src =  "media/iconos/lock.svg";
        }

        nodoImg.className = "icon-medium";

        card.insertAdjacentElement("afterend", nodoImg);

        let texto = card.nextElementSibling;

        while (texto) {
            if (texto.tagName === "H3") {
                texto.classList.remove("none");
                break; 
            }
            texto = texto.nextElementSibling;
        }
        
        if(clasesArray.includes("card-payable")){

            // LOCK, P, LABEL, PAID

            let label = card.nextElementSibling.nextElementSibling.nextElementSibling;

            label.classList.remove("none");

            let price = card.nextElementSibling.nextElementSibling;

            price.classList.remove("none");

            let paid = card.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

            paid.classList.add("none");
        }

        if(clasesArray.includes("card-bought")){

            let basket = card.nextElementSibling.nextElementSibling;

            basket.src = "media/iconos/unlock.svg";

        }


    });
    
    //Deshago cambios del hover, al salir del hover -> cambio gif a imagen
    card.addEventListener("mouseout", function() {
        let source = card.getAttribute("src");
        source = source.replace("gifs", "imagenes");
        source = source.replace(".gif", ".png");
        this.src = source;
        card.classList.toggle('normal');

        let nodoSiguiente = card.nextElementSibling;

        if (nodoSiguiente) {
            nodoSiguiente.remove();
        }

        let clases = card.classList;

        let clasesArray = Array.from(clases);

        let texto = card.nextElementSibling;

        while (texto) {
            if (texto.tagName === "H3") {
                texto.classList.add("none");
                break; 
            }
            texto = texto.nextElementSibling;
        }

        if(clasesArray.includes("card-payable")){

            //P, LABEL, PAID, CARD-CART

            let price = card.nextElementSibling;

            price.classList.add("none");

            let label = price.nextElementSibling;

            label.classList.add("none");

            let paid = label.nextElementSibling;

            paid.classList.remove("none");

        }

        if(clasesArray.includes("card-bought")){
            
            let basket = card.nextElementSibling;

            basket.src = "media/iconos/bought.svg";

        }
    });

});

let burgerToggle = document.getElementById("burger");
let userToggle = document.getElementById("user");
let cartToggle = document.getElementById("cart");

let menu = document.querySelector(".menu");
let menuUser = document.querySelector(".menu-user");
let menuCart = document.querySelector(".menu-cart");

burgerToggle.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu(){
    menu.classList.toggle('open-left');
    menu.classList.toggle('closed-menu');
    burgerToggle.classList.toggle('rotate');
}

function closeMenu() {
    if (menu.classList.contains('open-left')) {
        toggleMenu();
    }
}

document.addEventListener('click', (event)=>{
    if (!menu.contains(event.target) && event.target !== burgerToggle) {
        closeMenu();
    }
});

userToggle.addEventListener('click', () => {
    toggleMenuUser();
});

function toggleMenuUser(){
    menuUser.classList.toggle('open-right');
    menuUser.classList.toggle('closed-user');
}

function closeMenuUser() {
    if (menuUser.classList.contains('open-right')) {
        toggleMenuUser();
    }
}

document.addEventListener("click", function(event){
    if (!menuUser.contains(event.target) && event.target !== userToggle) {
        closeMenuUser();
    }
});

cartToggle.addEventListener('click', () => {
    toggleMenuCart();
});

function toggleMenuCart(){
    menuCart.classList.toggle('open-right');
    menuCart.classList.toggle('closed-cart');
}

function closeMenuCart() {
    if (menuCart.classList.contains('open-right')) {
        toggleMenuCart();
    }
}

document.addEventListener("click", function(event){
    if (!menuCart.contains(event.target) && event.target !== cartToggle) {
        closeMenuCart();
    }
});

let options = document.querySelectorAll(".option");

options.forEach(function(option){

    option.addEventListener("mouseover", function(){
        option.classList.add('selected');
        let h3 = this.children[1];
        h3.classList.add('selected-h3');
    });

    option.addEventListener("mouseout", function(){
        option.classList.remove('selected');
        let h3 = this.children[1];
        h3.classList.remove('selected-h3');
    });

});

document.querySelectorAll(".carrusel").forEach(function(carrusel){
    let card = carrusel.firstElementChild;
    card.style = "padding-left: 0px";
});

const tamanio = 229.2;

let lefts = document.querySelectorAll(".left");

lefts.forEach(function(left){

    

    left.addEventListener("click", function(){

        let carrusel = this.nextElementSibling;

        carrusel.scrollLeft -= tamanio;

        carrusel.classList.add("skew-left");

        setTimeout(function() {
            carrusel.classList.remove("skew-left");
        }, 100);

        let btn = carrusel.nextElementSibling;

        let classArray =  Array.from(btn.classList);
    
        if(classArray.includes("none")){
            btn.classList.remove("none");
        }

        let scroll = carrusel.scrollLeft;

        if(scroll===0){
            left.classList.add("none");
        }

    })

});

let rights = document.querySelectorAll(".right");

rights.forEach(function(right){

    right.addEventListener("click", function(){

        let carrusel = this.previousElementSibling;

        carrusel.scrollLeft += tamanio;

        carrusel.classList.add("skew-right");

        setTimeout(function() {
            carrusel.classList.remove("skew-right");
        }, 200);

        let btn = carrusel.previousElementSibling;

        let classArray =  Array.from(btn.classList);
    
        if(classArray.includes("none")){
            btn.classList.remove("none");
        }

        let maxScroll = carrusel.scrollWidth - carrusel.clientWidth;

        let scroll = carrusel.scrollLeft;

        if(maxScroll-scroll < tamanio || maxScroll === 0){
            right.classList.add("none");
        }
   
    });

    document.addEventListener('DOMContentLoaded', function(){
        let carrusel = right.previousElementSibling;
        let maxScroll = carrusel.scrollWidth - carrusel.clientWidth;
        if(maxScroll === 0){
            right.classList.add("none");
        }
    })

    window.addEventListener('resize', () => {
        let carrusel = right.previousElementSibling;
        let maxScroll = carrusel.scrollWidth - carrusel.clientWidth;
        let classes = Array(right.classList);
        if(maxScroll === 0){
            if(!classes.includes("none")){
                right.classList.add("none");
            }
        }else{
            right.classList.remove("none");
        }
    });

    
});

document.querySelector(".home").addEventListener("click", function(){
    window.location.replace("home.html");
});

document.querySelector(".close").addEventListener("click", function(){
    window.location.replace("index.html");
});

document.addEventListener('DOMContentLoaded', loadPage);

function loadPage() {

    var rutaActual = window.location.href;

    if(rutaActual.includes("home.html")){
        
        let container = document.createElement("div");
        let chargerBox = document.createElement("div");
        let ringBox = document.createElement("div");

        let ring = document.createElement("div");
        let loading = document.createElement("span");
        let percentage = document.createElement("span");
        let box = document.createElement("div");
        let charger = document.createElement("div");

        /*Contenedor principal*/
        container.classList.add("container-preloader")

        /*Contenedor para el charger*/
        chargerBox.classList.add("charger-box")

        /*Contenedor para el aro animado*/
        ringBox.classList.add("ring-box");

        /*Aro*/
        ring.classList.add("ring");
        /*Porcentaje*/
        percentage.classList.add("status");
        /*Span*/
        loading.textContent = "Cargando...";
        /*Cargador*/
        charger.classList.add("charger");
        box.classList.add("line-box");

        box.appendChild(charger);
        chargerBox.appendChild(box);

        percentage.textContent = "0%";
        
        ringBox.appendChild(ring);
        ringBox.appendChild(loading);
        ringBox.appendChild(percentage);

        container.appendChild(ringBox);
        container.appendChild(chargerBox);

        document.querySelector("body").appendChild(container);

        activatePreloader();

        function activatePreloader(){

            let spinnerStatus = document.querySelector(".status");
            document.querySelector("body").classList.add("body-hide");

            setTimeout(() => {
                document.body.classList.remove("body-hide");
                
                var ultimoHijo = document.body.lastElementChild;
                ultimoHijo.remove();


            }, 5000);

            let status = 10;
            setInterval(() => {
                spinnerStatus.innerHTML = `${status}%`;
                if(status < 100)
                    status += 5;
            }, 242)
        }
    }
}
