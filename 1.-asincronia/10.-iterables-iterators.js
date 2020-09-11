const iterable = [1,2,3,4];

// Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();
console.log(iterador);

// Recorriendo 
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());

let next = iterador.next();

while (!next.done){
    console.log(next.value);
    next = iterador.next();
}