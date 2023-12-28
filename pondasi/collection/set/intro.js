/* 
 *  Objek Set menyediakan metode berguna berikut ini:
    add(value) – menambahkan elemen baru dengan nilai tertentu ke set. Ini mengembalikan Setobjek, oleh karena itu, Anda dapat menghubungkan metode ini dengan Setmetode lain.
    clear()  – menghapus semua elemen dari Setobjek.
    delete(value)– menghapus elemen yang ditentukan oleh nilainya.
    entries()– mengembalikan yang baru Iteratoryang berisi array  [value, value].
    forEach(callback [, thisArg])– memanggil panggilan balik pada setiap elemen dengan Setnilai thisyang ditetapkan thisArgdalam setiap panggilan.
    has(value)– mengembalikan truejika elemen dengan nilai tertentu ada dalam kumpulan, atau falsejika tidak.
    keys()– sama dengan values()fungsinya.
    [@@iterator]– mengembalikan objek baru Iteratoryang berisi nilai semua elemen yang disimpan dalam urutan penyisipan.
 */

/* Note : Set, Maupun Map hanya mengambil list array yang bersifat unique jika terdapat data yang bernilai ganda maka akan
diambil data tunggal saja */


let introSet = new Set(['a', 'a', 'b', 'c', 'c']);
//console.log(introSet);

//console.log(set2);

/*
 * Operasi add
 */
introSet.add('Khoizu');
introSet.add('h');
introSet.add('o');
introSet.add('p');

//console.log(introSet);

/*
 * Operasi Hapus
 */

introSet.delete('a');
introSet.clear();

/*
 * Operasi Check
 */
let check = [
    introSet.has('h'),
    introSet.has('o'),
    introSet.has('p'),
    introSet.has('a'),
    introSet.has('i')
];

console.log(...check);

/*
 * Cek List size Sets
 */
console.log(introSet.size);



for (let i of introSet.values()) {
    console.log(i);
}

for (let g of introSet.entries()) {
    console.log(g);
}