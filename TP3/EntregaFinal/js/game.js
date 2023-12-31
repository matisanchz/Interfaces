"use strict";

// Función para mostrar el pop-up cuando se hace clic en el botón "Compartir"
document.getElementById('share').addEventListener('click', function() {
  document.getElementById('popup-overlay').style.display = 'block';
  let blur = document.querySelector(".overlay");
  blur.classList.remove("none");
  // Generar el enlace a compartir y mostrarlo en el campo de texto
  let shareLink = "http://www.pocketgames.com/juego/4enlinea:CSGO";
  document.getElementById('share-link').value = shareLink;
});

// Función para cerrar el pop-up cuando se hace clic en el botón "Cerrar"
document.getElementById('close-popup').addEventListener('click', function() {
  document.getElementById('popup-overlay').style.display = 'none';
  let blur = document.querySelector(".overlay");
  blur.classList.add("none");
});

// Selecciona todos los elementos con la clase "like-icon"
let likeIcons = document.querySelectorAll(".like-icon");

likeIcons.forEach(function(likeIcon) {
  // Variable para seguimiento del estado actual de cada elemento
  let isLiked = true;

  likeIcon.addEventListener("click", function() {

    if (isLiked) {
      likeIcon.src = "media/iconos/like-coment.svg"; 
    } else {
      likeIcon.src = "media/iconos/fill-like.svg"; 
    }
    
    isLiked = !isLiked;
  });
});









