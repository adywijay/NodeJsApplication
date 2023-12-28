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
 */


//Objek sbg properti data
let person = {
    
    firstName: 'John',
    lastName: 'Doe'
    //configurable
};
//kode diatas objek properti terkonfigurasi true karena propertinya terdefinisi
//untuk contoh void yaitu let person = {};

let schema = {};
schema.proper = 'Yes';
console.log(schema.proper);//Before



delete schema.proper;
console.log(schema.proper);//After

//Object.getOwnPropertyDescriptor(obj, propertyName); untuk menampilkan properti pada objek


let personalInfo = {
  personName  : 'Ayu Puspita'
};

let datas = [
    'personName',
    'personGenre'
];

let descriptor = Object.getOwnPropertyDescriptor(personalInfo, ...datas);
console.log(descriptor);


//set list Property object
let user = {};

Object.defineProperty(user, "name", {
  value: ['Ayu Puspita', 'Inggrid DS', 'Hanum WR']
});

let df = Object.getOwnPropertyDescriptor(user, 'name');
console.log(df);

//Change property non writable
'use strict';
let user1 = {
  name: "John"
};

Object.defineProperty(user1, "name", {
  writable: false
});

console.log(user1.name = "Pete");



let user2 = { };

Object.defineProperty(user2, "name", {
  value: "John",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true
});

console.log(user2.name); // John
user2.name = "Pete"; // Error