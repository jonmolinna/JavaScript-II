const cards = document.querySelector(".cards");
const template = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();

const cardContent = [
    {
        title: "Tecnologia",
        img: "https://placeimg.com/200/200/tech"
    },
    {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals"
    },
    {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch"
    },
    {
        title: "Persona",
        img: "https://placeimg.com/200/200/people"
    },
    {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature"
    }
];

cardContent.forEach(el => {
    template.querySelector("img").setAttribute("src", el.img);
    template.querySelector("img").setAttribute("alt", el.title);
    template.querySelector("figcaption").textContent = el.title;

    let clone = document.importNode(template, true);
    fragment.appendChild(clone);
});

cards.appendChild(fragment);