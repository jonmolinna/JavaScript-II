// Creando una Clase
class Animal {
    // el constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    // Metodos
    sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

// Clase y Herencia
class Perro extends Animal {
    constructor(nombre, genero, tamano){
        //con el metodo super() se manda a llamar el constructor de la clase padre
        super(nombre, genero);
        this.tamano = tamano
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar(){
        console.log("Guauuuuu Guauuuuu");
    }
}

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();

console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();