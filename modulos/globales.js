// setInterval(()=>..., tiempo)Esta funcion recibe otra funcion como primer parametro que se va a ejecutar
// cada cierto tiempo estipulado en el segundo parametro

i = 0;
let interval = setInterval(() => {                  
    if(i === 3)
        clearInterval(interval);
    console.log('Hola');
    i++;
}, 1000)    

//setImmediate(()=> {...})  ejecuta la funcion inmediatamente

console.log(__dirname);                     //__dirname nos da la ubicación del directorio
console.log(__filename);                    //__filename no

//Para la creacion de variables globales se utiliza: global.nombreDeVariable = ...

global.nuevaVariable = 'Hola mundo';
console.log(nuevaVariable);