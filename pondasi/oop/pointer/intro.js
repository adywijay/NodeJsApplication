/* 
 * Secara umum, thisreferensi objek yang fungsinya adalah properti. 
 * Dengan kata lain, this referensi objek yang sedang memanggil fungsi.
 * sama halnya dengan keyword window
 */


let counter = {
  count: 0,
  next: function () {
    return ++this.count;
  }
};

console.log(counter.next());


/*
 * 
 function show() {
   console.log(this === window); // true
 }

show();
 */

"use strict";

function show() {
    console.log(this === undefined);
}

show();