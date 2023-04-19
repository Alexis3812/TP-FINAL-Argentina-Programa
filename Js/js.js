let nombre = prompt("Por favor, ingresa tu nombre");
alert("Hola " + nombre + ", bienvenido/a a nuestra página");


/*===================== Slider =========================*/

const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slider').offsetWidth;
let counter = 1;

function moveToNextSlide() {
  if (counter >= 8) return;
  slides.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slides.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function moveToPrevSlide() {
  if (counter <= 0) return;
  slides.style.transition = "transform 0.5s ease-in-out";
  counter--;
  slides.style.transform = `translateX(${-slideWidth * counter}px)`;
}

document.querySelector('.next').addEventListener('click', moveToNextSlide);
document.querySelector('.prev').addEventListener('click', moveToPrevSlide);
