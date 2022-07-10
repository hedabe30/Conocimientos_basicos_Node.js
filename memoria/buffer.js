//El buffer es un espacio en memoría y se segmenta de bytes expresados de forma hexadecimal

let buffer = Buffer.alloc(4);                   //se asigna espacios en memoria
console.log(buffer);

let buffer1 = Buffer.from([1, 2 , 3]);          //se asigna el espacio y el valor en memoria
console.log(buffer1);

let buffer2= Buffer.from('Hola');               //se crea en memoria el string en en foramto de buffer
console.log(buffer2);

//Imprimiendo el abcdario

let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
    abc[i] = i +97;
}

console.log(abc);
console.log(abc.toString());