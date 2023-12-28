/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


// Export variabel
export const name = 'John Doe';
export let age = 30;

// Export fungsi
export function sayHello() {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

// Ekspor kelas
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
