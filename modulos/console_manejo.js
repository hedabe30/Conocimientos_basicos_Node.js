console.log('Hola mundo');                      //Imprime en consola
console.info('Informando sobre...');             //Imprime información sobre el proceso
console.error('Reportando error de ...');              //Imprime los errores
console.warn('Aviso de riesgo en ...');                //Imprime mensajes de riesgo

//////////Imprimir tablas///////////
var tabla = [
    {
        a: 1,
        b: 'Z',
    },
    {
        a: 2,
        b: 'hola mundo',
    }
]

console.table(tabla);

//Para agrupar los console, es bastante util para codigos largos y sabre de que funcion son los console

console.group('Conversación');
console.log('Hola');
console.group('bla');
console.log('bla bla bla');
console.log('bla bla bla');
console.log('bla bla bla');
console.groupEnd('bla');
console.log('Adios');
console.groupEnd('Conversación');

console.log('otra funcion ...')

//Imprimir en consola con un contador 
console.count('veces'); 
console.count('veces'); 
console.countReset('veces'); 
console.count('veces'); 
console.count('veces'); 
console.count('veces'); 
