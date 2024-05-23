// In JavaScript, the this keyword is a fundamental concept that refers to the context
// in which a function is executed. Its value depends on how the function is called. Understanding
// this is crucial for effective JavaScript programming, especially when working with object-oriented code,
// event handling, and callback functions.

// Summary
// Global Context: this refers to the global object (window or global).
// Function Context: this is the global object in non-strict mode or undefined in strict mode.
// Method Context: this refers to the object calling the method.
// Constructor Context: this refers to the newly created instance.
// Arrow Functions: this is lexically bound to the surrounding scope.
// Event Handlers: this refers to the element that received the event.
// Explicit Binding: call, apply, and bind allow you to explicitly set this.

console.log(this); // In a browser, this will log the window object

// function showThis() {
//   console.log(this);
// }
// showThis(); // Logs the global object (window in browsers) or undefined in strict mode

// Constructor Context: When a function is used as a constructor (called with new), this refers to the newly created instance
// const obj = {
//   name: "Alice",
//   greet: function () {
//     console.log(this.name);
//   },
// };
// obj.greet();

// Arrow Functions: Arrow functions do not have their own this context. Instead,
// this is lexically bound to the this value of the enclosing execution context.

// const obj = {
//   name: "Carol",
//   greet: () => {
//     console.log(this.name); // undefiend
//   },
// };
// obj.greet(); // Logs: Carol

const user = {
  name: "Eve",
  getName: function () {
    return this.name;
  },
};
console.log(user.getName()); // Logs: Eve

function Person() {
  this.age = 0;

  let interval = setInterval(() => {
    this.age++; // `this` properly refers to the person instance
    console.log(this.age);
    if (this.age === 3) {
      clearInterval(interval);
    }
  }, 1000);
}

const person = new Person(); // Logs the increasing age
