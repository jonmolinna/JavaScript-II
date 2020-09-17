const cards = document.querySelector(".cards");
const newCard = document.createElement("figure");
const cloneCards = cards.cloneNode(true);

newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any" >
<figcaption>Any</figcaption>
`;

newCard.classList.add("card");

//cards.replaceChild(newCard, cards.children[2]);
//cards.insertBefore(newCard, cards.firstElementChild);

// Eliminando
//cards.removeChild(cards.lastElementChild);

// Clonando un Elemento
document.body.appendChild(cloneCards);