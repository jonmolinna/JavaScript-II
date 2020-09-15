// Atributos
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

// Estableciendo nuevos valores a los atributos
document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-PE")
console.log(document.documentElement.lang);

// Estableciendo nuevos valores a los atributos
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com")

// Para remover y consultar atributos
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));


// Data Attribute
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);

// Modificando un Atributo
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = "Canal de Youtube";
console.log($linkDOM.dataset.description)

// Verificando si existe un data atributo
console.log($linkDOM.hasAttribute('data-id'));

// Removiendo un data atributo
$linkDOM.removeAttribute("data-id");