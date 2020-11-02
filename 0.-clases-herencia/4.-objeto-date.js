console.log(Date());

let fecha = new Date();
console.log(fecha);

// Dia del mes
console.log(fecha.getDate());
// Dia de la semana DLMMJVS => 0123456
console.log(fecha.getDay());
// Mes EFMAMJJASOND => 0123456789 10 11
console.log(fecha.getMonth());
// Año
console.log(fecha.getFullYear());
// Hora
console.log(fecha.getHours());
// Minutos
console.log(fecha.getMinutes());
// Segundos
console.log(fecha.getSeconds());
// Milisegundos
console.log(fecha.getMilliseconds());

// Metodos de fecha
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());

// Calculando fecha de cumpleaños
let cumpleJon = new Date(1996,8,19);
console.log(cumpleJon);


/****
 * moment js => libreria para realizar con las fecha
 * Link => https://momentjs.com/
 */