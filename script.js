//texto que aparece
const text = "Programador y desarrollador"; //tomo el texto que quiero que aparezca
const speed = 85; //defino la cantidad de tiempo que tarda en aparecer
let i = 0; 

function typeWriter() {
  if (i < text.length) { //hasta que i alcance el valor del tamaño total de texto
    document.querySelector('h3').innerHTML += text.charAt(i); //tomo el h3 y le sumo el caracter de la posicion i
    i++; //agrego +1 al valor de i
    setTimeout(typeWriter, speed); //llamo a la funcion de nuevo despues del tiempo que estableci antes
  }
}
window.onload = typeWriter; //defino que esto ocurra cuando cargo la pagina


// Movimiento del botón de contacto
const button = document.querySelector('.contactar'); //tomo el boton de clase contactar

button.addEventListener('mousemove', (e) => { //event listener a cuando se mueve el mouse sobre el boton
    const rect = button.getBoundingClientRect(); //consigo las dimensiones del boton
    const x = e.clientX - rect.left - rect.width / 2; //calculo posicion x y del boton relativo a su centro
    const y = e.clientY - rect.top - rect.height / 2;
    button.style.transform = `scale(1.2) translate(${x * 0.1}px, ${y * 0.1}px)`; //cambio el tamaño del boton y lo muevo basado en la pos del mouse
});

button.addEventListener('mouseleave', () => {  //agrego event listener a cuando el mouse abandona el boton
    button.style.transform = 'scale(1)';  //lo devuelvo a sus dimensiones normales
});

//navbar desapareciendo y apareciendo 
const navbar = document.querySelector('.navbar-section'); //tomo el elemento con la clase navbar-section
let lastScrollY = window.scrollY; //tomo la posicion del scrolleo actual
let ticking = false; //inicializo una variable en false para controlar si hay actualizaciones de scroll

function handleScroll() {
  if (lastScrollY < window.scrollY) {  //verifico si scroll actual es mayor al ultimo (va hacia abajo)
    //si esto ocurre oculto la barra añadiendo a su clase navbar-hide
    navbar.classList.add('navbar-hide');
  } else {
    //caso contrario remuevo esa clase y se muestra
    navbar.classList.remove('navbar-hide');
  }
  //actualizo la posicion de scroll
  lastScrollY = window.scrollY;
  //reseteo la variable de control
  ticking = false;
}
//agrego event listener que se activa cuando se scrollea
window.addEventListener('scroll', () => {
    //si no hay actualizaciones en la variable
  if (!ticking) {
    //uso request animation frame para llamar a handle scroll y mejorar rendimiento
    window.requestAnimationFrame(handleScroll);
    //indico que hay scroll en curso
    ticking = true;
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const h3 = document.querySelector('h3');
    const lenguajes = document.querySelector('.lenguajes-herramientas');

    h3.addEventListener('mouseenter', function() {
        lenguajes.style.display = 'block';
    });

    h3.addEventListener('mouseleave', function() {
        lenguajes.style.display = 'none';
    });

    lenguajes.addEventListener('mouseenter', function() {
        this.style.display = 'block';
    });

    lenguajes.addEventListener('mouseleave', function() {
        this.style.display = 'none';
    });
});







