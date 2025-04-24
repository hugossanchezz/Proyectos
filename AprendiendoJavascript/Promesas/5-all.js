let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'una');
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'dos');
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'tres');
});

let p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'cuatro');
});

let p5 = new Promise((resolve, reject) => {
    reject("promesa 5 fallida");
    // resolve("promesa 5 resuelta");
});

Promise.all([p1, p2, p3, p4, p5]).then((values) => {
    console.log(values);
}, reason => {
    console.log(reason);
});