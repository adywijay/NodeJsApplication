/**
 * \d – match a single digit or a character from 0 to 9.
 * \s – match a single whitespace symbol such a space, a tab (\t), a newline (\n).
 * \w – w stands for word character. It matches the ASCII character [A-Za-z0-9_] including Latin alphabets, digits, and the underscore (_)
 * \D– cocok dengan karakter apa pun kecuali angka, misalnya huruf.
 * \S– cocok dengan karakter apa pun kecuali spasi, misalnya huruf
 * \W– cocok dengan karakter apa pun kecuali karakter kata, misalnya huruf atau spasi non-Latin.
 */

let phone = '+1-(408)-555-0105';
let re = /\d/;

console.log(JSON.stringify(phone.match(re)));




/**
 * Sample  ============================== 1
 */

let phone_number = '+62 81112233498';
let pattern = /\w/g;
let convert = phone_number.match(pattern);
console.log("\n");
console.log(convert.join(''));



let phone_number_1 = '+62 81112233498';
let pattern_1 = /\D/g;
let convert_1 = phone_number_1.match(pattern_1);
console.log("\n");
console.log(convert_1);