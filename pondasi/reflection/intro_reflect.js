/* 
 * Refleksi adalah kemampuan program untuk memanipulasi variabel , properti, dan metode objek saat runtime.
 * Atau kata lain proxy dinamis
 */


const person = {
  name: 'John Doe'
};

const name = Reflect.get(person, 'name');

console.log(name);