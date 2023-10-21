function shotTargetsHelper(input) {
    let targets = input[0].split(' ').map(Number); // Convert string numbers to actual numbers
    let shotCount = 0;

    for (let i = 1; i < input.length; i++) {
        let command = input[i];

        if (command === "End") {
            break;
        }

        let index = Number(command);

        // Validate index and check if target isn't already shot
        if (index >= 0 && index < targets.length && targets[index] !== -1) {
            let currentValue = targets[index];
            
            // Mark the target as shot
            targets[index] = -1;
            shotCount++;

            // Adjust values of other targets
            for (let j = 0; j < targets.length; j++) {
                if (targets[j] !== -1) {
                    if (targets[j] > currentValue) {
                        targets[j] -= currentValue;
                    } else {
                        targets[j] += currentValue;
                    }
                }
            }
        }
    }

    console.log(`Shot targets: ${shotCount} -> ${targets.join(' ')}`);
}

shotTargetsHelper(["24 50 36 70", "0", "4", "3", "1", "End"]);
