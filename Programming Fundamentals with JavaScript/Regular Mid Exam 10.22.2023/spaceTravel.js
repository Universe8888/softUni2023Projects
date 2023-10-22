function travelRoute(commands) {
    let fuel = parseInt(commands[1], 10);
    let ammo = parseInt(commands[2], 10);

    function failMission() {
        console.log("Mission failed.");
        return false;
    }

    function travel(distance) {
        if (fuel < distance) return failMission();
        console.log(`The spaceship travelled ${distance} light-years.`);
        fuel -= distance;
        return true;
    }

    function encounterEnemy(armor) {
        if (ammo >= armor) {
            console.log(`An enemy with ${armor} armour is defeated.`);
            ammo -= armor;
        } else if (fuel >= armor * 2) {
            console.log(`An enemy with ${armor} armour is outmaneuvered.`);
            fuel -= armor * 2;
        } else {
            return failMission();
        }
        return true;
    }

    function repair(amount) {
        const addedAmmo = amount * 2;
        ammo += addedAmmo;
        fuel += amount;
        console.log(`Ammunitions added: ${addedAmmo}.`);
        console.log(`Fuel added: ${amount}.`);
    }

    function reachTitan() {
        console.log("You have reached Titan, all passengers are safe.");
    }

    const actions = commands[0].split('|');
    for (const action of actions) {
        const parts = action.trim().split(' ');
        const command = parts[0];
        const value = parseInt(parts[1], 10);

        let successful = true;
        switch (command) {
            case 'Travel':
                successful = travel(value);
                break;

            case 'Enemy':
                successful = encounterEnemy(value);
                break;

            case 'Repair':
                repair(value);
                break;

            case 'Titan':
                reachTitan();
                return;

            default:
                break;
        }

        if (!successful) return;
    }
}
travelRoute(['Travel 10|Enemy 30|Repair 15|Titan', '50', '80']);
// travelRoute(['Travel 20|Enemy 50|Enemy 50|Enemy 10|Repair 15|Enemy 50|Titan', '60', '100']);