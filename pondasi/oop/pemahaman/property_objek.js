/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


'use strict';
let user1 = {
  name: "John"
};

Object.defineProperty(user1, "name", {
  writable: false
});

//console.log(user1.name = "Pete");

let coba1 = {};
coba1.nama = 'AAAAUIO';
coba1.jk = 'Peyem';


for (let i in coba1) {
    console.log(i);
}