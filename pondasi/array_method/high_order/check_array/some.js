let marks = [4, 5, 7, 9, 10, 3];

let lessThanFive = false;

for (let index = 0; index < marks.length; index++) {
    if (marks[index] < 5) {
        lessThanFive = true;
        break;
    }
}

console.log(lessThanFive);


/**
 * Contoh 2 
 * with builtin function js 
 */


let data2 = [4, 5, 7, 9, 10, 3];

lessThanFive = data2.some(function (e) {
    return e < 5;
});

console.log(lessThanFive);


/**
 * Contoh 3 listing is 0 array
 * apapun kondisinya bila menggunakan builtin some() maka akan mengembalikan nilai false
 * berbeda dengan fungsi every() maka bila list array 0 maka akan mengembalikan nilai true
 */


let data3 = [];
let printout = data3.some(init_out => {
    return init_out < 0;
});

console.log(printout);