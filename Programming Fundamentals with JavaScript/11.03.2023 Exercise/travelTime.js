function sortTravelDestinations(input) {
    const destinations = {};

    for (const entry of input) {
        const [country, town, costStr] = entry.split(" > ");
        const cost = +costStr;

        if (!destinations[country]) {
            destinations[country] = {};
        }

        if (!destinations[country][town] || cost < destinations[country][town]) {
            destinations[country][town] = cost;
        }
    }

    const sortedCountries = Object.keys(destinations).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    for (const country of sortedCountries) {
        const townsList = Object.entries(destinations[country])
            .sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
            .map(([town, cost]) => `${town} -> ${cost}`)
            .join(' ');

        console.log(`${country} -> ${townsList}`);
    }
}

sortTravelDestinations([
    "Bulgaria > Sofia > 25000",
    "aaa > Sofia > 1",
    "aa > Orgrimar > 0",
    "Albania > Tirana > 25000",
    "zz > Aarna > 25010",
    "Bulgaria > Lukovit > 10"
]);