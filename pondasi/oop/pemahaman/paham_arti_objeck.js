/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let Transportasi = {
    Udara : 'Pesawat',
    Darat : ['Mobil','Motor', 'dkk']
};

Transportasi.Laut = () => console.log('Kapal Api');

Transportasi.Laut();
console.log(Transportasi.Darat);



let Motor = {
    Merk : ['Suprax 125', 'R15', 'R25', 'Satria FU', 'Ninja RR'],
    Brand : ['Honda', 'Suzuki', 'Yamaha'],
    Mesin : function() {
             console.log(['150 CC','125 CC']);   
        }
};

function alolo() {
    console.log('awokawok');
}

Motor.Mesin();
Motor.cek = alolo(); // objek meng assign kedalam fungsi


