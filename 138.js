//  window check  max and return the array .of max

// const getMax = (arr, k) => {
//   let newArr = [];
//   for (let i = 0; i <= arr.length - k; i++) {
//     const max = arr.slice(i, i + k).sort((a, b) => b - a)[0];
//     newArr.push(max);
//   }
//   return newArr;
// };

// const getMax = (arr, k) => {
//   let newArr = [];
//   for (let i = 0; i <= arr.length - k; i++) {
//     const max = Math.max(...arr.slice(i, i + k));
//     newArr.push(max);
//   }
//   return newArr;
// };

// console.log(getMax([1, 3, -1, -3, 5, 3, 6, 7], 3));
// console.log(getMax([9, 11, 8, 5, 7, 10], 2));

// check that the target sun can be riched from sum of some items in the array .
// if so , return the items
// const getIndsSum = (arr, target) => {
//   let sum = 0;
//   let indexes = [];
//   let ind = 0;

//   function getIndsSumRec(arr, target, sum, indexes, ind) {
//     if (arr.length === ind) return indexes;
//     if (arr[ind] + sum < target) {
//       indexes.push(ind);
//       return getIndsSumRec(arr, target, sum, indexes, ind + 1);
//     }
//     if (arr[ind] + sum === target) {
//       return indexes;
//     }
//     if (arr[ind] + sum > target) {
//       return getIndsSumRec(arr, target, sum, indexes, ind + 1);
//     }
//   }
//   const res = getIndsSumRec(arr, target, sum, indexes, ind);
//   return res;
// };

// console.log(getIndsSum([2, 44, 6, 11, 1, 15], 9));

// const getIndsSum = (arr, target) => {
//   let sum = 0;
//   let indexes = [];
//   let ind = 0;

//   function getIndsSumRec(arr, target, sum, indexes, ind) {
//     if (arr.length === ind) {
//       return indexes;
//     }
//     if (arr[ind] + sum < target) {
//       indexes.push(ind);
//       return getIndsSumRec(arr, target, sum, indexes, ind + 1);
//     }
//     if (arr[ind] + sum === target) {
//       indexes.push(ind);

//       return indexes;
//     }
//     if (arr[ind] + sum > target) {
//       return getIndsSumRec(arr, target, sum, indexes, ind + 1);
//     }
//   }
//   const res = getIndsSumRec(arr, target, sum, indexes, ind);
//   return res;
// };

//  this from GPT
const getIndsSum = (arr, target) => {
  function getIndsSumRec(arr, target, sum, indexes, ind) {
    if (sum === target) {
      return indexes.slice(); // Return a copy of indexes
    }
    if (ind === arr.length) {
      return null; // No combination found
    }

    // Include the current element
    indexes.push(ind);
    let withCurrent = getIndsSumRec(
      arr,
      target,
      sum + arr[ind],
      indexes,
      ind + 1
    );
    if (withCurrent) {
      return withCurrent;
    }
    // Backtrack
    indexes.pop();

    // Exclude the current element
    return getIndsSumRec(arr, target, sum, indexes, ind + 1);
  }

  const result = getIndsSumRec(arr, target, 0, [], 0);
  return result ? result : "not possible";
};

console.log(getIndsSum([2, 44, 6, 11, 15], 9));
console.log(getIndsSum([2, 44, 6, 11, 1, 15], 9));

//  this from GPT
// const getIndsSum = (nums, target) => {
//   function findCombinations(startIndex, target, currentCombination) {
//     // Base case: if target is met, return the current combination of indices
//     if (target === 0) {
//       return [currentCombination];
//     }
//     // Base case: if target is less than zero or startIndex exceeds array length, return empty
//     if (target < 0 || startIndex >= nums.length) {
//       return "ffo Possible";
//     }

//     // Recursive case: explore two possibilities, including or excluding the current element
//     let withCurrent = findCombinations(
//       startIndex + 1,
//       target - nums[startIndex],
//       currentCombination.concat(startIndex)
//     );
//     let withoutCurrent = findCombinations(
//       startIndex + 1,
//       target,
//       currentCombination
//     );

//     // Combine results from both possibilities
//     return withCurrent.concat(withoutCurrent);
//   }

//   let combinations = findCombinations(0, target, []);
//   // Assuming we need one valid combination, we return the first combination found
//   // You can return combinations if you need all valid combinations
//   return combinations.length > 0 ? combinations[0] : [];
// };

// Example usage
// const nums = [2, 44, 6, 11, 15];
// const target = 9;
// console.log(getIndsSum(nums, target)); // Output: [0, 2, 3]

// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// console.log(twoSum([2, 7, 11, 15], 8)); // Output: [0, 1]
