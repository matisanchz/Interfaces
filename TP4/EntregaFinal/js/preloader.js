"use strict";

document.addEventListener('DOMContentLoaded', loadPage);

function loadPage() {
        
    let container = document.createElement("div");
    let chargerBox = document.createElement("div");
    let ringBox = document.createElement("div");
    let logo = document.createElement("img");
    let masks = document.createElement("img");

    let ring = document.createElement("div");
    let loading = document.createElement("span");
    let percentage = document.createElement("span");
    let box = document.createElement("div");
    let charger = document.createElement("div");

    logo.src = "images/small-logo.svg";
    masks.src = "images/masks.svg";

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

    container.appendChild(logo);
    container.appendChild(ringBox);
    container.appendChild(chargerBox);
    container.appendChild(masks);

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