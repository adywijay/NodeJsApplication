/*
 * 
 * Keyword Promise.all() digunakan untuk menggunakan penggabungan promise dengan imbuhan all berarti seluruh promise
 * dalam bentuk array []
 * Promise.all() mengambil Promise yang dapat diubah sebagai masukan, dan mengembalikan satu Promise
 * Promise yang dikembalikan ini hanya akan terselesaikan ketika semua Promise masukan telah diselesaikan dan nilainya akan berupa array hasil dari Promise masukan.
 * Jika salah satu Promise masukan menolak atau memunculkan kesalahan, Promise yang dikembalikan akan segera ditolak dengan kesalahan/pesan tersebut.
 
 *sumber : https://medium.com/nerd-for-tech/javascript-promises-part-4-promise-all-promise-any-and-promise-race-eeeceb3ee94e
 **/



//Promise for Resolve
/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved');
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved');
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved');
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
});
 * 
 */

//Promise for Reject
let prom1 = new Promise((resolve, reject)=>{
    resolve(45);
});

let prom2 = new Promise((resolve, reject)=>{
    resolve(50);
});

let prom3 = new Promise((resolve, reject)=>{
    reject('Reject');
});

Promise.all([prom1,prom2,prom3]).then(console.log).catch(console.log);