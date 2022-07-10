function hola(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Hola " + name);
            resolve(name);
        },2000)
    })
}

function hablar(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("bla bla bla")
            resolve(name);
        },1000)
    })
}

function adios(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adios " + name)
            resolve();
        },1000)
    })
}


// console.log('Inciando proceso ...');
// hola('Carlos', function (name) {
//     adios(name, () => console.log('Terminando proceso ...'))
// })

//----

console.log('Iniciando el proceso...')
hola('Carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((name) => {
        console.log('terminado el proceso...')
    })
    .catch(error => {
        console.error('Ha sucedido un error')
        console.error(error)
    })

