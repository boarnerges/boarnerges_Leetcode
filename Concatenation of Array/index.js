/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const n = nums.length;
  const ans = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    ans[i] = ans[i + n] = nums[i];
  }
  return ans;
};

// Another Approach
class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  getConcatenation(nums) {
    let ans = [];
    for (let i = 0; i < 2; i++) {
      for (let num of nums) {
        ans.push(num);
      }
    }
    return ans;
  }
}
