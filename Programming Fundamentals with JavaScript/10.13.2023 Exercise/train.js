function manageTrain(input) {
    const wagons = input[0].split(' ').map(Number);
    const maxCapacity = Number(input[1]);

    input.slice(2).forEach(instruction => {
        const [command, passengers] = instruction.split(' ');

        if (command === "Add") {
            wagons.push(Number(passengers));
        } else {
            const passengersToAdd = Number(command);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengersToAdd <= maxCapacity) {
                    wagons[i] += passengersToAdd;
                    break;
                }
            }
        }
    });

    console.log(wagons.join(' '));
}

manageTrain(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);