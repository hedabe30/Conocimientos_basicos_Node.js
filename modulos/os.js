const os = require('os');

console.log(os.arch());             //Arquitectura del sistema
console.log(os.platform());         //Plataforma del sistema(windows, android...)
console.log(os.cpus().length);      //Cantidad de procesadores
console.log(os.constants);          //constantes activas del sistema

const SIZE = 1024;
function kb(bytes) {return bytes/SIZE;}
function mb(bytes) {return kb(bytes)/SIZE;}
function gb(bytes) {return mb(bytes)/SIZE;}

console.log(os.freemem());          //Devuelve la cantidad de memoria ram libre en bytes
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(os.totalmem());         //Memoria ram total

console.log(os.homedir());          //Direccion home del equipo
console.log(os.tmpdir());           //Dirección de archivos temporales           
console.log(os.hostname());         //nombre del equipo 

console.log(os.networkInterfaces());         //muestra todos los datos de las interfaces de red 

