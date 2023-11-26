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

let buildingLeft = document.querySelector(".building-left");
let buildingRight = document.querySelector(".building-right");
let buildingCenter = document.querySelector(".building-center");
let spider = document.querySelector(".spider");
let blackSpider = document.querySelector(".b-spider");
let whiteSpider = document.querySelector(".w-spider");
let rightWeb = document.querySelector(".r-web");
let leftWeb = document.querySelector(".l-web");

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