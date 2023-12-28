/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let data1 = [1,2,4,5,6,7,8,9,9,9,9,9,9,9,9,9,9,6];
data1.push(4,5);
let jml = data1.length;

console.log(data1);


// Push batch

let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

colors.push(...cmyk);
console.log(colors);
