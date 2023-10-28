function registerHeroes(heroData) {
    const heroes = [];

    for (let data of heroData) {
        const [name, levelStr, ...items] = data.split(" / ");
        const hero = {
            name: name,
            level: parseInt(levelStr),
            items: items.length > 0 ? items[0].split(", ") : []
        };
        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        if (hero.items.length) {
            console.log(`items => ${hero.items.join(", ")}`);
        }
    }

}

registerHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

// console.log("------------");

// registerHeroes([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
// ]);