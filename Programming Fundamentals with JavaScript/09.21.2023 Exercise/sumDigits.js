function sumOfDigits(number) {
    let str = number.toString();
    
    let sum = 0;
    
    
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i], 10);
    }
    
    
    return sum;

}

let number = 245678;
console.log(sumOfDigits(number));