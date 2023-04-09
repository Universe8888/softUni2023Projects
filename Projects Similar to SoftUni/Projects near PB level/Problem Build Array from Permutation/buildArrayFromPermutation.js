/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = new Array(nums.length);
    for(let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];

    }

    return ans;
};

let nums1 = [0, 2, 1, 5, 3, 4];
let ans1 = buildArray(nums1);
console.log(ans1); // Output: [0, 1, 2, 4, 5, 3]

let nums2 = [5, 0, 1, 2, 3, 4];
let ans2 = buildArray(nums2);
console.log(ans2); // Output: [4, 5, 0, 1, 2, 3]