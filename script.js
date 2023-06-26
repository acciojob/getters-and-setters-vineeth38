class Person {
  constructor(name, age) {
      this.name = name;
    this.year = year;
  }

  get pnam() {
    return this.name;
  }

  set age(x) {
    this.age= x;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching.`);
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

