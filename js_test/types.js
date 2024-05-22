// What are the different data types present in JavaScript?

let str = "Hello, World!";
let num = 43;
let float = 3.15;

let isTrue = true;
let isFalse = false;

let emptyValue = null; //absense of object value

let notAssigned;
// console.log(notAssigned); // undefined

let symbol = Symbol("unique");

let bigIntNumber = BigInt(9007199254740991);

console.log({ emptyValue, notAssigned, symbol, bigIntNumber });

// Non-Primitive Types:

// Object: Represents a collection of properties. Objects can include arrays, functions, and other objects.
let obj = { key: "value", anotherKey: 42 };

// Array: A special type of object used for      storing ordered collections of values.
let arr = [1, 2, 3, 4, 5];

// Function: A special type of object that can be called to perform an action or compute a value.
function greet() {
  console.log("Hello!");
}

greet();

console.log({ obj, arr });
