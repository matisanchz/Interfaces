"use strict";

document.addEventListener('DOMContentLoaded', loadPage);

function loadPage() {
        
    let container = document.createElement("div");
    let chargerBox = document.createElement("div");
    let percentageBox = document.createElement("div");
    let logo = document.createElement("img");
    let masks = document.createElement("img");

    let loading = document.createElement("span");
    let percentage = document.createElement("span");
    let box = document.createElement("div");
    let charger = document.createElement("div");

    logo.src = "images/preloader-logo.svg";
    logo.classList.add('img-logo');
    masks.src = "images/masks.svg";
    masks.classList.add('img-masks');

    /*Contenedor principal*/
    container.classList.add("container-preloader")

    /*Contenedor para el charger*/
    chargerBox.classList.add("charger-box")

    /*Contenedor para el porcentaje*/
    percentageBox.classList.add("preloader-box");

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
    
    percentageBox.appendChild(loading);
    percentageBox.appendChild(percentage);

    container.appendChild(logo);
    container.appendChild(percentageBox);
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

        let status = 0;
        setInterval(() => {
            spinnerStatus.innerHTML = `${status}%`;
            if(status < 100)
                status += 1;
        }, 48.4)
    }
    
}