/**
 * startsWith() metode JavaScript String untuk memeriksa apakah sebuah string dimulai dengan substring.
 * Syntax dasar : String.startsWith(searchString [,position]);
 */

const title = 'Jack and Jill Went Up the Hill';
console.log(title.startsWith('Hill'));

/**
 * Contoh 1
 */

function cekStartStr(params_src, search) {
    let tmpDat = params_src.startsWith(`${search}`);
    console.log(tmpDat);
}

let srcDt = 'Anarkis adalah metode penyampaian pendapat yang bersifat negatif';
cekStartStr(srcDt, 'Anarkis');
cekStartStr(srcDt, 'adalah');


/**
 * Contoh 2
 */

function cekStartStrPram(params_src, search, baris_src_param) {
    let tmpDatsrcPram = params_src.startsWith(`${search}`, `${baris_src_param}`);
    console.log(tmpDatsrcPram);
}

let srcDtparam = 'Jack and Jill Went Up the Hill';
cekStartStrPram(srcDtparam, 'Jill', 9);