// // const p = "arst*trstsr&tdtsdstdtsdtt*trstrastr";
// // console.log(p.replaceAll("*", "\n").replaceAll("&", "\n\n"));

// const q = "this # is am # idea";
// const w = ["megazine", "amazing"];
// const res = q.split("?");

// const data = [];
// let i = 0;
// for (const l of q) {
//   if (l === "?" || l === "#") {
//     data.push(w[i]);
//     i++;
//   } else {
//     data.push(l);
//   }
// }

// // console.log(data.join(""));

// // includes - string && array
// const b = "itntsnret";
// console.log(b.includes("tn"));

// const arr = [1, 2, 3];
// console.log(arr.includes(2));

// //
// // let n = parseInt(readline());
// // var inputs = readline().split(' ');
// // let max=-1 , min=1000000
// // for (let i = 0; i < n; i++) {
// //     const a = parseInt(inputs[i]);
// //     if(min >= a){
// //         min = a
// //     }
// //     if(max<= a ){
// //         max = a
// //     }
// // }
// // print(max-min)

// // const s = "AEIUT";
// // const vowels = "AEIOU";
// // let amount = 0;
// // for (const l of s) {
// //   if (vowels.includes(l)) amount++;
// // }
// // console.log(amount);

// console.log(String.fromCharCode(97));
// console.log(String.fromCharCode(22));
// console.log(String.fromCharCode(77));
// console.log(String.fromCharCode(69));

// //
// /**
//  * Auto-generated code below aims at helping you parse
//  * the standard input according to the problem statement.
//  **/

// const length = parseInt(readline());
// var inputs = readline().split(" ");
// let o = {};
// // print(inputs)
// for (let i = 0; i < length; i++) {
//   const num = parseInt(inputs[i]);
//   if (o[num]) {
//     o[num]++;
//   } else {
//     o[num] = 1;
//   }
// }
// let r = 0;
// for (const [key, value] of Object.entries(o)) {
//   if (value % 2 === 1) {
//     r = key;
//   }
// }
// print(r);

// //same

// const length = parseInt(readline());
// var inputs = readline().split(" ");
// let o = {};

// const un = Array.from(new Set(inputs));
// let r = 0;
// for (const num of un) {
//   const amount = inputs.split(num).length - 1;
//   // const amount = inputs.filter((i) => i === num).length;
//   if (amount % 2 === 1) {
//     r = num;
//   }
// }
// print(r);

// //

const s = "google";

// function only(str) {
//   let o = {};
//   for (const l of str) {
//     if (!o[l]) {
//       o[l] = 1;
//     } else {
//       o[l]++;
//     }
//   }
//   // console.log(o);
//   for (const [key, value] of Object.entries(o)) {
//     if (value == 1) {
//       return key;
//     }
//   }
//   return null;
// }

console.log(only(s));
