// factorial
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(5));

function powerSet(array) {
  let result = [];

  // Recursive function to generate subsets
  function generate(current, index) {
    // Push the current subset into the result array
    result.push(current.slice());

    for (let i = index; i < array.length; i++) {
      // Include the current element and move to the next
      current.push(array[i]);
      generate(current, i + 1);
      // Backtrack to remove the current element before the next iteration
      current.pop();
    }
  }

  // Start the recursion with an empty subset and at index 0
  generate([], 0);
  return result;
}

// Example usage:
const subsets = powerSet([1, 2, 3, 4, 5]);
console.log(subsets);
