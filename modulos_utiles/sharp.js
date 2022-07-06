//npm install sharp
//Permite hacer manipulación de imagenes

const sharp = require('sharp');

sharp('original.png')
    .resize(80)                         //cambia tamaño a 80px
    .grayscale()                        //lo pasa a escla de grises
    .toFile('resized.png');