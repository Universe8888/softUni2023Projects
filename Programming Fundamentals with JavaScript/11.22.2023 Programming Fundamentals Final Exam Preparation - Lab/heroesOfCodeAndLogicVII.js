function manageHeroes(input) {
    let n = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < n; i++) {
        let [name, hp, mp] = input.shift().split(' ');
        heroes[name] = { HP: Math.min(Number(hp), 100), MP: Math.min(Number(mp), 200) };
    }

    for (let line of input) {
        if (line === "End") break;
        let [command, heroName, arg1, arg2] = line.split(' - ');

        switch (command) {
            case 'CastSpell':
                let mpNeeded = Number(arg1);
                let spellName = arg2;
                if (heroes[heroName].MP >= mpNeeded) {
                    heroes[heroName].MP -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].MP} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case 'TakeDamage':
                let damage = Number(arg1);
                let attacker = arg2;
                heroes[heroName].HP -= damage;
                if (heroes[heroName].HP > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].HP} HP left!`);
                } else {
                    console.log(`${heroName} has been killed by ${attacker}!`);
                    delete heroes[heroName];
                }
                break;
            case 'Recharge':
                let rechargeAmount = Math.min(Number(arg1), 200 - heroes[heroName].MP);
                heroes[heroName].MP += rechargeAmount;
                console.log(`${heroName} recharged for ${rechargeAmount} MP!`);
                break;
            case 'Heal':
                let healAmount = Math.min(Number(arg1), 100 - heroes[heroName].HP);
                heroes[heroName].HP += healAmount;
                console.log(`${heroName} healed for ${healAmount} HP!`);
                break;
        }
    }

    for (let hero in heroes) {
        console.log(`${hero}\n  HP: ${heroes[hero].HP}\n  MP: ${heroes[hero].MP}`);
    }
}

const input = [
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
];
manageHeroes(input);