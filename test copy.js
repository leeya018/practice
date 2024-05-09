//  place the times in the object and count the amount of each one

const arr = [1, 33, 2, 3, 3, 4];

let o = {};

for (const item of arr) {
  if (!o[item]) {
    o[item] = 1;
  } else o[item]++;
  console.log(o);
}
console.log(o);
////
