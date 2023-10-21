function shootingMovingTargets (input) {
    let targets = input[0].split(' ').map(Number);
    
    for (let i = 1; i < input.length; i++) {
        let commandParts = input[i].split(' ');
        let command = commandParts[0];

        if (command === "End") {
            break;
        }

        let index = Number(commandParts[1]);

        switch (command) {
            case "Shoot":
                let power = Number(commandParts[2]);
                if (index >= 0 && index < targets.length) {
                    targets[index] -= power;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case "Add":
                let value = Number(commandParts[2]);
                if (index >= 0 && index < targets.length) {
                    targets.splice(index, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                let radius = Number(commandParts[2]);
                let start = index - radius;
                let end = index + radius;
                if (start >= 0 && end < targets.length) {
                    targets.splice(start, 2 * radius + 1);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }
    }

    console.log(targets.join('|'));
}

shootingMovingTargets(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]);