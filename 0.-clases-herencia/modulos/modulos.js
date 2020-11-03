import saludar, { Saludar, PI } from "./constantes.js";
import { aritmetica as calculos } from "./aritmetica.js";

console.log(PI);
//console.log(aritmetica.sumar(12, 20));
console.log(calculos.sumar(12, 20));
console.log(calculos.restar(12, 20));

saludar();

let saludo = new Saludar();
saludo;
//console.log(saludo);