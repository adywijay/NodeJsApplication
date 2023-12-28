/**
 * Fungsi Reduce digunakan untuk agregasi misal kalkulasi, iterasi maupun subrutin
 */


/**
 * Contoh logic kalkulasi element array
 */
let numbers = [1, 2, 3];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);


/**
 * Kalkulasi element array memakai fungsi builtin js
 */

let numbersReduce = [1, 2, 3];
let kalkulasi = numbersReduce.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log(kalkulasi);


/**
 * Reduce with callback
 */

let mess = ["JavaScript ", "is ", "fun."];

function joinStrings(accumulator, currentValue) {
    return accumulator + currentValue;
}

let joinedString = mess.reduce(joinStrings);
console.log(joinedString);


/**
 * Arrow version
 */
// function (previousValue, currentValue) {
//     return previousValue + currentValue;
// }

let arrvalue = [1, 2, 3, 6];
let compute = arrvalue.reduce((prev, curr) => {
    return prev * curr
});

console.log(compute);