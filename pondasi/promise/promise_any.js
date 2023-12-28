/*
 * Promise.any digunakan ketika Anda memiliki beberapa operasi asinkron yang perlu dijalankan secara paralel, 
 * dan Anda harus melakukan beberapa operasi setelah SALAH SATU janji masukan terselesaikan, 
 * terlepas dari status janji masukan lainnya.
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1 rejected');
    reject('error');
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2 fulfilled');
    resolve(2);
  }, 2000);
});

const p = Promise.any([p1, p2]);
p.then((value) => {
  console.log('Returned Promise');
  console.log(value);
});
