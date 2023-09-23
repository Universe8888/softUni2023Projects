function calculateExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBreaks = 0;

    for (let i = 1; i <= lostFights; i++) {
        let isHelmetBroken = false;
        let isSwordBroken = false;

        if (i % 2 === 0) {
            expenses += helmetPrice;
            isHelmetBroken = true;
        }

        if (i % 3 === 0) {
            expenses += swordPrice;
            isSwordBroken = true;
        }

        if (isHelmetBroken && isSwordBroken) {
            expenses += shieldPrice;
            shieldBreaks++;
            if (shieldBreaks % 2 === 0) {
                expenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

calculateExpenses(23, 12.50, 21.50, 40, 200);