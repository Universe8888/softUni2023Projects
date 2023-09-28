function calculateDifference(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    
    for(let num of arr) {
        if(num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    
    let difference = sumEven - sumOdd;
    console.log(difference);
}

calculateDifference([1, 2, 3, 4, 5, 6]);