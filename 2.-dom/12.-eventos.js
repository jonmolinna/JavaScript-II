function holaMundo(){
    alert("Hola Mundo");
}

const eventoSemantico = document.getElementById("evento-semantico");
const eventoMultiple = document.getElementById("evento-multiple");

eventoSemantico.onclick = holaMundo;
eventoSemantico.onclick = function(e){
    alert("Hola Mundo Manejador de Eventos Semantico");
    console.log(e);
}

eventoMultiple.addEventListener("click", holaMundo);
eventoMultiple.addEventListener('click', (e) => {
    alert("Hola Mundo Menajador de evento Multiple")
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});