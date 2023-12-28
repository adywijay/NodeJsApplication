/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let intros = {
    name : 'Ajojing',
    age  : 20
};

let handler = {};
let getPrx = new Proxy(intros, handler);

console.log(intros.name);
console.log(getPrx.name);
