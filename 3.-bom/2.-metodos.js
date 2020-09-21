const btnAbrir = document.getElementById("abrir-ventana");
const btnCerrar = document.getElementById("cerrar-ventana");
const btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

btnAbrir.addEventListener("click", e => {
    ventana = window.open("https://www.youtube.com")
});

btnCerrar.addEventListener("click", e => {
    //window.close();
    ventana.close();
});

btnImprimir.addEventListener("click", e => {
    window.print();
});