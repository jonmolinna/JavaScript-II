let aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuarios = {
    propiedad: "Valor",
    [`id_${aleatorio}`]: "Valor Aleatorio"
};

const usuarios = ["Eung", "Nikone", "Jane", "Aylin", "Aysin"];
usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario);

console.log(objUsuarios);