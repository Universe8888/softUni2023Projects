function printObjectProperties(obj) {
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

const city = {
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
};

printObjectProperties(city);