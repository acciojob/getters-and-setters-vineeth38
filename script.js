class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
 
  get name() {
    return this._name;
  }
 
  /**
   * @param {any} age
   */
  set age(age) {
    this._age = age;
  }
}
 
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}
 
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}
let student1=new Student('Ramesh',21);
console.log(student1);
// student1.teach();
student1.study();
let teacher1=new Teacher('Max',30);
teacher1.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

