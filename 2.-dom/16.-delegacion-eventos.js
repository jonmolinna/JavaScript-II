function flujoEventos(e){
    console.log(`Hola ${this}, lo origina ${e.target.className}`);
};

document.addEventListener("click", (e) => {
    console.log("Click en", e.target);

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert("Hola Eung");
        e.preventDefault();
    }
});