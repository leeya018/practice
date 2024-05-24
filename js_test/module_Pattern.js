// we save lots of time from writing a clean code
// Making your application reusable is the best to ensure that it will have rich, well-written code
// we have the ES2015 Modules so we can do extport and import
// classes ,

// Sure! ES2015 (also known as ES6) introduced several features that can be used to enhance the Point and PointName classes. Here are some things you can use:

// class Syntax: ES2015 introduced class syntax which you are already using.
// Template Literals: For easier and more readable string interpolation.
// Default Parameters: For providing default values to constructor parameters.
// Arrow Functions: Though not used directly in class methods, they are useful in callbacks.
// Destructuring: For more concise code when handling objects or arrays.

//
// Template Literals
console.log(
  "==================================Template Literals======================================================"
);
const name1 = "Lee";
const age1 = 25;

// Using template literals
const greeting = `Hello, my name is ${name1} and I am ${age1} years old.`;

console.log(greeting); // Output: Hello, my name is Lee and I am 25 years old.
console.log(
  "==================================. Default Parameters==================================================="
);
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Lee"); // Output: Hello, Lee!

console.log(
  "==================================.  Arrow Functions==================================================="
);
// Regular function
const add = function (a, b) {
  return a + b;
};

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5
console.log(addArrow(2, 3)); // Output: 5

console.log(
  "==================================Destructuring==================================================="
);

const person = {
  name: "Lee",
  age: 25,
  country: "USA",
};

// Object destructuring
const { name, age, country } = person;

console.log(name); // Output: Lee
console.log(age); // Output: 25
console.log(country); // Output: USA

console.log(
  "=================================Array Destructuring==================================================="
);
const numbers = [1, 2, 3, 4, 5];

// Array destructuring
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
