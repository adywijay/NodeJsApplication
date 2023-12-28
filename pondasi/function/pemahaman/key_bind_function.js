/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let mobil = {
    merk  : 'Honda Jazz',
    brand : 'Honda',
    cc    : '250 CC',
    runn(){
        console.log(this.merk + ' ' + this.brand + ' ' + 'Running');
    },
    stop(){
        console.log(this.brand + ' ' + 'is Stopp');
    }
};

let motor = {
    merk  : 'Honda Megapro',
    brand : 'Honda',
    cc    : '250 CC',
    runn(){
        console.log(this.merk + ' ' + this.brand + ' ' + 'Running');
    },
    stop(){
        console.log(this.brand + ' ' + 'is Stopp');
    }
};

let cek = mobil.stop.bind(motor);
cek();


mobil.runn.apply(motor);
