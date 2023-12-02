// function needForSpeedIII(input) {
//     let cars = {};
//     let n = Number(input.shift());

//     for (let i = 0; i < n; i++) {
//         let [car, mileage, fuel] = input.shift().split("|");
//         cars[car] = { mileage: Number(mileage), fuel: Number(fuel) };
//     }
//     let command = input.shift();
//     while (command !== "Stop") {
//         let [action, car, param1, param2] = command.split(" : ");

//         if (action === "Drive") {
//             let distance = Number(param1);
//             let requiredFuel = Number(param2);

//             if (cars[car].fuel < requiredFuel) {
//                 console.log("Not enough fuel to make that ride");
//             } else {
//                 cars[car].mileage += distance;
//                 cars[car].fuel -= requiredFuel;
//                 console.log(`${car} driven for ${distance} kilometers. ${requiredFuel} liters of fuel consumed.`);

//                 if (cars[car].mileage >= 100000) {
//                     delete cars[car];
//                     console.log(`Time to sell the ${car}!`);
//                 }
//             }
//         } else if (action === "Refuel") {
//             let refuelAmount = Number(param1);
//             let currentFuel = cars[car].fuel;
//             let maxFuel = 75;

//             if (currentFuel + refuelAmount > maxFuel) {
//                 refuelAmount = maxFuel - currentFuel;
//             }

//             cars[car].fuel += refuelAmount;
//             console.log(`${car} refueled with ${refuelAmount} liters`);
//         } else if (action === "Revert") {
//             let kilometers = Number(param1);
//             cars[car].mileage -= kilometers;

//             if (cars[car].mileage < 10000) {
//                 cars[car].mileage = 10000;
//             } else {
//                 console.log(`${car} mileage decreased by ${kilometers} kilometers`);
//             }
//         }

//         command = input.shift();
//     }

//     Object.entries(cars).forEach(([car, { mileage, fuel }]) => {
//         console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
//     });
// }

// needForSpeedIII([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
// ]);

//100/100

function needForSpeedIII(input) {
    const MAX_MILEAGE = 100000;
    const MIN_MILEAGE = 10000;
    const MAX_FUEL = 75;
    let cars = {};
    let n = Number(input.shift());
    
    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split("|");
        cars[car] = { mileage: Number(mileage), fuel: Number(fuel) };
    }

    let command = input.shift();
    while (command !== "Stop") {
        let [action, car, param1, param2] = command.split(" : ");
        if (!cars[car]) {
            command = input.shift();
            continue;
        }

        switch (action) {
            case "Drive":
                driveCar(car, Number(param1), Number(param2));
                break;
            case "Refuel":
                refuelCar(car, Number(param1));
                break;
            case "Revert":
                revertMileage(car, Number(param1));
                break;
        }
        command = input.shift();
    }

    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    }

    function driveCar(car, distance, fuel) {
        if (cars[car].fuel < fuel) {
            console.log("Not enough fuel to make that ride");
        } else {
            cars[car].mileage += distance;
            cars[car].fuel -= fuel;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

            if (cars[car].mileage >= MAX_MILEAGE) {
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }
        }
    }

    function refuelCar(car, amount) {
        let fuelNeeded = MAX_FUEL - cars[car].fuel;
        let refuelAmount = Math.min(amount, fuelNeeded);

        cars[car].fuel += refuelAmount;
        console.log(`${car} refueled with ${refuelAmount} liters`);
    }

    function revertMileage(car, kilometers) {
        cars[car].mileage = Math.max(cars[car].mileage - kilometers, MIN_MILEAGE);
        if (cars[car].mileage > MIN_MILEAGE) {
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }
    }
}

needForSpeedIII([
        '4',
        'Lamborghini Veneno|11111|74',
        'Bugatti Veyron|12345|67',
        'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',
        'Drive : Koenigsegg CCXR : 382 : 82',
        'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1',
        'Refuel : Lamborghini Veneno : 40',
        'Revert : Bugatti Veyron : 2000',
        'Stop'
    ]);

    //100/100 - 2nd solution - with switch case and functions