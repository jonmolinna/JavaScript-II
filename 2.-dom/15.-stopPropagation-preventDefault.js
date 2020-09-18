const divsEventos = document.querySelectorAll(".eventos-flujo div");
const linkEventos = document.querySelector('.eventos-flujo a');

function flujoEventos(e){
    console.log(`Hola ${this.className}, lo origina ${e.target.className}`);
    e.stopPropagation();
};

divsEventos.forEach(div => {
    // Fase de Burbuja
    div.addEventListener("click", flujoEventos);
});

linkEventos.addEventListener("click", e => {
    alert("Hola Eung");
    e.preventDefault();
});