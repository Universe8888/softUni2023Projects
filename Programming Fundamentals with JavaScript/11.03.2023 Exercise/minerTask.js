function collectResources(input) {
    const resources = {};

    for (let i = 0; i < input.length; i += 2) {
        const resource = input[i];
        const quantity = parseInt(input[i + 1], 10);

        if (!resources[resource]) {
            resources[resource] = 0;
        }
        resources[resource] += quantity;
    }

    for (const [resource, quantity] of Object.entries(resources)) {
        console.log(`${resource} -> ${quantity}`);
    }
}

collectResources(['Gold', '155', 'Silver', '10', 'Copper', '17']);