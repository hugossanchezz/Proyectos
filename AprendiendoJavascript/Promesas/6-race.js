let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'uno');
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'dos');
});

Promise.race([p1, p2]).then((value) => {
    // las dos promesas se resuelven pero la uno se resuelve primero
    console.log("Race 1: " + value);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'tres');
});

let p4 = new Promise((resolve, reject) => {
    setTimeout(reject, 500, 'cuatro');
    //si esta fuera mejor pasaría al reason
});

Promise.race([p3, p4]).then((value) => {
    // las dos promesas se resuelven pero la cuatro es rechazada
    console.log("Race 2: " + value);
}, reason => {
    console.log("Race 2(rechazada): " + reason);
}); 