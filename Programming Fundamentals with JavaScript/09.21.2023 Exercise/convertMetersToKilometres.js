function convertMetersToKilometers(meters) {
    let kilometers = meters / 1000;

    return kilometers.toFixed(2);
}

let meters = 1234;
console.log(convertMetersToKilometers(meters));