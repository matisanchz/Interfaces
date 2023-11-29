"use strict";

let logo = document.querySelector(".logo");
let buildingLeft = document.querySelector(".building-left");
let buildingRight = document.querySelector(".building-right");
let buildingCenter = document.querySelector(".building-center");
let sky = document.querySelector(".hero-images");
let spider = document.querySelector(".spider");
let blackSpider = document.querySelector(".b-spider");
let whiteSpider = document.querySelector(".w-spider");
let rightWeb = document.querySelector(".r-web");
let leftWeb = document.querySelector(".l-web");
let header = document.querySelector("header");

/*Manejo del movimiento del logo, en base al scroll de la pantalla*/
window.addEventListener('scroll', function() {

    let scrollY = window.scrollY;

    let translateY = scrollY / 2;
    let scale = 1 - scrollY / 260;

    if(scale>0.2){
        logo.style = 'position: absolute';
        logo.style.transform = 'translateY(' + translateY + 'px) ';
        logo.style.transform = 'scale(' + scale + ')';
        if(!nav.classList.contains('open')){
            header.style.background = 'linear-gradient(to bottom, rgb(84, 153, 248) 88.34%, rgba(84, 153, 248, 0))';
        }
    }else{
        logo.style = 'position: fixed';
        logo.style.transform = `translateY(-190px) scale(0.20)`;
        header.style.background = 'rgb(84, 153, 248)';
    }

});

/*Parallax del header/hero, en base al scroll*/
window.addEventListener("scroll", function () {

    let scroll = window.scrollY;

    if(scroll<650){
        whiteSpider.style.transform = `translateY(${-scroll*0.1}px) translateX(${-scroll*0.1}px) `;
        whiteSpider.style.transition = `transform 0.8s ease`;
        whiteSpider.style.transitionDelay = `0`;
    
        spider.style.transform = ` translateY(${-scroll*0.2}px) `;
        spider.style.transition = `transform 0.8s ease`;
        spider.style.transitionDelay = `0`;
    
        leftWeb.style.transform = ` translateY(${-scroll*0.2}px) `;
        leftWeb.style.transition = `transform 0.8s ease`;
        leftWeb.style.transitionDelay = `0`;
    
        blackSpider.style.transform = `translateY(${-scroll*0.05}px) translateX(${scroll*0.05}px)`;
        blackSpider.style.transition = `transform 0.8s ease`;
        blackSpider.style.transitionDelay = `0`;
    
        rightWeb.style.transform = `translateY(${-scroll*0.05}px) translateX(${scroll*0.05}px)`;
        rightWeb.style.transition = `transform 0.8s ease`;
        rightWeb.style.transitionDelay = `0`;
    
        buildingLeft.style.transform = `translateY(${scroll - (scroll*0.90)}px) translateX(${scroll - (scroll*0.995)}px)`;
        buildingLeft.style.transition = `transform 0.8s ease`;
        buildingLeft.style.transitionDelay = `0`;
    
        buildingCenter.style.transform = `translateY(${scroll - (scroll*0.95)}px)`;
        buildingCenter.style.transition = `transform 0.8s ease`;
        buildingCenter.style.transitionDelay = `0`;
    
        buildingRight.style.transform = `translateY(${scroll - (scroll*0.90)}px) translateX(${-scroll + (scroll*0.98)}px)`;
        buildingRight.style.transition = `transform 0.8s ease`;
        buildingRight.style.transitionDelay = `0`;
    
    }

});