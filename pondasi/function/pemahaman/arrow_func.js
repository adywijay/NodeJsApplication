/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Arrow function satu baris
let show = () => console.log('Anonymous function');
show();


let lSegiTiga = (a, t) => console.log( 
        'Luas = ' + ' ' + (a * t) / 2
);

lSegiTiga(3, 4);


let nilai = (angka) => {
    if (angka >= 81) {
        console.log('A');
    }else if (angka >= 70 && angka <= 80) {
        console.log('B');
    }else{
        console.log('C');
    }
};

nilai(90);