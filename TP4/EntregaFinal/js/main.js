"use strict";

let isOnMenu = false;

let hambur = document.querySelector(".hambur");

hambur.addEventListener('mouseenter', showCross);

function showCross(){
    let firstLine = (hambur.children[0]).firstElementChild;
    let mediumLine = (hambur.children[1]).firstElementChild;
    let lastLine = (hambur.children[2]).firstElementChild;
    let classes = Array.from(mediumLine.classList);
    if(!classes.includes("hide")){
        mediumLine.classList.add("hide");
        firstLine.classList.add("shadow-disappear");
        firstLine.classList.add("first-line");
        lastLine.classList.add("shadow-disappear");
        lastLine.classList.add("last-line");
    }
}

hambur.addEventListener('mouseleave', hideCross);

function hideCross(){
    let firstLine = (hambur.children[0]).firstElementChild;
    let mediumLine = (hambur.children[1]).firstElementChild;
    let lastLine = (hambur.children[2]).firstElementChild;
    console.log(firstLine);
    let classes = Array.from(mediumLine.classList);
    if(classes.includes("hide")){
        mediumLine.classList.remove("hide");
        firstLine.classList.remove("shadow-disappear");
        firstLine.classList.remove("first-line");
        lastLine.classList.remove("shadow-disappear");
        lastLine.classList.remove("last-line");
    }
}