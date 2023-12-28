/* 
 * Error Handling
 * 
 * Ketika sebuah eror terjadi, 
 * Javascript menghasilkan sebuah ojek yang berisikan keterangan terkait eror tersebut. 
 * Objek itu kemudian dilewatkan sebagai sebuah argumen pada bagian catch:

    try {
      // ...
    } catch(err) { // <-- "error object", bisa menggunakan kata lain selain err
      // ...
    }

Untuk semua eror bawaan, eror objek memiliki dua properti utama:

name
Nama error. sebagai contoh, untuk variable yang belum terdefinisikan maka itu disebut "ReferenceError".

message
Pesan yang ada didalam eror tersebut.

Salah satu yang paling banyak digunakan dan didukung ialah:

stack
Call stack saat ini: string dengan informasi tentang urutan panggilan bertingkat yang menyebabkan kesalahan. D
igunakan untuk tujuan debugging.
 * 
 */


//Contoh 1 error handle try...catch biasa

let exl = 20;
try {
    
    if (typeof exl === 'number') {
        console.log(exl);   
    }else{
        console.log('type of value isnt number');
    }
    
} catch (e) {
    console.log(e.stack);
}

//Contoh 2 try....catch dengan properti

let ex2 = 'hvh';

try {
    
    if (typeof ex2 === 'number') {
        console.log(ex2);   
    }else{
        //console.log('type of value isnt number');
        
        console.log(Error);
    }
} catch (e) { //------------> parameter block catch (e) boleh tidak ditlis bila ingin ignore detail error
    console.log(e.stack);
}
