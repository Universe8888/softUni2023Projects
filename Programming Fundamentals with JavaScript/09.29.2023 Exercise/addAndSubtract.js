function modifyArray(nums) {
    let originalSum = 0;
    let modifiedSum = 0;
    
    let modifiedArray = nums.map((num, index) => {
        originalSum += num;
        num = num % 2 === 0 ? num + index : num - index;
        modifiedSum += num;
        return num;
    });
  
    console.log(modifiedArray);
    console.log(originalSum);
    console.log(modifiedSum);
}

modifyArray([5, 15, 23, 56, 35]);