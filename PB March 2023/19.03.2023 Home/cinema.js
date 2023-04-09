function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);

    let income = 0;

    if(type === 'Premiere') {
        income = rows * colums * 12.0;
    }
    else if( type === 'Normal') {
        income = rows * colums * 7.50;
    }
    else if(type === 'Discount') {
        income = rows * colums * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`);

}

cinema(["Premiere",
"10",
"12"])

