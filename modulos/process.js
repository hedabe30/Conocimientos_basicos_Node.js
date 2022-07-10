// const process = require('process');

process.on('beforeExit', () => {                      //Permite ejecutar codigo antes de que el proceso termine
    console.log('El proceso va a terminar')
})
process.on('exit', () => {                            //Permite ejecutar codigo cuando el rpcoeso termina
    console.log('El proceso acabo')
})

process.on('uncaughtException', (err, origen) => {              //Sirve para que el proceso no termine por un error y ejecturar algun codigo
    console.error('Vaya se ha olvidado capturar un error');
    console.error(err);
});


funcionNoExiste();

// process.on('uncaughtRejection')             //Promesas rechazadas y no hay un catch

