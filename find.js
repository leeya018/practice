const arr = [1, 2, 3, 3, 3, 4, 4];

// function solve(arr) {
//   const n = arr.length + 1;
//   const sum = (n * (n + 1)) / 2;
//   const sumArr = arr.reduce((acc, item) => acc + item, 0);
//   return sum - sumArr;
// }

// console.log(solve(arr));

//  sort and remove duplications
function sortAndSet(arr) {
  let res = sort(arr);
  res = Array.from(new Set(arr));

  return res;
}
function sort(arr) {
  return arr.sort((a, b) => a - b);
}

// console.log(sortAndSet(arr));

// show the mult according to the indexes and put them in arr
// function show(arr) {
//   let i = 0;
//   let resArr = [];
//   const multall = arr.reduce((acc, item) => acc * item, 1);
//   while (i < arr.length) {
//     let mult = 1;

//     resArr.push(multall / arr[i]);
//     mult = 1;
//     i++;
//   }
//   return resArr;
// }

// console.log(show(arr));

// check for dups and return the duplicate num
function findDups(arr) {
  let o = {};
  for (const item of arr) {
    if (!o[item]) {
      o[item] = 1;
    } else {
      o[item]++;
    }
  }
  console.log(o);
  let dups = [];
  for (const [key, value] of Object.entries(o)) {
    if (value > 1) dups.push(key);
  }
  if (dups.length > 0) return dups;
  return "no dups";
}
// check for dups and return the duplicate num
function findDup(arr) {
  const s_nd_arr = sortAndSet(arr);
  console.log(s_nd_arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
  return "no dups";
}
// console.log(findDups(arr));

const A = [1, 4, 3, 2];
const B = [0, 2, 1, 2];

function getNotIncluded(arr1, arr2) {
  const res = arr1.filter((item) => !arr2.includes(item));
  console.log(arr1);
  console.log(res);
}

console.log(getNotIncluded(A, B));
// console.log(getNotIncluded(B, A));
