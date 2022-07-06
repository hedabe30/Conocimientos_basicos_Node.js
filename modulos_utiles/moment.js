//npm install moment
//Modulo para manejar fechas

const moment = require('moment');

let ahora = moment();                  

console.log(ahora.toString());                          //genera fecha actual

console.log(ahora.format('YYYY/MM/DD - HH:mm'));        //Da formato a la fecha como unolo desee
console.log(ahora.format('DD/MM/YYYY - HH:mm'));