console.log("Antes de la petición");

fetch('https://reqres.in/api/users')
    .then(
        (respuesta) => {
            console.log("Dentro del then");
            console.log(respuesta)
        }
    );

console.log("Después de la petición");