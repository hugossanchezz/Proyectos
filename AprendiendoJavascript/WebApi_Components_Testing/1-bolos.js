
let asyncAction = new Promise((resolve, reject) => {
    let tiempo = Math.floor(Math.random() * 2001);
    let tirada = Math.floor(Math.random() * 10);

    if (tirada > 0) {
        setTimeout(() => resolve(tirada), tiempo);
    } else {
        setTimeout(() => reject(tirada), tiempo);
    }
});

asyncAction.then(
    hits => {
        if (hits == 9) {
            console.log("Strike");
        } else {
            console.log(`Has tirado ${hits} bolos`);
        }
    },
    fail => {
        console.error("Ni uno");
    }
);