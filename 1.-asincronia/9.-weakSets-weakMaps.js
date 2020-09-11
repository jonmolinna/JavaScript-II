// Weak Sets
const ws = new WeakSet();

let valor1 = {"valor1": 1};
let valor2 = {"valor2": 2};
let valor3 = {"valor3": 3};

ws.add(valor1);
ws.add(valor2);
console.log(ws);

// Consultar
console.log(ws.has(valor1)); //true
console.log(ws.has(valor3)); //false

// Eliminar
ws.delete(valor2);


// WeakMaps
/*
const wm = new WeakMap([
    ["nombre","shado"],
    ["edad",7],
    ["animal","perro"],
    [null,"nulo"]
]);  de esta forma no se inserta para WeakMaps y Weak Sets */

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

// Verificando las llaves
console.log(wm.has(llave1)); //true
console.log(wm.has(llave3)); //false

// Verificando el dato del llave
console.log(wm.get(llave1));

// Eliminando Llaves
wm.delete(llave2);