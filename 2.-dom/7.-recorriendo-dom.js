const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children); // Accede al hijo
console.log($cards.children[2]); // Accede al hijo 3
console.log($cards.parentElement); // Accede al padre de cards

console.log($cards.firstElementChild); // Primer Elemento
console.log($cards.lastElementChild); // Ultimo Elemento

console.log($cards.previousElementSibling); // Hermano Anterior
console.log($cards.nextElementSibling); // Hermano Posterior

console.log($cards.closest("body")); // Busca el body ancestro mas cercano