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

    let preloader = document.createElement("div");
    let ring = document.createElement("div");
    let loading = document.createElement("span");
    let percentage = document.createElement("span");

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();

        preloader.classList.add("preloader");
        ring.classList.add("ring");
        percentage.classList.add("status");
        loading.textContent = "Cargando...";

        percentage.appendChild(document.createTextNode("0%"));

        preloader.appendChild(ring);
        preloader.appendChild(loading);
        preloader.appendChild(percentage);

        document.querySelector("body").appendChild(preloader);

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