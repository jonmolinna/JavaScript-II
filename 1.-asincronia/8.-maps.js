// Permite almacenar conjunto de valores asociados a objeto (Objeto Primitivos)
const mapa = new Map();
mapa.set("nombre", "Eung");
mapa.set("apellido", "Contreras");
mapa.set("edad", 24);

console.log(mapa);

// Viendo el Numero de Elementos
console.log(mapa.size); //3

// Verificando Llaves
console.log(mapa.has("nombre")); //true

// Verificando el dato de la Llaves
console.log(mapa.get("nombre"));

// Reescribiendo la llave
mapa.set("nombre", "Nikone");
console.log(mapa.get("nombre"))

// Eliminado una llave
mapa.delete("apellido");

// Recorriendo
for (let [key, value] of mapa){
    console.log(`Llave: ${key}, valor: ${value}`)
}

// Algunas Datos
mapa.set(19, "diecinueve");
mapa.set(false, "false");
mapa.set({}, {})

console.log(mapa)

// Otra Forma de Inicializar una Mapa
const mapa2 = new Map([
    ["nombre", "Nikone"],
    ["edad", 23],
    [null, "nulo"]
]);

console.log(mapa2)

// Separando las Llaves y Datos
const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);