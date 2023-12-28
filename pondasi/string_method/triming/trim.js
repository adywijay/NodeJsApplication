/**
 * Function builtin js trim digunakan untuk menghapus spasi di kedua sisi string
 * 
 * Syntax dasar : let resultString = str.trim();
 */

function strTrim(data) {
    let tmpDta = data.trim();
    console.info(tmpDta)
}

let strTr = '  JS trim  ';
//strTr.trim();

console.log(strTr);
strTrim(strTr);