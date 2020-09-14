this.lugar = "Contexto Global";

function saludar(){
    console.log(`${this.lugar}`)
}

saludar(); // Contexto Global

const obj = {
    lugar: "Contexto Objeto"
}

saludar.call(obj, "Hola", "Eung"); // Hola Eung desde el Contexto Objeto
saludar.apply(obj, ["Adios", "Nikone"]); // Adios Nikone desde el Conexto Objeto

saludar.call(null, "Hola", "Eung"); // Hola Eung desde el Contexto Global
saludar.call(this, "Hola", "Eung"); // Hola Eung desde el Contexto Global
saludar.apply(null, ["Adios", "Nikone"]) // Adios Nikone desde el Conexto Global
saludar.apply(this, ["Adios", "Nikone"]) // Adios Nikone desde el Conexto Global

const persona = {
    nombre: "Eung",
    saludar: function(){
        console.log(`Hola ${this.nombre}`)
    }
}

persona.saludar(); // Hola Eung

const otraPersona = {
    saludar: persona.saludar.bind(persona)  // bind => enlaza al contexto de persona
}

otraPersona.saludar(); // Hola Eung