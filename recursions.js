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
// const subsets = powerSet([1, 2, 3]);
// console.log(subsets);

console.log("floor");
console.log(Math.floor(1.2));
console.log(Math.floor(1.5));
console.log(Math.floor(1.7));

console.log("ceil");
console.log(Math.ceil(1.2));
console.log(Math.ceil(1.5));
console.log(Math.ceil(1.7));

console.log("round");
console.log(Math.round(1.2));
console.log(Math.round(1.5)); // the middle act like ceil _ go up
console.log(Math.round(1.7));

//
const o = {
  _: 1,
  ABC: 2,
  DEF: 3,
  GHI: 4,
  JKL: 5,
  MNO: 6,
  PQRS: 7,
  TUV: 8,
  WXYZ: 9,
  " ": 0,
};
const msg = readline();

let r = "";
for (const l of msg.split("")) {
  for (const [key, value] of Object.entries(o)) {
    if (key.includes(l)) {
      const ind = key.indexOf(l) + 1;
      r += new Array(ind).fill(value).join("");
    }
  }
}

print(r);
