function inventory(input) {
    let inventory = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        const [command, equipment, upgrade] = input[i].split(/ |-/);

        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;

            case 'Trash':
                const index = inventory.indexOf(equipment);
                if (index > -1) {
                    inventory.splice(index, 1);
                }
                break;

            case 'Repair':
                const repairIndex = inventory.indexOf(equipment);
                if (repairIndex > -1) {
                    inventory.splice(repairIndex, 1);
                    inventory.push(equipment);
                }
                break;

            case 'Upgrade':
                const upgradeIndex = inventory.indexOf(equipment);
                if (upgradeIndex > -1) {
                    inventory.splice(upgradeIndex + 1, 0, `${equipment}:${upgrade}`);
                }
                break;
        }
    }

    console.log(inventory.join(' '));
}

inventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);