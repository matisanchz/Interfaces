"use strict";

let logo = document.querySelector(".logo");

window.addEventListener('scroll', function() {

    let scrollY = window.scrollY;

    let translateY = scrollY / 2;
    let scale = 1 - scrollY / 140;

    if(scale>0.2){
        logo.style = 'position: absolute';
        logo.style.transform = 'translateY(' + translateY + 'px) ';
        logo.style.transform = 'scale(' + scale + ')';
    }else{
        logo.style = 'position: fixed';
        logo.style.transform = `translateY(-107px) scale(0.20)`;
    }

});