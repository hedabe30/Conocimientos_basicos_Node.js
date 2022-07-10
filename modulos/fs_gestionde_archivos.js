///El modulo fs se utiliza para hacer manipulación de archivos

const fs = require('fs');

//Leer un archivo

function leer(ruta, cb) {
    fs.readFile(ruta,(err, data) =>{
        cb(data.toString());
    })
}

leer(`${__dirname}/archivos_de_prueba/archivo.txt`, console.log)

//Escribir un archivo
function escribir(ruta, contenido, cb){
    fs.writeFile(ruta,contenido,(err) => {
        if(err){
            console.error('No se ha podido escribir', err);
        }else{
            console.log('se ha escrito correctamente');
        }
    })
}

escribir(`${__dirname}/archivos_de_prueba/archivo_1.txt`, 'es un archivo nuevo', console.log)

//borrar un archivo 
function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

borrar(`${__dirname}/archivos_de_prueba/archivo_1.txt`, console.log)
