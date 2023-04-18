function fitnessCard(input) {
    let availableSum = Number(input[0]);
    let gender = String(input[1]);
    let age = Number(input[2]);
    let sport = String(input[3]);

    let cost = 0;

    if (gender === "m") {
        switch (sport) {
            case "Gym":
                cost = 42;
                break;
            case "Boxing":
                cost = 41;
                break;
            case "Yoga":
                cost = 45;
                break;
            case "Zumba":
                cost = 34;
                break;
            case "Dances":
                cost = 51;
                break;
            case "Pilates":
                cost = 39;
                break;
        }
    } else if (gender === "f") {
        switch (sport) {
            case "Gym":
                cost = 35;
                break;
            case "Boxing":
                cost = 37;
                break;
            case "Yoga":
                cost = 42;
                break;
            case "Zumba":
                cost = 31;
                break;
            case "Dances":
                cost = 53;
                break;
            case "Pilates":
                cost = 37;
                break;
        }
    }

    if (age <= 19) {
        cost *= 0.8; // Apply 20% discount
    }

    if (availableSum >= cost) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        let moneyNeeded = (cost - availableSum).toFixed(2);
        console.log(`You don't have enough money! You need $${moneyNeeded} more.`);
    }
}

fitnessCard(["50", "m", "23", "Gym"]);
