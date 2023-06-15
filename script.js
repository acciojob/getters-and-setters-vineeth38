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

