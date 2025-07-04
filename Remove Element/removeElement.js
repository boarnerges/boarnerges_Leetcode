/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0; // Initialize a counter for the number of elements not equal to val
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // Check if the current element is not equal to val
      nums[k] = nums[i]; // Place the current element at the k-th position
      k++; // Increment k for the next unique element
    }
  }
  return k; // Return the count of elements not equal to val
};

nums = [3, 2, 2, 5, 6, 4, 3, 9, 4, 2, 1, 7, 8, 9, 3]; // Example usage
val = 3; // Value to remove
console.log(removeElement(nums, val)); // Output: 2
console.log(nums);
