function shotTargetsHelper(input) {
    let targets = input[0].split(' ').map(Number);
    let shotCount = 0;

    for (let i = 1; i < input.length; i++) {
        let command = input[i];

        if (command === "End") {
            break;
        }

        let index = Number(command);

        if (index >= 0 && index < targets.length && targets[index] !== -1) {
            let currentValue = targets[index];
            
            targets[index] = -1;
            shotCount++;

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