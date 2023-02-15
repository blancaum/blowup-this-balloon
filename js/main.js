//Elementos HTML
const balloon = document.querySelector('.js_balloon');
const completeBalloon = document.querySelector('.js_complete_balloon');
const explosion = document.querySelector('.js_explosion');

//Constantes
const initialPixels = 200;
const incrementPixels = 20;
const decrementPixels = 10;
const maxPixels = 420;
const colors = ['lightcoral', 'lightgreen', 'aquamarine'];

//Variables globales
let balloonPixels = initialPixels;
let currentColor = 0;

//Funciones Handler
function handleClickBalloon(ev) {
  if (balloonPixels <= maxPixels) {
    balloonPixels = balloonPixels + incrementPixels;
    currentColor = (currentColor + 1) % colors.length;
  } else {
    balloonPixels = initialPixels;
    currentColor = 0;
    completeBalloon.classList.add('hidden');
    explosion.classList.remove('hidden');
  }
  balloon.style.width = `${balloonPixels}px`;
  balloon.style.height = `${balloonPixels}px`;
  balloon.style.backgroundColor = colors[currentColor];
}

function handleMouseOut() {
  if (balloonPixels > initialPixels) {
    balloonPixels = balloonPixels - decrementPixels;
    balloon.style.width = `${balloonPixels}px`;
    balloon.style.height = `${balloonPixels}px`;
  }
}

function handleClickRestart() {
  completeBalloon.classList.remove('hidden');
  explosion.classList.add('hidden');
}

balloon.addEventListener('click', handleClickBalloon);
balloon.addEventListener('mouseout', handleMouseOut);
explosion.addEventListener('click', handleClickRestart);
