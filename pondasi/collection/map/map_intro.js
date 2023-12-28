/*
 * Metode Peta JavaScript yang berguna
     clear()    – menghapus semua elemen dari objek peta.
     delete(key)– menghapus elemen yang ditentukan oleh kunci. Ia kembali jika elemennya ada di peta, atau salah jika tidak.
     entries()  – mengembalikan objek Iterator baru yang berisi array [key, value]untuk setiap elemen dalam objek peta. Urutan objek pada peta sama dengan urutan penyisipan.
     forEach(callback[, thisArg])– memanggil panggilan balik untuk setiap pasangan nilai kunci di peta dalam urutan penyisipan. Parameter opsional thisArg menetapkan thisnilai untuk setiap panggilan balik.
     get(key)   – mengembalikan nilai yang terkait dengan kunci. Jika kuncinya tidak ada, maka hasilnya tidak terdefinisi.
     has(key)   – mengembalikan nilai benar jika nilai yang terkait dengan kunci ada atau salah jika sebaliknya.
     keys()     – mengembalikan Iterator baru yang berisi kunci untuk elemen dalam urutan penyisipan.
     set(key, value)– menetapkan nilai kunci pada objek peta. Ia mengembalikan objek peta itu sendiri sehingga Anda dapat menghubungkan metode ini dengan metode lain.
     values()         mengembalikan objek iterator baru yang berisi nilai untuk setiap elemen dalam urutan penyisipan.
 */

const scores = new Map([['Ruby', 12], ['Steven', 11], ['Sam', 15], ['Robin', 14]]);
//console.log(scores);

/*
 * Keyword set digunakan untuk menambahkan list kedalam Map
 */
scores.set('James', 10);
scores.set('Jambes', 100);
scores.set('Pinokio', 20);

/*
 * Keyword get digunakan untuk menampilkan value dari key yang dipanggil kedalam Map
 */
console.log(scores.get('Jambes'));
console.log(scores.get('Sam'));
console.log(scores.get('Robin'));
console.log(scores.get('Steven'));

/*
 * Cek Keberadaan suatu key dalam Map
 */

console.log(scores.has('Jambes'));
console.log(scores.has('Sam'));
console.log(scores.has('Robin'));
console.log(scores.has('Sukoy'));
console.log(scores.has('Olala'));


/*
 * Cek List size Map
 */

console.log(scores.size);

/*
 * Loop value dari key suatu Map dengan menggunakan kata kunci array_map.values()---> akan mengembalikan key
 * sedangkan scores.entries() ---> akan mengembalikan key dan value dari map
 */

for (let i of scores.values()) {
    console.log(i);
}

/*
    for (let i of scores.entries()) {
      i.forEach((res) =>{
            console.log(res);
      });
    }
 * 
 */

/*
    scores.forEach((hasil)=>{
        console.log(hasil);
    });

 */


/*
    for (let i of scores.keys()) {
          console.log(i);
    }
*/


/*
 * Convert key on map to array
 */
var keys = [...scores.keys()];
console.log(keys);


/*
 * Operasi Delete / Clear Elemen Map
 * dengan menggunakan key array_map.delete('Nama_key'); --> menghapus key tertentu
 * dengan menggunakan key array_map.clear(); --> menghapus semua isi dalam suatu map
 * 
 */


scores.delete('Pinokio');
scores.clear('Jambes');
console.log(scores);