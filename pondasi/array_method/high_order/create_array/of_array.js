function showVal(param) {
    console.log(param);
}

/**
 * Contoh 1
 */

let numbers = new Array(2);
let cekJml = numbers.length;

showVal(cekJml);
showVal(numbers);
showVal(numbers[0]);

/**
 * Contoh 2
 * value list array bisa ditampilkan apabila diubah menjadi string
 */

let arrNumStr = new Array('5');
let getnNumbs = arrNumStr.length;

showVal(getnNumbs);
showVal(arrNumStr[0]);



/**
 * Contoh 3 
 * Applied function builtin .of();
 */

let arrNumbsOf = Array.of(7, 3, 5, 6);
let arrCounts = arrNumbsOf.length;

showVal(arrCounts);
showVal(arrNumbsOf[0]);

arrNumbsOf.forEach(element => {
    console.log(element);
});


/**
 * Contoh 4 
 */

let arrStr = Array.of('A', 'I', 'U', 'E', 'O');
console.table(arrStr);