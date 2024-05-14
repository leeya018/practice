// console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // returns [3, 4]
// console.log(arrayIntersection([10, 20, 10, 30], [10, 10, 20, 30, 40, 50])); // returns [10,20, 30]

// function arrayIntersection(arr1, arr2) {
//   const set1 = new Set(arr1);
//   const set2 = new Set(arr2);
//   const r = [...set1].filter((item) => set2.has(item));
//   return r;
// }
// function arrayIntersection(arr1, arr2) {
//   const set1 = new Set(arr1);
//   const set2 = new Set(arr2);
//   const r = [...set1].filter((item) => [...set2].includes(item));
//   return r;
// }
// function arrayIntersection(arr1, arr2) {
//   const ar1 = Array.from(new Set(arr1));
//   const ar2 = Array.from(new Set(arr2));
//   const r = ar1.filter((item) => ar2.includes(item));
//   return r;
// }

// const a = new Set([1, 2, 3, 4]);
// console.log(a);
// console.log(a.add(4));
// console.log(a.add(5));
// console.log("a.clear()");
// console.log(a.clear());
// console.log(a);
// console.log(a.add(2));
// console.log(a.delete(2));
// console.log(a);
// console.log(a.add(1));
// console.log(a.add(2));
// console.log(a.add(4));
// console.log(a.add(33));
// console.log(a.entries());
// console.log(a.has(22));
// console.log(a.has(33));
// console.log(a.keys());
// console.log(a.size);
// console.log(a.values());

// console.log(
//   mergeIntervals([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );
// returns [[1,6],[8,10],[15,18]]

// console.log(
//   mergeIntervals([
//     [1, 4],
//     [4, 5],
//   ])
// );
// returns [[1,5]]

function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  // Sort intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Array to hold the merged intervals
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let lastMerged = merged[merged.length - 1];
    let current = intervals[i];

    // Check if there is an overlap
    if (current[0] <= lastMerged[1]) {
      // If there's an overlap, merge the current interval with the last merged interval
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // If not, push the current interval as is
      merged.push(current);
    }
  }

  return merged;
}

console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); //6
console.log(findMissingNumber([0, 1, 3])); // 2

function findMissingNumber(arr) {
  const arr_s = arr.sort((a, b) => a - b);
  const min = arr_s[0];
  let arr_n = [];
  let i = min;
  while (i < arr_s.length + min) {
    arr_n.push(i);
    i++;
  }
  const r = arr_n.filter((item) => !arr_s.includes(item));
  return r[0];
}

// function findMissingNumber(arr) {
//   const arr_s = arr.sort((a, b) => a - b);
//   const min = arr_s[0];
//   const max = arr_s[arr_s.length - 1];
//   const sum_n = ((min + max) * (arr_s.length + 1)) / 2;
//   const sum = arr.reduce((acc, item) => item + acc, 0);
//   return sum_n - sum;
// }

// function findMissingNumber(arr) {
//   let arr_d = [...arr];
//   const arr_s = arr.sort((a, b) => a - b);
//   let min = arr_s[0];
//   let i = min;
//   while (i <= arr_s.length + min) {
//     arr_d.push(i);
//     const set = new Set(arr_d);
//     if (arr_d.length === set.size) return i;
//     i++;
//     arr_d.pop();
//   }
// }

// function findMissingNumber(arr) {
//   const arr_s = arr.sort((a, b) => a - b);

//   let min = arr_s[0];
//   let i = min;
//   let j = 0;
//   while (i <= arr_s.length + min) {
//     if (arr_s[j] !== i) return i;
//     i++;
//     j++;
//   }
// }
// rec
// function findMissingNumber(arr) {
//   const arr_s = arr.sort((a, b) => a - b);
//   function findMissingRec(ar, item) {
//     if (ar.length === 0) {
//       return;
//     } else if (ar.length > 0 && Math.abs(ar[0] - item) === 1) {
//       return findMissingRec(ar.slice(1), ar[0]);
//     } else if (Math.abs(ar[0] - item) > 1) {
//       return item + 1;
//     }
//   }

// const data = findMissingRec(arr_s.slice(1), arr_s[0]);
// return data;
// }
// function findMissingNumber(arr) {
//   const min = arr.sort((a, b) => a - b)[0];
//   const sum = arr.reduce((acc, item) => item + acc, 0);
//   let sum_n = 0;
//   let i = min;
//   while (i <= arr.length + min) {
//     sum_n += i;
//     i++;
//   }
//   const r = sum_n - sum;
//   return r;
// }

// function findMissingNumber(arr) {
//   const ar_s = arr.sort((a, b) => a - b);
//   for (let i = 0; i < ar_s.length - 1; i++) {
//     if (ar_s[i + 1] - ar_s[i] > 1) {
//       return ar_s[i] + 1;
//     }
//   }
// }


