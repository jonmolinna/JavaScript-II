import hamburgerMenu from "./prueba1.js";
import { digitalClock, alarm } from './prueba2.js';
import { shortcuts, moveBall } from './prueba3.js';
import countdown from './prueba4.js';
import scrollTopButton from './prueba5.js'
import darkTheme from './prueba6.js';

// 1.-Creando un menu de Hamburguesa
document.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");

    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");

    countdown("countdown", "May 23, 2021 03:23:19", "Feliz Cumple :)")

    scrollTopButton(".scroll-top-btn");

});

document.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");