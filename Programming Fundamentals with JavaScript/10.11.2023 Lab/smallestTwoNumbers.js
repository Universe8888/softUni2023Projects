function printTwoSmallest(nums) {
    
    nums.sort((a, b) => a - b);

    console.log(nums.slice(0, 2).join(' '));

}

printTwoSmallest([30, 15, 50, 5]);