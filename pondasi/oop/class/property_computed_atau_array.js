/* 
 * property kompute adalah aliansi nama properti yang fleksibel dapat digunakan sebagai
 * nama properti itu sendiri maupun method
 */


let propName = 'c';

const rank = {
  a: 1,
  b: 2,
  [propName]: 3
};

console.log(rank.c); // 3



let name = 'fullName';

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get [name]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person('John', 'Doe');
console.log(person.fullName);
