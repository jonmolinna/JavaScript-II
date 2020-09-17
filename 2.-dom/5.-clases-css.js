const $card = document.querySelector(".card");

console.log($card.className); //string card
console.log($card.classList); // DOMtokenLinst

// Insertado y verficando una clase
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

// Quitando una clase
$card.classList.remove("rotate-45");

// Iserta o remove una clase
$card.classList.toggle("rotate-45");

// Reemplazar una Clase
$card.classList.replace("rotate-45","rotate-135");

// Reemplazando Varias Clases
$card.classList.add("opacity-80", "sepia"); // too func con toggle, replace