class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(value) {
    this._age = value;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying.`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching.`);
  }
}
const john = new Person("John Doe", 30);
console.log(john.name); // Output: John Doe
john.age = 35; // Set the age using the setter
console.log(john.age); // Output: 35

const alice = new Student("Alice Smith", 20);
alice.study(); // Output: Alice Smith is studying.

const mrSmith = new Teacher("Mr. Smith", 45);
mrSmith.teach(); // Output: Mr. Smith is teaching.

