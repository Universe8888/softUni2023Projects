function manageCities(input) {
    let cities = {};

    while (input[0] !== "Sail") {
        let [city, pop, gold] = input.shift().split("||");
        if (!cities[city]) cities[city] = { population: 0, gold: 0 };
        cities[city].population += Number(pop);
        cities[city].gold += Number(gold);
    }
    
    input.shift();

    for (let event of input) {
        if (event === "End") break;
        let [action, town, value1, value2] = event.split("=>");

        switch (action) {
            case "Plunder":
                cities[town].population -= Number(value1);
                cities[town].gold -= Number(value2);
                console.log(`${town} plundered! ${value2} gold stolen, ${value1} citizens killed.`);
                if (cities[town].population <= 0 || cities[town].gold <= 0) {
                    console.log(`${town} has been wiped off the map!`);
                    delete cities[town];
                }
                break;
            case "Prosper":
                if (Number(value1) < 0) {
                    console.log("Gold added cannot be a negative number!");
                    break;
                }
                cities[town].gold += Number(value1);
                console.log(`${value1} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
                break;
        }
    }

    let cityNames = Object.keys(cities);
    if (cityNames.length > 0) {
        console.log(`Ahoy, Captain! There are ${cityNames.length} wealthy settlements to go to:`);
        cityNames.forEach(city => {
            console.log(`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`);
        });
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

const input = [
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
];
manageCities(input);