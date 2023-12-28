/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function getData() {
    let Nama = 'Samingan', Alamat = 'Kidule Ambon';
    
    return {
        nama : Nama,
        alamat : Alamat
    };
}

let testing = new getData();
console.log(testing);

function getData1() {
    let Nama = 'Samingan', Alamat = 'Kidule Ambon';
    
    return [Nama, Alamat];
}

let testing1 = new getData1();
//console.log(testing1[0], testing1[1]);

const DataNama = testing1[0], DataAlamat = testing1[1];
console.log(DataNama);