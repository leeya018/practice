let arr = [1, 2, 3, 4, 5];
//  foreach funciton is not changing the array
//  to stop execution of the forEach , the only way is to throw Exception
// const res = arr.forEach((value, key) => {
//   if (value === 4) {
//     throw Error("bye");
//   }
//   console.log(value, key);
// });
// console.log(res);

//  res will be empty because the callback will not return it outside
const res = arr.forEach((value, key) => {
  return value;
});
console.log(res);
