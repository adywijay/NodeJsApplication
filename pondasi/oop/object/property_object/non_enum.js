/* 
 * JavaScript menentukan karakteristik properti objek melalui atribut internal 
 * yang dikelilingi oleh dua pasang tanda kurung siku, misalnya [[Enumerable]].
 * Objek memiliki dua tipe properti: properti data dan pengakses.
 * 
 * Metode ini Object.defineProperty() menerima tiga argumen:

        Sebuah Objek.
        Nama properti objek.
        Objek deskriptor properti yang memiliki empat properti: 
            configurable, 
            enumerable, 
            writable, dan value.


objek.propertyIsEnumerable('nama_property'); -----------> untuk cek apakah suatu property ter enum.?
 */

'use strict';

//Contoh 1
let user = {};
Object.defineProperty(user, "name", {
  value: "John",
  enumerable: true, //Enumerator
  configurable: true
});

console.log(user.name); // John
//user.name = "Pete"; // Error

console.log('\n\n\n\n\n');


//Contoh 2
let person = {};
person.age = 25;
person.ssn = '012-38-9119';

Object.defineProperty(person, 'ssn', {
    enumerable: true //lihat perbedaanya antara diset true dan false
});

for (let prop in person) {
    console.log(prop);
}