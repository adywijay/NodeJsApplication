/* 
 * Promise.race digunakan ketika Anda memiliki beberapa operasi asinkron yang perlu dijalankan secara paralel, 
 * dan Anda perlu melakukan operasi segera setelah salah satu input diselesaikan/ditolak.
 * 
 * sumber : https://medium.com/nerd-for-tech/javascript-promises-part-4-promise-all-promise-any-and-promise-race-eeeceb3ee94e
 */


let promise1 = new Promise((resolve, reject) =>{
    resolve(40);
});

let promise2 = new Promise((resolve, reject) =>{
    reject(40);
});

Promise.race([promise1,promise2]).then(pramOK => console.log(pramOK)).catch(pramNOK => console.log(pramNOK));