// Explain closures in JavaScript
// Closures are a fundamental concept in JavaScript that allows a function to access variables from an enclosing scope, even after the outer function has finished executing. A closure gives you access to an outer function’s scope from an inner function.

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    var name = "Mozilla1";
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
