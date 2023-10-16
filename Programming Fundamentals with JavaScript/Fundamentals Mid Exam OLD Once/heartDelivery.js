function heartDelivery(input) {

    let neighborhood = input.shift().split('@').map(Number);
    let cupidPosition = 0;

    for (let line of input) {
        if (line === 'Love!') {
            break;
        }
        
        let jumpLength = Number(line.split(' ')[1]);
        cupidPosition += jumpLength;

        if (cupidPosition >= neighborhood.length) {
            cupidPosition = 0;
        }

        neighborhood[cupidPosition] -= 2;

        if (neighborhood[cupidPosition] === 0) {
            console.log(`Place ${cupidPosition} has Valentine's day.`);
        } else if (neighborhood[cupidPosition] < 0) {
            console.log(`Place ${cupidPosition} already had Valentine's day.`);
        }
    }

    console.log(`Cupid's last position was ${cupidPosition}.`);

    let unsuccessfulHouses = neighborhood.filter(h => h > 0).length;
    if (unsuccessfulHouses === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${unsuccessfulHouses} places.`);
    }
}

heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]);

heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]);