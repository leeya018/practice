// const rotateArray = (arr, n) => {
//   return [...arr.splice(n * -1), ...arr];
// };
// const a = rotateArray([1, 2, 3, 4, 5], 2); // should return [4, 5, 1, 2, 3]
// const b = rotateArray(["a", "b", "c", "d"], 1); // should return ['d', 'a', 'b', 'c']

// console.log(a);
// console.log(b);

const isPoli = (str) => {
  return str === str.split("").reverse().join("");
};
// const isPoli = (str) => {
//   if (str.length <= 1) return true;
//   if (str[0] === str[str.length - 1]) {
//     return isPoli(str.slice(1, -1));
//   } else {
//     return false;
//   }
// };
//  ge tthe
// const longestPalindrome = (str) => {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//       const str_s = str.slice(i, j);
//       if (isPoli(str_s)) {
//         if (str_s.length > res.length) {
//           res = str_s;
//         }
//       }
//     }
//   }
//   return res;
// };

// console.log("abc" === "abc");
// console.log(isPoli("abb"));
// console.log(isPoli("abcba"));
// console.log(isPoli("abccba"));
// console.log(longestPalindrome("bdrsiensientiesraabbccbbalyutlsryults")); //"bab" or "aba"
// console.log(longestPalindrome("babad")); //"bab" or "aba"
// console.log(longestPalindrome("cbbd")); //b // should return

// let s = "cbaebabacd";
// let p = "abc";

// const isMarat = (s, p) => {
//   let j = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === p[j]) {
//       j++;
//     }
//     if (j === p.length) {
//       return true;
//     }
//   }
//   return false;
// };

// let s = "cbaebabarstarsdt";
// let p = "abd";
const isMarat = (s, p) => {
  let i = 0;
  while (s.length !== 0) {
    if (s[0] === p[0]) {
      p = p.slice(1);
    }
    s = s.slice(1);
  }
  if (p.length == 0) return true;
  return false;
};

// const isMarat = (s, p) => {
//   let o = {};
//   const a_s = s.split("");
//   const a_p = p.split("");
//   let a_s_f = a_s.filter((item) => a_p.includes(item));
//4   console.log(a_s_f);
//   for (let i = 0; i < a_s_f.length; i++) {
//     if (!o[a_s_f[i]]) {
//       o[a_s_f[i]] = [];
//     }
//     o[a_s_f[i]].push(i);
//   }

//   for (const [key, value] of Object.entries(o)) {
//     value.sort((a, b) => a - b);
//   }
//   let c = -1;
//   for (const letter of a_p) {
//     const newB = getBigger(o, c, letter);
//     if (newB > c) {
//       c = newB;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

const getBigger = (o, c, l) => {
  if (!o[l]) return false;
  for (const num of o[l]) {
    if (num > c) return num;
  }
  return -1;
};

// const isMarat = (s, p) => {
//   if (s.length === 0 && p.length === 0) return true;
//   if (s.length === 0 && p.length !== 0) return false;
//   if (p[0] === s[0]) {
//     return isMarat(s.slice(1), p.slice(1));
//   } else {
//     return isMarat(s.slice(1), p);
//   }
// };'

// console.log(isMarat(s, p));

// Output:
// [0, 6]

let s = "ADOBECODEBAANC";
let t = "ABC";
// Output: "BANC";

const minWindow = (s, t) => {
  let o = {};
  for (const l of t) {
    o[l] = [];
  }
  for (let i = 0; i < s.length; i++) {
    if (t.includes(s[i])) {
      console.log(i);
      o[s[i]].push(i);
    }
  }
  return o;

  let arr = [];
  for (const l of t) {
    arr.push(o[l]);
  }
  console.log(arr);
  let c = [];
  let shortst = [0, 1000];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr.length === 0) arr.push(j);
    }
  }
};
// const minWindow = (s, t) => {
//   let k = 0;
//   newS = "";
//   let smaller = "9999999999999999999999";
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j < s.length; j++) {
//       if (k == t.length) {
//         if (smaller.length > newS.length) {
//           smaller = newS;
//         }
//         newS = "";
//         break;
//       } else if (s[j] === t[k]) {
//         newS += t;
//         k++;
//       } else {
//       }
//     }
//   }
//   return smaller;
// };

console.log(minWindow(s, t));
