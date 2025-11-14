// const preson = function (name,age) {
//     this.name = name;
//     this.age  = age;
//     this.BirthYear = 2025-age
// }

// preson.prototype.introduce = function () {
//     console.log(`hi my name is ${this.name}, and i am ${this.age} year old`);
    
// }

// const preson1 = new preson("Yash Verma",90)
// console.log(preson1);
// preson1.introduce()

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
  }
}
 const Person1 = new Person("Yash verma",78)
 Person1.introduce()
