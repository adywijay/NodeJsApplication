/**
 * indexOf() indeks kemunculan substring ( substr) pertama dalam string ( str):
 * Syntax dasar : 
 * let index = str.indexOf(substr, [, fromIndex]);
 * 
 * 
 * mengembalikan -1 apabila suatu string dalam index tidak ditemukan
 */

let str = 'finding substring in string';
let index = str.indexOf('str');

console.log(index); // 11


/**
 * Contoh 2
 */

function searchIndex(param_str, key_search) {

    let search = param_str.indexOf(key_search);

    console.log(
        'String : ' + ' ' + JSON.stringify(param_str) + '\n\n\n\n\n' +
        'Keyword Search :' + ' ' + key_search + '\n' +
        'Result index : ' + ' ' + search
    );
}

let dtSearch = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

searchIndex(dtSearch, 'dolor');