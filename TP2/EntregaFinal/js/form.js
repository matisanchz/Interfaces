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