///try{}catch(error){}      --> esta función captura los errores para no romper el funcionamiento
//dentro del try entra la funcion que puede llegar a fallar y en el catch se ejecuta lo que vaya a pasar si da error


function otraFuncion() {
    seRompe()
}

const seRompe = () => {
    let a=1
    let c = a + z;  
}

try{
    seRompe()
}catch(error){
    console.error('Algo fallo!!!');
    console.error(error.message);
}

//Para asincronismos hay que generar dentro de la funcion otro try{}catch(err){}

function asyncFunction(cb){
    setTimeout(() => {
        try{
            return 3 + y;
        }catch(err){
            console.error('error en mi fucnión asincrona')
            cb(err)
        }
    },1000)
}

try{
    asyncFunction((err) => console.log('Hay error: ', err.message))
}catch(error){
    console.error('Algo fallo!!!');
    console.error(error.message);
}