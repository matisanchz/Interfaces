"use strict";

let isMoved = false;

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

let elf = document.querySelector(".elf");

window.addEventListener('scroll', function() {

    let scrollY = window.scrollY
    let movement = scrollY / 3.5;
    let translateY = -45 + movement - 50;

    if(scrollY>=100 && scrollY<=800){
        elf.style.transform = 'translate(644px,' + translateY +'px)';
    }else{
        elf.style.transform = 'translate(644px, 123px)';
    }

});

let pjContainer = document.querySelector('.pjs-info');

let pp = document.getElementById('peter-parker');
let mm = document.getElementById('miles-morales');
let gs = document.getElementById('gwen-stacy');

pp.addEventListener('mouseenter', ()=>{
    changePj("pp");
});
mm.addEventListener('mouseenter', ()=>{
    changePj("mm");
});

gs.addEventListener('mouseenter', ()=>{
    changePj("gs");
});

pp.addEventListener('mouseleave', removeChanges);
mm.addEventListener('mouseleave', removeChanges);
gs.addEventListener('mouseleave', removeChanges);

function changePj(pj){
    switch(pj){
        case "pp":
            pjContainer.classList.add('pj-pp');
            mm.classList.add('blur');
            gs.classList.add('blur');
            break;
        case "mm":
            pjContainer.classList.add('pj-mm');
            pp.classList.add('blur');
            gs.classList.add('blur');
            break;
        case "gs":
            pjContainer.classList.add('pj-gs');
            mm.classList.add('blur');
            pp.classList.add('blur');
            break;
    }

}

function removeChanges(){
    pjContainer.classList.remove('pj-pp');
    pjContainer.classList.remove('pj-mm');
    pjContainer.classList.remove('pj-gs');
    mm.classList.remove('blur');
    pp.classList.remove('blur');
    gs.classList.remove('blur');
}

let info = document.querySelector('.txt-info');
let image = document.querySelector('.img-info');
info.addEventListener('scroll', function(){

    let scrollTop = info.scrollTop;

    if(scrollTop <= 270){
        image.style.backgroundImage = "url('../images/game-info/txt-1.svg')";
    }else if(scrollTop > 270 && scrollTop <= 630){
        image.style.backgroundImage = "url('../images/game-info/txt-2.svg')";
    }else if(scrollTop > 630 && scrollTop <= 1070){
        image.style.backgroundImage = "url('../images/game-info/txt-3.svg')";
    }else{
        image.style.backgroundImage = "url('../images/game-info/txt-4.svg')";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const parallax = document.querySelector(".ctn-parallax");
  
    parallax.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;
        const { offsetWidth, offsetHeight } = parallax;

        const centerX = offsetWidth / 2;
        const centerY = offsetHeight / 2;

        const moveX = (clientX - centerX) / 20;
        const moveY = (clientY - centerY) / 20;

        let sky = document.querySelector(".l1");
        let trees = document.querySelector(".l2");
        let girl = document.querySelector(".l3");
        let panther = document.querySelector(".l4");
        let hulk = document.querySelector(".l5");
        let grass = document.querySelector(".l6");
  
        sky.style.transform = `scale(${1 + clientX/100 * 0.001})`;
        trees.style.transform = `scale(${1 + clientX/100 * 0.001})`;
        grass.style.transform = `scale(${1 + clientX/100 * 0.001})`;

        panther.style.transform = `translateX(${moveX * -0.5}px) translateY(${moveY * -0.7}px) rotate(4deg)`;
        hulk.style.transform = `translateX(${moveX * -1.4}px) translateY(${moveY * -1.7}px)`;
        girl.style.transform = `translateX(${moveX * 1}px) translateY(${moveY * -2.2}px) rotate(-5.483deg)`;
    });
  });