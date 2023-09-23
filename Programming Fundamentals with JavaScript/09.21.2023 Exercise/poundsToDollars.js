function convertPoundsToDollars(pounds) {
    const conversionRate = 1.31;

    let dollars = (pounds * conversionRate).toFixed(3);

    return dollars;
}

let pounds = 20;

console.log(convertPoundsToDollars(pounds));