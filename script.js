const text = "Programador y desarrollador";
const speed = 85; 
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.querySelector('h3').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;


