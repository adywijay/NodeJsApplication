/* 
 * Metode ini Function.prototype.apply() memungkinkan Anda memanggil fungsi dengan nilai tertentu 
 * this dan argumen yang diberikan sebagai larik .
 * dengan kata lain method apply() ini diikuti dengan array
 */


const person = {
    firstName: 'John',
    lastName: 'Doe'
};

function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
};

let result = greet.apply(person, ['Hello', 'How are you?']);
console.log(result);



function lala(nama, umur) {
    this.nama = nama;
    this.umur = umur;
};

function b(nama, umur, alamat) {
    lala.apply(this,[nama, umur]);
    this.alamat = alamat;
};

let c = new b('alolo', 20, 'ngemplak');
console.log(c);



let motor = {
    merk  : 'Suprax 125',
    brand : 'Honda'
};

//const getDet = () => console.log(' mereke ' + this.merk + ' brand ' + this.brand);

const say = function (message) {
  console.log(message);
  //console.log(say instanceof Function); //--------------------------> cek validasi instance dari fungsi
  console.log(' mereke ' + this.merk + ' brand ' + this.brand);
};

say.apply(motor,['Astra', 899]);





