function printUniquePairs(arr, sum) {
    let seen = new Set();

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum && !seen.has(arr[i]) && !seen.has(arr[j])) {
                console.log(`${arr[i]} ${arr[j]}`);
                seen.add(arr[i]);
                seen.add(arr[j]);
            }
        }
    }
}


printUniquePairs([14, 20, 60, 13, 7, 19, 8], 27);