function merge(nums1, m, nums2, n) {
  let i = m - 1; // Last valid element in nums1
  let j = n - 1; // Last element in nums2
  let k = m + n - 1; // Last position in merged array

  // Merge from the end
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // Copy remaining nums2 elements (if any)
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
