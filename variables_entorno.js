//Las variables de entorno se encuentran en el sistema y se peuden manipular o crear
//Pr lo general son usadas para guardar tokens de APi's, url's. e-mails entre otros

let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo Web';

console.log('Mi nombre es: ',nombre);
console.log('Mi web es: ', web);

