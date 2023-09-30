"use strict";

const canvas = document.querySelector('canvas');
canvas.width = 1370;
canvas.height = 700;

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'orange';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.stroke();