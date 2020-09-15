// Nodos
// Node Element
// Node Text

// Metodos que ya no se utilizan
console.log(document.getElementsByTagName("li")); // Trae todo los elementos li
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

// Metodos que mas se utilizan
console.log(document.getElementById("menu")); // rapido en procesar
console.log(document.querySelector('#menu')); // demora en validar si es id class
console.log(document.querySelector('a')); // Devuelve el primer elemento encontrado
console.log(document.querySelectorAll('a'));
console.log(document.querySelectorAll('.card'));
console.log(document.querySelectorAll('#menu li'));