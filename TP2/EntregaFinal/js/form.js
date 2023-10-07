"use strict";

let tic = document.querySelector(".tic")

tic.addEventListener("click", function(){
    let img = tic.firstElementChild;
    img.classList.toggle("none");
});

let formLogin = document.querySelector(".form-login");
let formRegister = document.querySelector(".form-register");

document.querySelector(".return").addEventListener("click", function(){
    formLogin.classList.toggle("none");
    formRegister.classList.toggle("none");
});

document.querySelector(".registro").addEventListener("click", function(){
    formLogin.classList.toggle("none");
    formRegister.classList.toggle("none");
})

document.addEventListener('DOMContentLoaded', loadPage);

function loadPage() {

    let container = document.createElement("div");
    let chargerBox = document.createElement("div");
    let ringBox = document.createElement("div");

    let ring = document.createElement("div");
    let loading = document.createElement("span");
    let percentage = document.createElement("span");
    let box = document.createElement("div");
    let charger = document.createElement("div");

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();

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
    });

    function activatePreloader(){

        let spinnerStatus = document.querySelector(".status");
        document.querySelector("body").classList.add("form-hide");

        setTimeout(() => {
            window.location.replace("home.html");
        }, 5000);

        let status = 10;
        setInterval(() => {
            spinnerStatus.innerHTML = `${status}%`;
            if(status < 100)
                status += 5;
        }, 242)
    }
    
}