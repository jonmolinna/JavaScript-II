function cuadradoPromise(value){
    if(typeof value !== 'number'){
        return Promise.reject(`Error, el valor ${value}, ingresado no es un numero`)
    }
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000)
    });
}

async function AsincronaDeclarada(){
    try {
        console.log('Inicio Async Function');

        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        console.log('Fin Async Function');
    } catch (err) {
        console.log(err);
    }
}

AsincronaDeclarada();