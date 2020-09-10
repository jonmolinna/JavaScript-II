// Set, solo acepta valores unicos en un Array
const set = new Set([1,2,3,3,4,5,true, false, false, {}, {}, 'hola', 'Hola',]);

console.log(set);

// Longitud del Arreglo
console.log(set.size);

// Creando un Nuevo set e Insertando
const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(true)
set2.add({});

console.log(set2);

// Recorriendo Set
for(item of set){
    console.log(item);
}

set2.forEach(item => console.log(item));

// Accediendo a las Posiciones de Set
let arr = Array.from(set);
console.log(arr);
console.log(arr[0]);

// Eliminando Valores Set
set.delete('Hola');

// Verificar si existe el valor
console.log(set.has('hola')); //true

// Limpiar set
set2.clear();