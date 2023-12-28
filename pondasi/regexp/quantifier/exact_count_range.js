/**
 * Variasi pengambilan regexp digit
 *      Syntax dasar : {n, m}
 *          Sebagai contoh mengambil karakter  yang memiliki 2, 3 atau 4 jumlah karakter
 */


/**
 
    Quantifier	Description
    * Match     zero or more times.
    + Match     one or more times.
    ? Match     zero or one time.
    { n }	    Match exactly n times.
    { n,}	    Match at least n times.
    { n, m }	Match from n to m times.
* 
 */


let str = 'The official name of ES11 is ES2020';
let re = /\d{2,4}/g;

let result = str.match(re);
console.log(result);


/**
 * Example 1
 */

let term = "Tahun ini adalah 2023 untuk masehi dan 1447 untuk hijriyah yang jatuh pada 2 Mei 2023";
let pattern_ex = /\d{1,4}/mg;
let callter = term.match(pattern_ex);

callter.forEach((value) => {
    console.log(value);
});

/**
 * Example 2
 */

let str_val = "";

str_val +=
    'Di Babak Kualifikasi awal yang diadakan secara online,' +
    'terdapat 59 Tim dari berbagai kampus di Indonesia yang mengikuti kompetisi ini.' +
    'Setelah melalui proses penjurian, dipilih 10 Tim untuk mengikuti babak final' +
    'yang diadakan di Mini Theater PENS pada tanggal 24 – 25 November 2023.' +
    'Dari 10 Tim yang masuk Final tersebut, 3 diantaranya berasal dari Universitas AMIKOM Yogyakarta.' +
    'yaitu: Tim Netacom Reborn, Potang, dan Kopikap.'

let regex_ptrn1 = /\d{2,}/mg;
let regex_ptrn2 = /\d{4}/mg;

// Pattern searching 1 or more digit on text
let regex_ptrn3 = /\d{1,}/mg;
let regex_ptrn4 = /\d+/mg;

// Pattern searching zero on one
let regex_ptrn5 = /\d?/mg;

// Pattern searching zero on more
let regex_ptrn6 = /\d*/mg;

let call_regex1 = str_val.match(regex_ptrn1);
let call_regex2 = str_val.match(regex_ptrn2);
let call_regex3 = str_val.match(regex_ptrn3);
let call_regex4 = str_val.match(regex_ptrn4);
let call_regex5 = str_val.match(regex_ptrn5);
let call_regex6 = str_val.match(regex_ptrn6);

let outputs = {
    two_or_more: call_regex1,
    only_fourth: call_regex2,
    one_on_more_range: call_regex3,
    one_on_more_char: call_regex4,
    zero_or_one: call_regex5,
    zero_ore_one_more: call_regex6
}

console.log(outputs)