// setTimeout
setTimeout(() => {
    console.log('Se ejecuta una sola vez')
}, 1000);

// setInterval
setInterval(() => {
    console.log('Se ejecuta indefinidamente cada cierto intervalo de tiempo')
}, 2000);

setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000);

// Cancela un setTimeout y setInterval
const temporizador = setTimeout(() => {
    console.log('Se ejecuta una sola vez')
}, 1000);

clearTimeout(temporizador);
clearInterval(temporizador);