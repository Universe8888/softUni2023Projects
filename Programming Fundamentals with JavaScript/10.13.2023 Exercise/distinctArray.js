function removeRepeatingElements(arr) {
    const seen = new Set();
    const uniqueElements = [];
    for (const num of arr) {
        if (!seen.has(num)) {
            uniqueElements.push(num);
            seen.add(num);
        }
    }
    console.log(uniqueElements.join(' '));
}

removeRepeatingElements([7, 8, 9, 7, 2, 3, 4, 1, 2]);