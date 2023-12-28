/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


//Return unidentified
function* bar() {
    yield;
}

let b = bar();
console.log(b.next()); 

//pass value next() param
function* generate() {
    let result = yield;
    console.log(`result is ${result}`);
}

let g = generate();
console.log(g.next()); 

console.log(g.next(1000));
