function numberOcc(nums, operations) {
    const [take, deleteCount, searchNum] = operations;
    
    const takenNums = nums.slice(0, take);

    takenNums.splice(0, deleteCount);
    
    const occurrences = takenNums.filter(num => num === searchNum).length;

    console.log(`Number ${searchNum} occurs ${occurrences} times.`);

}

numberOcc([5, 2, 3, 4, 1, 6], [5, 2, 3]);