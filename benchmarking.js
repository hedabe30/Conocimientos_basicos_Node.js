//Podemos estudiar el tiempo que tarda cada proceso y asi analizar si el sistema 
//se esta quedando en un bucle o si se puede optimizar algun proceso

console.time('total');
let suma = 0;

console.time('bucle1');

for (let i = 0; i < 1000000; i++) {
    suma += 1;
}
console.timeEnd('bucle1');    //muestra el tiempo en el que tardo realizando el proceso en medio
console.time('bucle2');
for (let i = 0; i < 10000000; i++) {
    suma += 1;
}
console.timeEnd('bucle2');

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('termino el proceso asincrono');
            resolve();
        },1200)
    })
} 

console.time('asincrono');
console.log('inicia el proceso asincrono');
asincrona()
.then(() =>{
    console.timeEnd('asincrono');
})

console.timeEnd('total');