/* 
 * Metode ini dapat digunakan untuk memanggil fungsi dengan nilai dan argumen tertentu. 
 * Misalnya, kode berikut dapat digunakan untuk memanggil fungsi dengan objek sebagai nilai dan string sebagai argumen: 
 * Reflect.apply()sayHello()person this 'World'
 */


const person = {
  name: 'John Doe',
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
};

Reflect.apply(person.sayHello, person, []);