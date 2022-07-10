const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF-8');

readableStream.on('data', function(chunk) {
    console.log(chunk);
})

readableStream.on('end', function(chunk) {
    console.log('Termino de leer el archivo con stream');
})

const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cd()
}

let mayus = Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);