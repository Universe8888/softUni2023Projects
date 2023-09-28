function sumFirstAndLastEl(arr) { 
    if (arr.length === 0) {
        console.log(0);
        return;
    }
    
    let firstElement = arr[0];
    let lastElement = arr[arr.length - 1];
    let sum = firstElement + lastElement;
    
    console.log(sum);
}

sumFirstAndLastEl([20, 30, 40]);