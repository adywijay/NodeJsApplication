/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


// Import variabel dan fungsi
import { name, age, sayHello } from './person.js';

// Import kelas
import { Person } from './person.js';

console.log(name); // Output: 'John Doe'
console.log(age); // Output: 30

const greeting = sayHello();
console.log(greeting); // Output: 'Hello, my name is John Doe and I am 30 years old.'

const john = new Person('John Doe', 30);
console.log(john.greet()); // Output: 'Hello, my name is John Doe and I am 30 years old.'
