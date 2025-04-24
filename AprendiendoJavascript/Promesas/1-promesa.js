let primeraPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa resuelta');
    }, 2000);
});

if (typeof Promise !== 'undefined') {
    primeraPromesa.then((result) => {
        console.log(result);
    });
    console.log("antes");
} else {
    console.log("Promesas no soportadas por este entorno");
}