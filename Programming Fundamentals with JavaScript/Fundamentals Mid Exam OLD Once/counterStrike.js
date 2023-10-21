function energyCounter(input) {
    let initialEnergy = Number(input[0]);
    let wonBattlesCount = 0;

    for (let i = 1; i < input.length; i++) {
        let distance = input[i];
        
        // Check for end of battle command
        if (distance === "End of battle") {
            break;
        }
        
        distance = Number(distance);

        // Check if there's enough energy
        if (initialEnergy >= distance) {
            initialEnergy -= distance;
            wonBattlesCount++;

            // Check if every third battle is won
            if (wonBattlesCount % 3 === 0) {
                initialEnergy += wonBattlesCount;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattlesCount} won battles and ${initialEnergy} energy`);
            return;
        }
    }

    console.log(`Won battles: ${wonBattlesCount}. Energy left: ${initialEnergy}`);
}

energyCounter(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);