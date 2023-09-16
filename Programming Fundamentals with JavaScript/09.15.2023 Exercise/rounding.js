function roundNumber(num, precision) {
    if (precision > 15) {
        precision = 15;
    }

    let rounded = num.toFixed(precision);
    console.log(parseFloat(rounded));
}

roundNumber(3.1415926535897932384626433832795, 2);