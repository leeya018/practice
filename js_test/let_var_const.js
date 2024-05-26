// Explain var, let, and const in JavaScript.

// Key Differences:
// Scope:

// var is function-scoped.
// let and const are block-scoped.
// Hoisting:

// var is hoisted and initialized with undefined.
// let and const are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.
// Re-declaration:

// var can be re-declared within the same scope.
// let and const cannot be re-declared within the same scope.
// Assignment:

// var and let can be reassigned.
// const cannot be reassigned, but its contents can be modified if it is an object or array.
//
function example_var() {
  console.log(x); // undefined (due to hoisting)
  var x = 10;
  console.log(x); // 10
}
// example_var();

let y = 1;
function example_let() {
  //   console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 10;
  console.log(y); // 10
}
example_let();

const z = 10;
// z = 20; // TypeError: Assignment to constant variable

const obj = { key: "value" };
obj.key = "newValue"; // Allowed
console.log(obj.key); // 'newValue'

// const num = 3;
// num = 4;
// console.log(num); // TypeError: Assignment to constant variable.

const arr = [1, 2];
arr.push(3);
console.log(arr); // [ 1, 2, 3 ]
// arr = [1]; // cannot
console.log(arr); //TypeError: Assignment to constant variable.
// its protect the refernce and not the value

// Scope - refers to the accessibility of variables, or where variables can be accessed and modified in the code.
// Hoisting -s JavaScript's behavior of moving declarations to the top of their scope before code execution
// Re-decleration - refers to the ability to declare the same variable name multiple times within the same scope.
// Assignment -efers to the ability to assign or reassign a value to a variable after it has been declared.

console.log(
  "========================================================================="
);
// var x = 10;
// var x = 20;
// console.log(x); // 20

function func_let() {
  //   console.log(a);//error
  if (true) {
    // console.log(a); // error
    let a = 1;
    console.log(a);
  }
}
func_let();

// console.log({ a }); //ReferenceError: a is not defined
function func_var() {
  console.log(a);
  if (true) {
    console.log(a);
    var a = 1;
    console.log(a);
  }
}
func_var();

// =====
// In JavaScript, when you declare a variable with const,
// it means that the variable cannot be reassigned to a different value. However,
// if the variable holds a reference to an object (including arrays),
// the contents of that object can still be changed. This is because the const declaration
//  protects the reference to the object, not the content within the object itself.
console.log(
  "================================================================================================="
);

console.log(a); //undefined
var a = 2;
console.log(a); //2
console.log(
  "================================================================================================="
);

// async function getNum(num) {
//   return Promise.resolve(num);
// }

function iterate() {
  for (var i = 0; i < 5; i++) {
    ((num) => {
      setTimeout(() => {
        console.log(num);
      }, 100);
    })(i);
  }
}
// function iterate() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 100);
//   }
// }

iterate();
