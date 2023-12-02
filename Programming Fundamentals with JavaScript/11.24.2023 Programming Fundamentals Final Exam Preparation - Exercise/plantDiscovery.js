function plantDiscovery(input) {
    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input[i].split("<->");
        plants[plant] = { rarity: Number(rarity), ratings: [] };
    }

    for (let i = n; i < input.length; i++) {
        if (input[i] === "Exhibition") break;

        let [command, details] = input[i].split(": ");
        let [plant, value] = details.split(" - ");

        if (!plants[plant]) {
            console.log("error");
            continue;
        }

        switch (command) {
            case "Rate":
                plants[plant].ratings.push(Number(value));
                break;
            case "Update":
                plants[plant].rarity = Number(value);
                break;
            case "Reset":
                plants[plant].ratings = [];
                break;
            default:
                console.log("error");
        }
    }

    console.log("Plants for the exhibition:");
    for (let plant in plants) {
        let averageRating = plants[plant].ratings.length
            ? (plants[plant].ratings.reduce((a, b) => a + b, 0) / plants[plant].ratings.length).toFixed(2)
            : "0.00";
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRating}`);
    }
}

plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);

// plantDiscovery([
//     "2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"
// ]);