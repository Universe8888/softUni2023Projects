function muOnline(input) {
    let rooms = input.split('|');
    let health = 100;
    let bitcoins = 0;

    for (const [i, room] of rooms.entries()) {
        let [command, value] = room.trim().split(' ');
        value = Number(value);

        if (command === "potion") {
            let initialHealth = health;
            health = Math.min(100, health + value);
            let amountHealed = health - initialHealth;
            console.log(`You healed for ${amountHealed} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === "chest") {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");