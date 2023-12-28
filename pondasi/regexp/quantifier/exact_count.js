/**
 * Exact count adalah bagaimana mengambil jumlah regexp n karakter match dari pattern pencarian
 *  syntax dasar : /pattern{\w\s\d}{nilai_match_yg_diambil}/identifier
 * 
 *  contoh : /\d{4}/ig ===> \d{4} sama dengan \d\d\d\d
 */

let str = 'ECMAScript 2020';
let re = /\w{3}/;

let result = str.match(re);
console.log(result);


/**
 * Example 1
 */
let data = {
    name: "Kun Anta Nouramizie",
    address: "St Nyell, Dekenagane Pusat"
};

let get_spes = data.address;
let pattern = /\w{5}/m;
let call = get_spes.match(pattern);

console.log(call);


/**
 * Example 2
 */

let exs = "";
exs += 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
    'tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,' +
    'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
    'consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse' +
    'cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non' +
    'proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

    ;

let patmatch = /\w{10}/mg;
let out = patmatch.exec(exs);
console.log(out);



/**
 * Example 3
 */

let data_1 = ["Almiswah Uswatun Chasanah", "Dwi Indha Koritasari", "Kiem Lie Koentjoro"];
let patth = /\w{4}/mg;
let runn = patth.test(data_1);

console.log(runn);