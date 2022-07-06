//npm install bcrypt   --> cifrar información y psar a hash
//-----------//
//bcrypt.hash(xx, xx, xx(err, hash){}) 
// -->primer parametro: variable a hacer hash
// -->segundo parametro: numero de rondas recomendable 5
// -->tercer parametro: función con parametro de error y el hash
//-----------//
//bcrypt.compare(xx, xx, xx(err, res){}) --> comparlos dos primeros parametros para saber si coinciden 
// -->primer parametro: variable a la que se le ha hecho hash anteriormente
// -->segundo parametro: hash saacado de la variable
// -->tercer parametro: función con parametro de error y resultado, devuelve true o false



const bcrypt = require('bcrypt');

const password = '1234segura';

bcrypt.hash(password, 5, (error, hash) => {
    console.log(hash)

    bcrypt.compare(password, hash, function(err, res) {     
        // console.error(error);
        console.log(res);
    })
})               