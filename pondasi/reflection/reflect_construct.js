/* 
 * Metode ini dapat digunakan untuk membuat objek baru dari konstruktor dan argumen tertentu. Misalnya, kode berikut dapat digunakan untuk membuat objek baru dari konstruktor dan string sebagai argumennya:
 * Reflect.construct()Person 'John Doe'
 */


function Person(name) {
  this.name = name;
}

const person = Reflect.construct(Person, ['John Doe']);

console.log(person.name); 