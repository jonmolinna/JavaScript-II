const persona = {
    nombre:"",
    apellido:"",
    edad: 0
}

const manejador = {
    set(obj, prop, valor){
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.log(`La propiedad ${prop} no existe en el objeto persona`)
        }

        if(
            (prop === "nombre" || prop === "apellido") && !(/^[A-Za-zÑñáéíóú\s]+$/g.test(valor))
        ){
            return console.error(`La propiedad ${prop} solo acepta letras y espacios`)
        }

        obj[prop] = valor
    }
}

const eung = new Proxy(persona, manejador);
eung.nombre = "Eung";
eung.apellido = "Contreras";
eung.edad = 24;
eung.twitter = "@eung"
console.log(eung);