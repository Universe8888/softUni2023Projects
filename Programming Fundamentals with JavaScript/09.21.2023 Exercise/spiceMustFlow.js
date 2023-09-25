function calculateSpice(yield) {
    let totalSpice = 0;
    let daysOperated = 0;

    while(yield >=100) {

        totalSpice += yield - 26;

        yield -= 10;
        
        daysOperated++;
    }

    totalSpice = Math.max(0, totalSpice - 26);

    console.log(daysOperated);
    console.log(totalSpice);
}

calculateSpice(111);