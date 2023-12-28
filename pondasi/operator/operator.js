/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/*
 * Operator += adalah operator penugasan
 * Sedangkan operator + yang dihimpit variabel digunakan untuk fungsi penggabungan string / angka / regex pola" tertentu
 */
let q = '', v = 500;
q += 'wq';
console.log(q);

console.log(
  v += 2,
  v -= 1,
  v *= 3,
  v /= 1,
  v %= 2,
  v **= 4
);

/*
 * Operator Aritmetik
 */
let w = 5600;
e = w + 10;
r = w - 2;
t = w * 3;
y = w / 4;
u = w % 2;
p = 2 ** 4;
h = Math.pow(2, 4);
console.log(w++);
console.log(w++);
console.log(w++);
console.log(w++);
console.log(w++);
console.log('Operator Fungsi Aritmatik Tambah' + ' ' + e);
console.log('Operator Fungsi Aritmatik Pengurangan' + ' ' + r);
console.log('Operator Fungsi Aritmatik Perkalian' + ' ' + t);
console.log('Operator Fungsi Aritmatik Pembagian' + ' ' + y);
console.log('Operator Fungsi Aritmatik Sisa Hasil Bagi' + ' ' + u);
console.log('Operator Fungsi Aritmatik pangkat ' + ' ' + p);
console.log('Operator Fungsi Aritmatik pangkat builtin function ' + ' ' + h);
console.log(w--);
console.log(w--);
console.log(w--);
console.log(w--);
console.log(w--);


/*
 * Operator Logic dan Perbandingan
 * Object.is()----> dgn fungsi objek
 */

let k = 10, ui = -7;

console.log(k === 0);
console.log(k !== 0);
console.log(k > 0);
console.log(k >= 0);
console.log(k < 0);
console.log(k <= 0);
console.log(Object.is(k, ui));