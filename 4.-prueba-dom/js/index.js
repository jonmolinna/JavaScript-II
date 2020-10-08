import hamburgerMenu from "./prueba1.js";
import { digitalClock, alarm } from './prueba2.js';
import { shortcuts, moveBall } from './prueba3.js';
import countdown from './prueba4.js';
import scrollTopButton from './prueba5.js'
import darkTheme from './prueba6.js';
import responsiveMedia from './prueba7.js';
import responsiveTester from './prueba8.js';
import userDeviceInfo from './prueba9.js';
import networkStatus from './prueba10.js';
import webCam from './prueba11.js';
import getGeolocation from './prueba12.js';
import searchFilters from './prueba13.js';
import draw from './prueba14.js';
import slider from './prueba15.js';
import scrollSpy from './prueba16.js';
import smartVideo from './prueba17.js';
import contactFormValidations from './prueba18.js';
import speechReader from './prueba19.js';

// 1.-Creando un menu de Hamburguesa
document.addEventListener("DOMContentLoaded", e => {
    // Prueba 1
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    // Prueba 2
    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    // Prueba 4
    countdown("countdown", "May 23, 2021 03:23:19", "Feliz Cumple :)")
    // Prueba 5
    scrollTopButton(".scroll-top-btn");
    // Prueba 7
    responsiveMedia(
        "youtube", 
        "(min-width: 1024px)", 
        `<a href="https://www.youtube.com/watch?v=FRFCBOjRj9Y" target="_blank" rel="noopener">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/FRFCBOjRj9Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps", 
        "(min-width: 1024px)", 
        `<a href="https://goo.gl/maps/ESW9FKL6md4BFZ717" target="_blank" rel="noopener">Ver Mapa</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31079.80515805515!2d-74.23007511677528!3d-13.163935614635966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91127df3a774ab1f%3A0xa8754afd6ff9a870!2sPlaza%20Mayor%20de%20Huamanga%2C%20Ayacucho!5e0!3m2!1ses!2spe!4v1601393643793!5m2!1ses!2spe" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
    );
    // Prueba 8
    responsiveTester("responsive-tester");
    // Prueba 9
    userDeviceInfo("user-device");
    // Prueba 11
    webCam("webcam");
    // Prueba 12
    getGeolocation('geolocation');
    // Prueba 13
    searchFilters(".card-filter", ".card");
    // Prueba 14
    draw("#winner-btn", ".player");
    // Prueba 15
    slider();
    // Prueba 16
    scrollSpy();
    // Prueba 17
    smartVideo();
    // Prueba 18
    contactFormValidations();
});

// Prueba 3
document.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

// Prueba 6
darkTheme(".dark-theme-btn", "dark-mode");
// Prueba 10
networkStatus();
// Prueba 19
speechReader();