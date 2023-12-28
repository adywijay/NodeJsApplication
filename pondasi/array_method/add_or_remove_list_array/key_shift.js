/* 
 * shift()menghapus elemen pertama dari array dan mengembalikan elemen tersebut
 */


const numbers = [10, 20, 30];

let number;
while ((number = numbers.shift()) !== undefined) {
  console.log(number);
}

let exdata = [20,10,30,50];

let show = {
    jmldata : exdata.length,
    operationdel : exdata.shift(),
    array_akhir : exdata
};

console.log(show);