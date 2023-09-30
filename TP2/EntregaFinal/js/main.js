let cards = document.querySelectorAll(".card-img");

let cards_payable = document.querySelectorAll(".card-payable");

cards_payable.forEach(function(card){
    let cart = document.createElement("img");
    cart.src =  "media/iconos/card-cart.png";
    cart.className = "icon-cart";

    let paid = document.createElement("img");
    paid.src =  "media/iconos/paid.png";
    paid.className = "icon-paid";

    card.insertAdjacentElement("afterend", paid);
    card.insertAdjacentElement("afterend", cart);
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



    });

});


