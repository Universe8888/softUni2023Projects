function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let puzzlePrice = 2.60;
    let talkingDollPrice = 3;
    let teddyBearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let totalPrice =
        puzzleCount * puzzlePrice +
        talkingDollCount * talkingDollPrice +
        teddyBearCount * teddyBearPrice +
        minionCount * minionPrice +
        truckCount * truckPrice;

    if (puzzleCount + talkingDollCount + teddyBearCount + minionCount + truckCount >= 50) {
        totalPrice *= 0.75;
    }

    totalPrice *= 0.9;

    let remainingMoney = (totalPrice - tripPrice).toFixed(2);

    if (remainingMoney >= 0) {
        console.log(`Yes! ${remainingMoney} lv left.`);
    } else {
        console.log(`Not enough money! ${(remainingMoney * -1).toFixed(2)} lv needed.`);
    }
}




toyShop(["320",
"8",
"2",
"5",
"5",
"1"])
