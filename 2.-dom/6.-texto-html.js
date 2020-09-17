const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
El modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para
documentos HTML y XML.
</p>
<p>
Este provee una representacion estructural del documento, permitiendo modificar su contenido y
presentacion visual mediante codigo js
</p>
<p>
<mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores</mark>
</p>
`;

$whatIsDOM.innerText = text; // No es estandar, fue creado para mozilla
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;  // Es como React Fragment 