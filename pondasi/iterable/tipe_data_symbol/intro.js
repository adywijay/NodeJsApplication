/* 
 * Tipe data symbol merupakan tipe data primitive yang bersifat immutable(tidak dapat berubah).
   Setiap tipe data symbol akan mengembalikan dengan nilai Symbol() yang bersifat unik.
 */


// tipe data symbol akan mengembalikan data symbol()
const symbol1 = Symbol(); // output -> Symbol()
const symbol2 = Symbol(23);
const symbol3 = Symbol(23);
console.log(symbol2 === symbol3); 

//sharing method

let a1 = Symbol.for('adam');
let a2 = Symbol.for('adam');

console.log(a1 === a2);
console.log(Symbol.keyFor(a2));


//Check exixst symbol dengan key Symbol.keyFor(param)
console.log(Symbol.keyFor(a2)); //-----------> if exist

let systemID = Symbol('sys');
console.log(Symbol.keyFor(systemID)); //-----------> if not exist



