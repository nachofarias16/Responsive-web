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

const button = document.querySelector('.contactar');

button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    button.style.transform = `scale(1.1) translate(${x * 0.3}px, ${y * 0.3}px)`;
});

button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
});
