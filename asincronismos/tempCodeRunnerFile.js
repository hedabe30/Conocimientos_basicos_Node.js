function hola(name, miCallback) {
    setTimeout(function () {
        console.log("Hola " + name);
        miCallback(name);
    },2000)
}

function adios(name, miOtroCallback) {
    setTimeout(() => {
        console.log("Adios " + name)
        miOtroCallback();
    },1000)
}

console.log('Inciando proceso ...');
hola('Carlos', function (name) {
    adios(name, () => console.log('Terminando proceso ...'))
})
