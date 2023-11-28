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

window.addEventListener('scroll', function() {

    let scrollY = window.scrollY;

    let translateY = scrollY / 2;
    let scale = 1 - scrollY / 260;

    if(scale>0.2){
        logo.style = 'position: absolute';
        logo.style.transform = 'translateY(' + translateY + 'px) ';
        logo.style.transform = 'scale(' + scale + ')';
    }else{
        logo.style = 'position: fixed';
        logo.style.transform = `translateY(-190px) scale(0.20)`;
    }

});

document.addEventListener("DOMContentLoaded", function () {
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
});

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