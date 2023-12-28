/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let siswa = {
    nama : 'Sungeox',
    kelas : 'XII TKR 2',
    nilai : 7.67
};

function converter(call_obj) {
    call_obj.nilai *= 0.01;
}

converter(siswa);
console.log(siswa);