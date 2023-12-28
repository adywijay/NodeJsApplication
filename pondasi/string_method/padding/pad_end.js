/**
 * padEnd() menggabungkan string dengan string lain hingga panjang tertentu dari akhir string 
 * dan mengembalikan string yang dihasilkan yang mencapai panjang tertentu.
 * 
 * atau dengan kata lain insertion hingga mencapai panjang tertentu di akhir string
 */


/**
 * Contoh 1
 */

/**
 
        let str = '1234'.padStart(8, '0');
        console.log(str); // "00001234"

        let pdStart = '1234';
        console.log(pdStart.padStart(5, 'x'));
* 
 */

function strEnd(params, max, ifmin) {
    if (!typeof (params) === 'string') {
        console.info('Parameter harus bernilai string..!');
    }
    return params.padEnd(max, ifmin);
}


let fg = '12345';
console.log(strEnd(fg, 8, '*'));