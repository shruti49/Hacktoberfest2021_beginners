// AUTHOR: Suruchi
// JavaScript Concept: Leetcode problem https://leetcode.com/problems/missing-number/
// GITHUB: https://github.com/jhaSuruchi

/*
* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
*/

var missingNumber = function(nums) {
    let i = 0
        
    while(i < nums.length) {
        let correct = nums[i]
        if(nums[i] < nums.length && nums[i] != nums[correct]) {
            swap(nums, i, correct)
        }
        else {
            i++
        }
    }
    for(var j = 0; j < nums.length; j++) {
        if(nums[j] != j) {
            return j
        }
    }
    return nums.length
};

function swap(nums, firstIndex, secondIndex) {
    let temp = nums[firstIndex]
    nums[firstIndex] = nums[secondIndex]
    nums[secondIndex] = temp
}

missingNumber([9,6,4,2,3,5,7,0,1])

// output: 8
