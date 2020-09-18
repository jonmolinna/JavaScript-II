function saludar(nombre){
    alert(`Hola ${nombre}`);
}

const eventoMultiple = document.getElementById('evento-multiple');
const eventoRemover = document.getElementById('evento-remover');

eventoMultiple.addEventListener('click', () => saludar('Eung'));

// Removiendo
const removerDobleClick = (e) => {
    alert("Removiendo Evento");
    eventoRemover.removeEventListener("dblclick", removerDobleClick);
    eventoRemover.disabled = true;
};

eventoRemover.addEventListener("dblclick", removerDobleClick);