let cards = document.querySelectorAll(".card-img");

let cards_payable = document.querySelectorAll(".card-payable");

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
    cart.src =  "media/iconos/card-cart.png";
    cart.className = "icon-cart";

    let paid = document.createElement("img");
    paid.src =  "media/iconos/paid.png";
    paid.className = "icon-paid";

    let label = document.createElement("img");
    label.src =  "media/iconos/label.png";
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

let carts = document.querySelectorAll(".icon-cart");

carts.forEach(function(cart){
    cart.addEventListener("click", function() {
        let source = this.src;
        if(source.includes("card-cart")){
            source = source.replace("card-cart", "card-added");
        }else{
            source = source.replace("card-added", "card-cart");
        }
        this.src = source;
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
            nodoImg.src =  "media/iconos/play.png";
        }else{
            nodoImg.src =  "media/iconos/lock.png";
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
    });

});

let burguerToggle = document.getElementById("burguer");
let userToggle = document.getElementById("user");
let cartToggle = document.getElementById("cart");

let menu = document.querySelector(".menu");
let menuUser = document.querySelector(".menu-user");
let menuCart = document.querySelector(".menu-cart");

burguerToggle.addEventListener('click', () => {
    menu.classList.toggle('open-left');
    menu.classList.toggle('closed-menu');
});

userToggle.addEventListener('click', () => {
    menuUser.classList.toggle('open-right');
    menuUser.classList.toggle('closed-user');
});

cartToggle.addEventListener('click', () => {
    menuCart.classList.toggle('open-right');
    menuCart.classList.toggle('closed-cart');
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




