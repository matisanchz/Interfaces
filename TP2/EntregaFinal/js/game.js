"use strict";

const canvas = document.querySelector('canvas');
canvas.width = 1370;
canvas.height = 600;

const ctx = canvas.getContext('2d');

//ctx.fillStyle = 'orange';
//ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.stroke();

let img = new Image();
img.src = "media/imagenes/game2.svg";

img.onload = function(){
    ctx.drawImage(img, 0, 0);
  }

// Función para mostrar el pop-up cuando se hace clic en el botón "Compartir"
document.getElementById('share').addEventListener('click', function() {
  document.getElementById('popup-overlay').style.display = 'block';
  // Generar el enlace a compartir y mostrarlo en el campo de texto
  var shareLink = window.location.href; // Cambia esto por el enlace que deseas compartir
  document.getElementById('share-link').value = shareLink;
});

// Función para cerrar el pop-up cuando se hace clic en el botón "Cerrar"
document.getElementById('close-popup').addEventListener('click', function() {
  document.getElementById('popup-overlay').style.display = 'none';
});