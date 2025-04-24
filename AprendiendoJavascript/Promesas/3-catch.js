console.log("Antes de la petición");

fetch('https://reqresxx.in/api/users')
    .then(
        (respuesta) => {
            console.log("Dentro del then");
            console.log(respuesta)
        }
    )
    .catch(
        (respuesta) => {
            console.log("Dentro del catch");
            console.log(respuesta)
        }
    )
    .finally(
        () => {
            console.log("Dentro del finally");
        }
    );

console.log("Después de la petición");