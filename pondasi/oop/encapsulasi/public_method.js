/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


class Manusia {
    constructor(nama, jk, ttl){
        this.nama = nama;
        this.jk   = jk;
        this.ttl  = ttl;
    }
    
    introduce(...data){
        let list_data = {
            Nama   : this.nama,
            Jenkel : this.jk,
            TTL    : this.ttl
        };
        return list_data;
    }
}
let data_input = ['Anonim1','Peyempuan','Wonosobo 12 April 1980'];
let data1 = new Manusia(...data_input);
console.log(data1.introduce(...data_input));

