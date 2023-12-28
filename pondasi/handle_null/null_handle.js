/* 
 * || returns the first truthy value.
 * ?? returns the first defined value.
 */


let b;
b === undefined ? console.log('Ya') : console.log('Tidak');

let user;
console.log(user ?? "Anonymous");

/*
 * Handling null dgan menggunakan operator assignment ??
 * Mengisi value minimal bila variabel" terdeklarasi null
 */

let firstName = null;
let lastName = 'Left-Then';
let nickName = null;
console.log(firstName ?? lastName ?? nickName ?? "Default ketika var === 0");

/*
 * Handling null dgan menggunakan operator assignment ??
 * Mengisi value minimal bila variabel" terdeklarasi null
 */

let firstName1 = null;
let lastName2 = null;
let nickName3 = null;
console.log(firstName1 || lastName2 || nickName3 || "Default ketika var === 0");


let hj = 10;

/*
 console.log(
   hj ?? 30,
   hj || 40
 );

 */

console.log(hj ?? 30);
console.log(hj || 57);


//======================== And Logical
let xd = (1 && 2) ?? 3;
console.log(xd);