/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


class Coba {
    
    set setNama(nama){
        this.nama = nama;
    }
    
    get getNama(){
        console.log(this.nama);
    }
}

let data1 = new Coba();
data1.setNama = 'Valiza';
data1.getNama;