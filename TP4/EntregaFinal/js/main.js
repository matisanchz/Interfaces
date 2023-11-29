"use strict";

let isClicked = false;

let hambur = document.querySelector(".hambur");
let nav = document.querySelector(".navbar");
let options = document.querySelectorAll(".option");

hambur.addEventListener('click', manageMenu);

function manageMenu(){
    if(isClicked){
        hideCross();
        nav.classList.toggle('open');
        for(let i = 0; i <options.length; i++){
            options[i].classList.toggle('open');
        }
        if((1 - (window.scrollY) / 260)>0.2){
            header.style.background = 'linear-gradient(to bottom, rgb(84, 153, 248) 88.34%, rgba(84, 153, 248, 0))';
        }
        isClicked = false;
    }else{
        showCross();
        nav.classList.toggle('open');
        for(let i = 0; i< options.length; i++){
            options[i].classList.toggle('open');
        }
        isClicked = true;
        if((1 - (window.scrollY) / 260)>0.2){
            header.style.background = 'rgb(84, 153, 248)';
        }
    }
}

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

let cardOne = document.querySelector(".c1");
let cardTwo = document.querySelector(".c2");
let cardThree = document.querySelector(".c3");

window.addEventListener('scroll', function() {

    let scrollY = window.scrollY;
    let movement = scrollY / 4;
    let translateY = -45 + movement - 60;

    if(scrollY>=100 && scrollY<=810){
        elf.style.transform = 'translate(644px,' + translateY +'px)';
    }else{
        elf.style.transform = 'translate(644px, 120px)';
    }

    if(scrollY>1100){
        cardOne.style.opacity = 1;
        cardOne.style.transform = `translateY(0)`;
        cardOne.style.transition = `transform 0.8s ease, opacity 2s ease`;
        cardOne.style.transitionDelay = `400ms`;
        cardTwo.style.opacity = 1;
        cardTwo.style.transform = `translateY(0)`;
        cardTwo.style.transition = `transform 0.8s ease, opacity 2s ease`;
        cardTwo.style.transitionDelay = `700ms`;
        cardThree.style.opacity = 1;
        cardThree.style.transform = `translateY(0)`;
        cardThree.style.transition = `transform 0.8s ease, opacity 2s ease`;
        cardThree.style.transitionDelay = `1000ms`;
    }else{
        cardOne.style.opacity = 0;
        cardOne.style.transform = `translateY(512px)`;
        cardOne.style.transitionDelay = `0ms`;
        cardTwo.style.opacity = 0;
        cardTwo.style.transform = `translateY(512px)`;
        cardTwo.style.transitionDelay = `0ms`;
        cardThree.style.opacity = 0;
        cardThree.style.transform = `translateY(512px)`;
        cardThree.style.transitionDelay = `0ms`;
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

let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');

info.addEventListener('scroll', function(){

    let scrollTop = info.scrollTop;

    if(scrollTop <= 270){
        
        img1.style.opacity = 1;
        img2.style.opacity = 0;

    }else if(scrollTop > 270 && scrollTop <= 630){
        img1.style.opacity = 0;
        img2.style.opacity = 1;
        img3.style.opacity = 0;
    }else if(scrollTop > 630 && scrollTop <= 1070){
        img2.style.opacity = 0;
        img3.style.opacity = 1;
        img4.style.opacity = 0;
    }else{
        img3.style.opacity = 0;
        img4.style.opacity = 1;
    }

});

document.addEventListener("DOMContentLoaded", function () {

    img1.style.opacity = 1;

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

const parallaxContainer = document.querySelector('.parallax-container');
const sectionMiddle = document.querySelector('.section-middle');
const originalPosition = parallaxContainer.offsetTop + parallaxContainer.offsetHeight / 2 - window.innerHeight / 2;
const sectionHeight = sectionMiddle.clientHeight;

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const newPosition = originalPosition - scrollY * 0.5;
    const centeredPosition = newPosition + window.innerHeight / 2 - parallaxContainer.offsetHeight / 2;
    const maxScrollDown = originalPosition - sectionHeight;
    const limitedPosition = Math.max(maxScrollDown, centeredPosition);
    const offset = 1200; 
    parallaxContainer.style.transform = `translateY(${limitedPosition + offset}px)`;
});
