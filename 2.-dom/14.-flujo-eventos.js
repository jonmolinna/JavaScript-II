const divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e){
    console.log(`Hola ${this.className}, lo origina ${e.target.className}`)
}

divsEventos.forEach(div => {
    // Fase de Burbuja
    //div.addEventListener("click", flujoEventos);
    //div.addEventListener("click", flujoEventos, false);

    // Fase de Captura
    //div.addEventListener("click", flujoEventos, true);

    div.addEventListener("click", flujoEventos, {
        capture: false,
        once: true
    });
})