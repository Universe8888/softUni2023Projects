function specialSort(arr) {
    
    arr.sort((a, b) => a - b);

    const resultArr = [];

    while (arr.length) {
        if (arr.length) resultArr.push(arr.pop());
        if (arr.length) resultArr.push(arr.shift());
    }

    console.log(resultArr.join(' '));
}

specialSort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);