function findTopIntegers(arr) {
    let topIntegers = [];
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > max) {
            max = arr[i];
            topIntegers.unshift(arr[i]);
        }
    }

    console.log(topIntegers.join(' '));
}

findTopIntegers([1, 4, 3, 2]);