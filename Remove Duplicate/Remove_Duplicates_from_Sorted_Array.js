/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let arraylength = nums.length;
  if (arraylength === 0) return 0;
  let uniqueIndex = 1;
  for (let i = 0; i < arraylength; i++) {
    if (nums[i] !== nums[i + 1]) {
      // Check if the current number is different from the previous one
      nums[uniqueIndex] = nums[i + 1]; // Place the unique number at the uniqueIndex position
      uniqueIndex++; // Move to the next position for a unique number
    }
  }
  return uniqueIndex; // Return the count of unique numbers
};

nums = [1, 1, 2, 6, 6, 7, 8, 8, 9]; // Example usage
console.log(removeDuplicates(nums)); // Output: 6
