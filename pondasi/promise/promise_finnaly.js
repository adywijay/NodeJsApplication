/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


const myPromise = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    resolve('Fulfilled');
  } else {
    reject('Rejected');
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(`${err.status} - ${err.errorType}: ${err.message}`);
  })
  .finally(() => console.log('Operations have ended.'));