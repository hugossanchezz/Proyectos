console.log("Antes de la petición");

fetch('https://reqres.in/api/users')

    .then(
        (respuesta) => {
            console.log("Dentro del primer then");
            console.log(respuesta)
            return respuesta.json();
        }
    ).then(
        (respuesta) => {
            console.log("Dentro del segundo then");
            console.log(respuesta)
            return respuesta;
        }
    ).then(
        (respuesta) => {
            console.log("Dentro del tercer then");
            console.log(respuesta)
        }
    );

console.log("Después de la petición");