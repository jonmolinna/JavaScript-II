function* iterable(){
    yield "hola";
    console.log('Hola Mundo');
    yield "hola 2";
    console.log('Seguimos con mas instrucciones');
    yield "hola 3";
    yield "hola 4"
}

let iterador = iterable();
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());

for(let y of iterador){
    console.log(y)
}

// Convertiendo a un Array
const arr = [...iterable()];
console.log(arr)