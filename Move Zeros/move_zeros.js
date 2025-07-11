/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0; // slower pointer

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      if (i !== j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      i++;
    }
  }
};
