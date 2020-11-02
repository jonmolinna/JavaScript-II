/***  Programacion Orientado a Objetos 
 * Clases - Modelo a Seguir.
 * Objetos - Es una instancia de una clase.
 *  Atributos - Es una caracteristca o propiedad del objeto (son variables dentro de un objeto).
 *  Metodos - Son las acciones que un objeto puede realizar (son funciones dentro de un objeto).
 * 
* *** */

const animal = {
    nombres: "Snoopy",
    sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }
}

const animal2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("Hago Sonidos porque estoy vivo")
    }
}


// Creando una Funcion Constructora Version 1
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Metodos
    this.sonar = function(){
        console.log("Hago Sonidos porque estoy vivo")
    }

    this.saludar = function(){
        console.log(`Hola me Llamo ${this.nombre}`);
    }
}

const snoopy = new Animal("Snoopy", "Macho");
const lolaBunny = new Animal("Lola Bunny", "Hembra");
console.log(snoopy, lolaBunny)

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();

console.log("=======================================================")

// Funcion Contructora Version 2
function Ave(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

//Metodos
Ave.prototype.sonar = function(){
    console.log("Hago Sonidos porque estoy vivo")
}

Ave.prototype.saludar = function(){
    console.log(`Hola me Llamo ${this.nombre}`);
}

/********* Herencia Prototipica *******************************/
function Perro(nombre, genero, tamano){
    this.super = Ave;
    this.super(nombre, genero);
    this.tamano = tamano;
}

// Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("Los perros ladran")
}

Perro.prototype.ladrar = function(){
    console.log("Guaauu Guaauu")
}

const snoopy2 = new Perro("Snoopy", "Macho", "Mediano");
const lolaBunn2 = new Ave("Lola Bunny", "Hembra");
console.log(snoopy2, lolaBunn2)

snoopy2.sonar();
snoopy2.saludar();
snoopy2.ladrar();

lolaBunn2.sonar();
lolaBunn2.saludar();