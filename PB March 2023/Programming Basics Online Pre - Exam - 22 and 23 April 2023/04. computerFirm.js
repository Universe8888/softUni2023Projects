function computerFirm(input) {
    let n = parseInt(input[0]);
    let totalSales = 0;
    let totalRating = 0;
    for (let i = 1; i <= n; i++) {
        let currentNumber = parseInt(input[i]);
        let rating = currentNumber % 10;
        let possibleSales = Math.floor(currentNumber / 10);
        let actualSales;
    
        switch (rating) {
            case 2:
                actualSales = 0;
                break;
            case 3:
                actualSales = 0.5 * possibleSales;
                break;
            case 4:
                actualSales = 0.7 * possibleSales;
                break;
            case 5:
                actualSales = 0.85 * possibleSales;
                break;
            case 6:
                actualSales = possibleSales;
                break;
        }
    
        totalSales += actualSales;
        totalRating += rating;
    }
    
    let averageRating = totalRating / n;
    console.log(totalSales.toFixed(2));
    console.log(averageRating.toFixed(2));
}

computerFirm(["3",
"103",
"103",
"103"]);
    