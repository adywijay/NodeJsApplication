/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() { // dipanggil sekali, di awal for..of
    return {
      current: this.from,
      last: this.to,

      next() { // memanggil setiap iterasi, untuk mendapatkan nilai berikutnya
        if (this.current <= this.last) {
          return { 
              done: false, 
              value: this.current++ 
          };
        } else {
          return { 
              done: true 
          };
        }
      }
    };
  }
};

//console.log(range.value['value']);

for(let value of range) {
    console.log(value); // 1 lalu 2, lalu 3, lalu 4, lalu 5
}