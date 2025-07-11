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

//Alternative solution

function moveZeroes(nums) {
  let i = 0;

  // Move non-zero elements to the front
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
  }

  // Fill remaining positions with zeros
  for (; i < nums.length; i++) {
    nums[i] = 0;
  }
}
