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
        this.tamano = tamano;
        this.raza = null;
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar(){
        console.log("Guauuuuu Guauuuuu");
    }

    // Un metodo estatico se pueden ejecutar sin ncesidad de instanciar la clase
    static queEres(){
        console.log("Los perros somos animales mamiferos que pertenecemos a la familia de los caninos.")
    }

    // Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
}

Perro.queEres();

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();

console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza);