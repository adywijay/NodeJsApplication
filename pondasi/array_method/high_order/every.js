/**
 * Every digunakan untuk melakukan pengecekan apakah setiap elemen array memenuhi  kondisi tertentu.
 */


/**
 * Logic bassic untuk cek suatu loop apakah menghasilkan 0
 */
let numbers = [1, 3, 5];
let result = true;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
        result = false;
        break;
    }
}
console.log(result);


/**
 * menggunakan fungsi builtin array every()
 */

let angka = [1, 3, 5];
let hasil = angka.every(function (e) {
    return e > 0;
});

console.log(hasil);


/**
 *  Bila bernilai 0 fungsi every akan mengembalikan default true
 */
let zero = [].every((item) => console.log(item));
console.log(zero);