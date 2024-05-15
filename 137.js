// console.log(secondLargest([10, 5, 4, 3, 7, 8])); // Should print 8
// console.log(secondLargest([5, 5, 5, 5])); // Should print null
// console.log(secondLargest([1])); // Should print null
// console.log(secondLargest([3, 3, 2, 1])); // Should print 2

// function secondLargest(arr) {
//   if (arr.length < 2) return null;
//   let arr_s = arr.sort((a, b) => b - a);
//   let first = arr[0];
//   let i = 1;
//   while (i < arr.length) {
//     if (arr_s[i] < first) {
//       return arr_s[i];
//     }

//     i++;
//   }
//   return null;
// }

// function secondLargest(arr) {
//   let arr_s = Array.from(new Set(arr));
//   if (arr_s.length < 2) return null;
//   arr_s.sort((a, b) => b - a);
//   // console.log(arr_s);
//   if (arr_s[1] === arr_s[0]) return null;
//   else return arr_s[1];
// }

// console.log(isAnagram("listen", "silent")); // Should print true
// console.log(isAnagram("hello", "billion")); // Should print false
// console.log(isAnagram("Dormitory", "dirty room")); // Should print true
// console.log(isAnagram("The eyes", "They see")); // Should print true

// function isAnagram(s1, s2) {
//   let s_1 = s1
//     .split(" ")
//     .join("")
//     .split("")
//     .map((i) => i.toLowerCase())
//     .sort();

//   let s_2 = s2
//     .split(" ")
//     .join("")
//     .split("")
//     .map((i) => i.toLowerCase())
//     .sort();

//   while (s_1.length > 0) {
//     if (s_1[0] === s_2[0]) {
//       s_1 = s_1.slice(1);
//       s_2 = s_2.slice(1);
//     } else {
//       return false;
//     }
//   }

//   return s_1.length === 0;
// }

// function isAnagram(s1, s2) {
//   let s_1 = s1
//     .split(" ")
//     .map((i) => i.toLowerCase())
//     .join("");
//   let s_2 = s2
//     .split(" ")
//     .map((i) => i.toLowerCase())
//     .join("");
//   if (s_1.length !== s_2.length) return false;
//   let c = 0;
//   for (let i = 0; i < s_1.length; i++) {
//     if (s_2.includes(s_1[i])) c++;
//   }
//   // console.log(c);

//   return c === s_1.length;
// }

// console.log(removeDuplicates([1, 2, 3, 1, 2, 4])); // Should print [1, 2, 3, 4]
// console.log(removeDuplicates([5, 5, 5, 5])); // Should print [5]
// console.log(removeDuplicates([1, 2, 3, 4, 5])); // Should print [1, 2, 3, 4, 5]
// console.log(removeDuplicates([])); // Should print []

// function removeDuplicates(arr) {
//   return Array.from(new Set(arr));
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Should print "jumped"
// console.log(findLongestWord("Hello world")); // Should print "Hello"
// console.log(findLongestWord("JavaScript is awesome")); // Should print "JavaScript"
// console.log(findLongestWord("")); // Should print ""

// function findLongestWord(sentence) {
//   const res = sentence.split(" ").sort((a, b) => b.length - a.length)[0];
//   return res;
// }

// function double(num) {
//   return num * 2;
// }

// console.log(myMap([1, 2, 3, 4], double)); // Should print [2, 4, 6, 8]
// console.log(myMap([1, 2, 3, 4], (num) => num + 1)); // Should print [2, 3, 4, 5]
// console.log(myMap([], double)); // Should print []

// function myMap(arr, callback) {
//   let arrT = [...arr];
//   for (let i = 0; i < arrT.length; i++) {
//     arrT[i] = callback(arrT[i]);
//   }
//   return arrT;
// }

//  this is nice, while using a quesue
console.log(isBalanced("()")); // Should print true
console.log(isBalanced("()[]{}")); // Should print true
console.log(isBalanced("{()[]}")); // Should print true
console.log(isBalanced("(]")); // Should print false
console.log(isBalanced("([)]")); // Should print false
console.log(isBalanced("{[]}")); // Should print true

function isBalanced(str) {
  const items = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const keys = Object.keys(items);

  let q = [];
  let i = 0;
  while (i < str.length) {
    if (keys.includes(str[i])) {
      q.push(str[i]);
    } else {
      if (items[q.pop()] !== str[i]) {
        return false;
      }
    }
    i++;
  }
  return q.length === 0 && i === str.length;
}
