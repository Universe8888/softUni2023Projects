function profit(input) {
    let oneLv = parseInt(input[0]);
    let twoLv = parseInt(input[1]);
    let fiveLv = parseInt(input[2]);
    let sum = parseInt(input[3]);

    for (let i = 0; i <= oneLv; i++) {
        for (let j = 0; j <= twoLv; j++) {
            for (let k = 0; k <= fiveLv; k++) {
                if (i * 1 + j * 2 + k * 5 === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

profit(["3", "2", "3", "10"]);
