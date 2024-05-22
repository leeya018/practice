// What is the difference between == and ===?
// let isTrue = true;
// let isFalse = false;
// let num1 = 1;
// let num0 = 0;
// let strNum = "1";
// console.log(num1 === isTrue); // false
// console.log(num1 == isTrue); // true
// console.log(num1 === strNum); // false
// console.log(num1 == strNum); // true
// console.log(num0 === isFalse); // false
// console.log(num0 == isFalse); // true

console.log(5 === "5"); // false (number is not equal to string)
console.log(true === 1); // false (boolean is not equal to number)
console.log(null === undefined); // false (null is not equal to undefined)
console.log(0 === false); // false (number is not equal to boolean)
console.log([] === ""); // false (array is not equal to string)

// The === operator compares two values for equality without converting their types.
// == compare the value
// === compare value and type
console.log(5 == "5"); // true
console.log(true == 1); // true
console.log(null == undefined); // true
console.log(0 == false); // true
console.log([] == ""); // true
