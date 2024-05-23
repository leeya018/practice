// call  - Purpose: Invokes a function with a specified this value and arguments provided individually.
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: "Alice" };

greet.call(person, "Hello", "!"); // Output: Hello, Alice!
// first argument will always be the object which insde the function will be the this .
// apply = Purpose: Invokes a function with a specified this value and arguments provided as an array (or array-like object).
function greet1(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person1 = { name: "Bob" };
// first argument will always be the object which insde the function will be the this .

greet1.apply(person1, ["Hi", "!"]); // Output: Hi, Bob!

// bind - Purpose: Creates a new function that, when called, has its this value set to the specified value, with a given sequence of arguments preceding any provided when the new function is called.

function greet2(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person2 = { name: "Charlie" };
//  create a new function
const boundGreet = greet2.bind(person, "Hey");
// invoke the new function
// after we make the bind , . then we need to invoke the new functin which inside of that function , the object is allready incupsulate .
boundGreet("!!!"); // Output: Hey, Charlie!!!
