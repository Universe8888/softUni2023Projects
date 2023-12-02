function destinationMapper(input) {
    let pattern = /([=|/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let validDestinations = [];
    let match;
    while ((match = pattern.exec(input)) !== null) {
        validDestinations.push(match.groups.destination);
    }

    let travelPoints = validDestinations.reduce((acc, destination) => acc + destination.length, 0);
    console.log(`Destinations: ${validDestinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");