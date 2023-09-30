let cards = document.querySelectorAll(".card-change");

//Por cada card
cards.forEach(function(card){

    //Aplico evento hover -> cambio imagen a gift
    card.addEventListener("mouseover", function() {
        console.log("Mouse sobre imagen");
        let source = card.getAttribute("src");
        console.log(source);
        source = source.replace("imagenes", "gifs");
        source = source.replace(".png", ".gif");
        console.log(source);
        this.src = source;
    });
    
    //Deshago cambios del hover, al salir del hover -> cambio gif a imagen
    card.addEventListener("mouseout", function() {
        console.log("Mouse out");
        let source = card.getAttribute("src");
        console.log(source);
        source = source.replace("gifs", "imagenes");
        source = source.replace(".gif", ".png");
        console.log(source);
        this.src = source; 
    });

});



