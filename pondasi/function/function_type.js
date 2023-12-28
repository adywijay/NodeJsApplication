/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function add(x, y , z) {
    console.log(new.target); // cek instance fungsi
    return x + y / 2;
}

let ceking = new add(4, 5);
let a = add(5, 6);


console.log(add.length); //disini keyword length berfungsi untuk menghitung jml variabel inputan parameter 
console.log(add.prototype); // Object{}