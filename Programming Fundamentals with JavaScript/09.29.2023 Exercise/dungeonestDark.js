function dungeonGame(dungeon) {
    let rooms = dungeon[0].split('|');
    let health = 100;
    let coins = 0;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');
        let itemOrMonster = room[0];
        let number = Number(room[1]);

        if (itemOrMonster === 'potion') {
            let healing = 0;
            if (health + number > 100) {
                healing = 100 - health;
                health = 100;
            } else {
                healing = number;
                health += number;
            }
            console.log(`You healed for ${healing} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (itemOrMonster === 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonGame(["zombie 10|bat 20|potion 10|rat 10|chest 100|boss 50|chest 1000"]);