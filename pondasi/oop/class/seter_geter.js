/* 
 * 
 */

//Contoh 1 asesor seperti model pemrograman umumnya
class Mobil {
    
    merk;
    brand;
    warna;
    th_produksi;
    cc;
    
    constructor(merk,brand,warna,th_produksi,cc){
        //Mobil.setData(merk,brand,warna,th_produksi,cc);
        this.merk           = merk;
        this.brand          = brand;
        this.warna          = warna;
        this.th_produksi    = th_produksi;
        this.cc             = cc;
    };
    
    setData(merk,brand,warna,th_produksi,cc){
        let param = [
            this.merk           = merk,
            this.brand          = brand,
            this.warna          = warna,
            this.th_produksi    = th_produksi,
            this.cc             = cc
        ];
        return param;
    };
    
    getData(){
        let data = {
            merk        : this.merk,                
            brand       : this.brand,              
            warna       : this.warna,              
            th_produksi : this.th_produksi,   
            cc          : this.cc              
        };
        return data;
    };
};

let sample_data = ['Yaris CW','Toyota','Silver','2015','3000'];
let sample_data1 = ['Honda City','Honda','Silver','2015','5000'];

tes_setget = new Mobil(...sample_data);
tes_setget.setData(...sample_data1);
console.log(tes_setget.getData());

//Contoh 2 asesor khusus pada js
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