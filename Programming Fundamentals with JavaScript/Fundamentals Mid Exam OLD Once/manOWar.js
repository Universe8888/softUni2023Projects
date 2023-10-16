function battleShip(input) {
    const ACTIONS = {
        FIRE: "Fire",
        DEFEND: "Defend",
        REPAIR: "Repair",
        STATUS: "Status",
        RETIRE: "Retire"
    };

    const pirateShip = input[0].split(">").map(Number);
    const warship = input[1].split(">").map(Number);
    const maxHealth = Number(input[2]);

    for (let i = 3; i < input.length; i++) {
        const tokens = input[i].split(" ");
        const action = tokens[0];

        switch (action) {
            case ACTIONS.FIRE:
                const fireIdx = Number(tokens[1]);
                const damage = Number(tokens[2]);
                
                if (fireIdx >= 0 && fireIdx < warship.length) {
                    warship[fireIdx] -= damage;
                    if (warship[fireIdx] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    }
                }
                break;

            case ACTIONS.DEFEND:
                const startIdx = Number(tokens[1]);
                const endIdx = Number(tokens[2]);
                const defendDamage = Number(tokens[3]);
                
                if (startIdx >= 0 && endIdx < pirateShip.length) {
                    for (let j = startIdx; j <= endIdx; j++) {
                        pirateShip[j] -= defendDamage;
                        if (pirateShip[j] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }
                }
                break;

            case ACTIONS.REPAIR:
                const repairIdx = Number(tokens[1]);
                const health = Number(tokens[2]);
                
                if (repairIdx >= 0 && repairIdx < pirateShip.length) {
                    pirateShip[repairIdx] += health;
                    if (pirateShip[repairIdx] > maxHealth) {
                        pirateShip[repairIdx] = maxHealth;
                    }
                }
                break;

            case ACTIONS.STATUS:
                const sectionsInNeedOfRepair = pirateShip.filter(section => section < 0.2 * maxHealth).length;
                console.log(`${sectionsInNeedOfRepair} sections need repair.`);
                break;

            case ACTIONS.RETIRE:
                console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b)}`);
                console.log(`Warship status: ${warship.reduce((a, b) => a + b)}`);
                break;
        }
    }
}

battleShip([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
]);
