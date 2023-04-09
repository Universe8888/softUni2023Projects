function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let currentMoney = Number(input[index]);
    index++;

    let spendCounter = 0;
    let isSavedMoney = true;
    let daysCounter = 0;

    while(moneyNeeded > currentMoney) {
        let action = input[index];
        index++;
        let tempMoney = Number(input[index]);
        index++;
        daysCounter++;

        switch(action) {
            case 'spend':
                spendCounter++;
                currentMoney -= tempMoney;
                if (currentMoney < 0) {
                    currentMoney = 0;
                }
                if (spendCounter === 5) {
                    isSavedMoney = false;
                }
                break;
            case 'save':
                currentMoney += tempMoney;
                spendCounter = 0;
                break;
        }
        if(!isSavedMoney){
            break;
        }
    }

    if (isSavedMoney) {
        console.log(`You saved the money for ${daysCounter} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(daysCounter);
    }
}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
