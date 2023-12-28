/* 
 * Local Modul Merupakan modul yang kita buat sendiri kemudian dipanggil methodnya
 */


var myLogModule = require('../local_module/log.js'); // Membaca direktory file


let getdata = myLogModule.greetWithNama('Fitri');
getdata;