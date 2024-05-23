// Class: A template for creating objects with encapsulated data and functions.
// Constructor: A special method for initializing new instances of a class.
// Methods: Functions defined within a class to operate on class data.
// Inheritance: The ability of a class to extend another class, inheriting its properties and methods.
// Static Methods: Methods defined on the class itself, not on instances.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  haveBirthday() {
    this.age += 1;
    console.log(`Happy Birthday! I am now ${this.age} years old.`);
  }
}
// Creating an instance of the Person class
const person1 = new Person("Alice", 30);

// Using methods of the instance
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person1.haveBirthday(); // Output: Happy Birthday! I am now 31 years old.

//
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the constructor of the parent class
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  }
}

// Creating an instance of the Employee class
const employee1 = new Employee("Bob", 28, "Software Developer");

// Using methods of the Employee and Person classes
employee1.greet(); // Output: Hello, my name is Bob and I am 28 years old.
employee1.work(); // Output: Bob is working as a Software Developer.
employee1.haveBirthday(); // Output: Happy Birthday! I am now 29 years old.
//

class MathUtil {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// Using static methods
// Static methods are defined using the static keyword. They can be called directly on the class without creating an instance.
console.log(MathUtil.add(2, 3)); // Output: 5
console.log(MathUtil.multiply(4, 5)); // Output: 20
