// Propiedades y Eventos de la Ventana
window.addEventListener("resize", e => {
    console.clear();
    console.log("**** Evento Resize *****");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e)
});

window.addEventListener("scroll", e => {
    console.clear();
    console.log("**** Evento Scroll *****");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e)
});

// Evento que muestra cuando la ventana de navegador termina
window.addEventListener("load", e => {
    console.log("**** Evento Load *****");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e)
});

document.addEventListener("DOMContentLoaded", e => {
    console.log("**** Evento DOMContentLoaded *****");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e)
});