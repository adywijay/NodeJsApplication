/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


class Person {
    
    constructor(nama, jk, alamat){
        this.nama = nama;
        this.jk = jk;
        this.alamat = alamat;
    }
    
    getData(){
        let getlist = {
            Nama    : this.nama,
            Jenkel  : this.jk,
            Alamat  : this.alamat
        };
        
        return console.log(getlist);
    }
    
    showGreeting(){
        console.log('Hello' + ' ' + this.nama);
    }
};

class Tika extends Person {
    
    constructor(nama, jk, alamat,status){
        super(nama, jk, alamat);
        this.status = status;
    }
    
    getStatus(){
         console.log('Status :' + ' '+ this.status);
    }
    
    showGreet(){
        super.showGreeting();
    };
};


let aay = new Tika('Artyka Anugerah Yuniarti', 'Peyempuan', 'Tanjung-Pandan, Slogohimo','Married');
aay.getData();
aay.getStatus();
aay.showGreet();