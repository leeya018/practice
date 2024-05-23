// ,prototype another object that the first object inherits properties and methods from.
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Prototype Property: Person.prototype.greet

// The prototype property of the Person function is used to add methods that should be available to all instances of Person.
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const alice = new Person("Alice", 30);
const bob = new Person("Bob", 25);
// When greet is called on alice, JavaScript looks up the prototype chain and finds greet on Person.prototype.
alice.greet(); // Output: Hello, my name is Alice and I am 30 years old.
bob.greet(); // Output: Hello, my name is Bob and I am 25 years old.
// Prototype Chain  - look in the object it self, when it not find so it go to parent and do again recursievly
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor
  this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} barks.`);
};

const rex = new Dog("Rex", "German Shepherd");

rex.speak(); // Output: Rex makes a sound.
rex.bark(); // Output: Rex barks.
