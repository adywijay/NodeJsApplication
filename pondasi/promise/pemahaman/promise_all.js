/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let promise1 = new Promise((resolve, reject) =>{
    resolve(40);
});

let promise2 = new Promise((resolve, reject) =>{
    resolve(40);
});

Promise.all([promise1,promise2]).then((hasil)=>{
    let tes = hasil.reduce((pram1,pram2)=>{
        console.log(pram1 + pram2);
    });
});