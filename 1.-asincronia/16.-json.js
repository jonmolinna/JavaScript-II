const json = {
    cadena: "Eung",
    numero: 24,
    booleano: true,
    arreglo: ["correr", "programar", "cocinar"],
    objeto: {
        email: "jmolina2624@gmail.com",
        instagram: "jon.brehn"
    },
    nulo: null
}

console.log(json);

// Metodos de JSON (JSON.parse()  JSON.stringify())
// JSON.parse() => analiza una notacion JSON, Es decir una cadena de texto
// y convierte a un tipo de dato que Javascript entiende como cadena, numero objeto, arreglo, etc
// String a Tipo de datos JS
console.log("[1,2,3,4,5,6,7]") // String
console.log(JSON.parse("[1,2,3,4,5,6,7]")) // Arreglo

// JSON.stringify() => Convierte un objeto o valor de JavaScript en una cadena de texto Json
// Tipo de datos JS a String
console.log([1,2,3,4,5,6,7]) // Arreglo
console.log(JSON.stringify([1,2,3,4,5,6,7])) // String


// Dato Curioso
// XML y JSON, permite realizar envio de datos
// Libro de JavaScript => Eloquent JavaScript => Link: eloquentjavascript.net