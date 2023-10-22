function studentSupplies(input) {
    let budget = Number(input[0]);
    let students = Number(input[1]);
    let flourPrice = Number(input[2]);
    let eggPrice = Number(input[3]);
    let apronPrice = Number(input[4]);

    let freePackages = Math.floor(students / 5);

    let totalApronPrice = apronPrice * (students + Math.ceil(0.20 * students));
    let totalEggPrice = eggPrice * 10 * students;
    let totalFlourPrice = flourPrice * (students - freePackages);
    
    let totalPrice = totalApronPrice + totalEggPrice + totalFlourPrice;

    if (totalPrice <= budget) {
        return `Items purchased for ${(totalPrice).toFixed(2)}$.`;
    } else {
        return `${(totalPrice - budget).toFixed(2)}$ more needed.`;
    }
}

console.log(studentSupplies([50, 2, 1.0, 0.10, 10.0]));
console.log(studentSupplies([100, 25, 4.0, 1.0, 6.0]));
console.log(studentSupplies([40, 2, 1.0, 0.10, 10.0]));