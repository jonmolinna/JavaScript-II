import hamburgerMenu from "./prueba1.js";

import { digitalClock, alarm } from './prueba2.js';

// 1.-Creando un menu de Hamburguesa
document.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");

    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
});