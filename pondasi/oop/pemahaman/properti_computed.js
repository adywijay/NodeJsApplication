/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//sebagai properti

let brand = 'brand';
let motor = {
    merk : 'Supra',
    [brand]: 'honda'
};
console.log(motor.brand);

//sebagai method
let oke = 'ini';
class Mencoba{
    
    
    
    constructor(nama){
        this.nama = nama;
    }
    
    get[oke](){
        return this.nama;
    }
    
};

let h1 = new Mencoba('Aku');
console.log(h1.ini);