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

    //Metodo que dispara el preloader
    function activatePreloader(){
        return new Promise((resolve) => {
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

            setTimeout(() => {
                resolve();
            }, 5000); 
        });     
    }

    activatePreloader().then(() => {
        heroAnimation();
      });
    
    /*Genero movimientos de las imagenes situadas en el header/hero, para crear un efecto de aparición, una vez se haya cumplido
    la promesa del preloader*/
    function heroAnimation(){
        buildingLeft.style.opacity = 1;
        buildingLeft.style.transform = `translateX(0)`;
        buildingLeft.style.transition = `transform 0.8s ease, opacity 2s ease`;
        buildingLeft.style.transitionDelay = `1000ms`;

        buildingRight.style.opacity = 1;
        buildingRight.style.transform = `translateX(0)`;
        buildingRight.style.transition = `transform 0.8s ease, opacity 2s ease`;
        buildingRight.style.transitionDelay = `1000ms`;

        buildingCenter.style.opacity = 1;
        buildingCenter.style.transform = `translateY(0)`;
        buildingCenter.style.transition = `transform 0.8s ease, opacity 2s ease`;
        buildingCenter.style.transitionDelay = `1000ms`;

        spider.style.opacity = 1;
        spider.style.transform = `translateY(0)`;
        spider.style.transition = `transform 0.8s ease, opacity 2s ease`;
        spider.style.transitionDelay = `1000ms`;

        blackSpider.style.opacity = 1;
        blackSpider.style.transform = `translateX(0)`;
        blackSpider.style.transition = `transform 0.8s ease, opacity 2s ease`;
        blackSpider.style.transitionDelay = `1000ms`;

        whiteSpider.style.opacity = 1;
        whiteSpider.style.transform = `translateX(0)`;
        whiteSpider.style.transition = `transform 0.8s ease, opacity 2s ease`;
        whiteSpider.style.transitionDelay = `1000ms`;

        rightWeb.style.opacity = 1;
        rightWeb.style.transform = `translateX(0)`;
        rightWeb.style.transition = `transform 0.8s ease, opacity 2s ease`;
        rightWeb.style.transitionDelay = `1000ms`;

        leftWeb.style.opacity = 1;
        leftWeb.style.transform = `translateY(0)`;
        leftWeb.style.transition = `transform 0.8s ease, opacity 2s ease`;
        leftWeb.style.transitionDelay = `1000ms`;
    }
}