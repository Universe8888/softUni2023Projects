/**
 * @param {number[]} nums - An array of integers
 * @param {number} target - The target integer
 * @return {number[]} - An array containing the indices of the two numbers in 'nums' that add up to 'target'
 */
function twoSum(nums, target) {
    const numMap = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (numMap.has(complement)) {
        return [numMap.get(complement), i];
      }
  
      numMap.set(nums[i], i);
    }
  
    return [];
  }
  
  // Test the function with different inputs and print the results
  console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
  console.log(twoSum([3, 2, 4], 6));       // Output: [1, 2]
  console.log(twoSum([3, 3], 6));          // Output: [0, 1]
  