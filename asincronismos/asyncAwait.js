async function hola(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Hola " + name);
            resolve(name);
        },1000)
    })
}

async function hablar(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("bla bla bla")
            resolve(name);
        },500)
    })
}

async function adios(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adios " + name)
            resolve();
        },2000)
    })
}

//--

async function main() {
    let nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('termina el proceso');
}

main();
