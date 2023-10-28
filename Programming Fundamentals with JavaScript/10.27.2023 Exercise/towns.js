function parseTableToObjects(tableRows) {
    const townObjects = [];

    for (let row of tableRows) {
        const parts = row.split('|').map(part => part.trim());

        const town = parts[0];
        const latitude = parseFloat(parts[1]).toFixed(2);
        const longitude = parseFloat(parts[2]).toFixed(2);

        const townObject = {
            town: town,
            latitude: latitude,
            longitude: longitude
        };

        townObjects.push(townObject);
    }

    for (let obj of townObjects) {
        console.log(obj);
    }
}

parseTableToObjects(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
// parseTableToObjects(['Plovdiv | 136.45 | 812.575']);