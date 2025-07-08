function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap characters at left and right pointers
    [s[left], s[right]] = [s[right], s[left]];

    // Move pointers towards the center
    left++;
    right--;
  }

  // The array is reversed in-place, no need to return anything
  // (though in JavaScript we can return it for testing purposes)
  return s;
}

// Example usagelet str = ['h', 'e', 'l', 'l', 'o']; // Example usage
let str = ["h", "e", "l", "l", "o"];
console.log(reverseString(str)); // Output: ['o', 'l', 'l', '   h', 'e']
