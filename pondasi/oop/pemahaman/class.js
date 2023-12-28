/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


class Guru {
   nama;
   kelas;
   alamat;
   
   constructor(nama, kelas, alamat){
        this.nama   = nama;
        this.kelas  = kelas;
        this.alamat = alamat;
   };
   
   getNama(...data){
       data = {
           nama   : this.nama,
           kelas  : this.kelas,
           alamat : this.alamat
       };
       return data;
   };
    
};

tes1 = new Guru('Ajojing.,S.Pd','3B', 'Alun-Alun Nganyuk');
console.log(tes1.getNama());