function excursionCalculator(input) {
    const numPeople = parseInt(input[0]);
    const season = input[1].toLowerCase();
    let pricePerPerson;

    if (numPeople <= 5) {
        switch (season) {
            case "spring":
                pricePerPerson = 50;
                break;
            case "summer":
                pricePerPerson = 48.50;
                break;
            case "autumn":
                pricePerPerson = 60;
                break;
            case "winter":
                pricePerPerson = 86;
                break;
        }
    } else {
        switch (season) {
            case "spring":
                pricePerPerson = 48;
                break;
            case "summer":
                pricePerPerson = 45;
                break;
            case "autumn":
                pricePerPerson = 49.50;
                break;
            case "winter":
                pricePerPerson = 85;
                break;
        }
    }

    if (season === "summer") {
        pricePerPerson *= 0.85;
    } else if (season === "winter") {
        pricePerPerson *= 1.08;
    }

    const totalPrice = numPeople * pricePerPerson;
    console.log(`${totalPrice.toFixed(2)} leva.`);
}

excursionCalculator(["20", "winter"]);
