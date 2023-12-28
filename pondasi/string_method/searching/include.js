/**
 * Metode ini includes() menentukan apakah suatu string berisi string lain:
 * Mengembalikan nilai true apabila ditemukan sebaliknya mengembalikan false apabila tidak ditemukan

        Syntax dasar : 
        string.includes(searchString [,position])
 */

/**
 * Contoh 1
 */
let email = 'admin@example.com';
console.log(email.includes('@'));


/**
 * Contoh 2
 */

function outParams(param_cek, cek) {
    let getResult = param_cek.includes(`${cek}`);
    console.info(getResult);
}

let dataSrc = 'inicek@gmail.com';
let str = 'Java String';
outParams(dataSrc, '@');
outParams(str, 'Script');

/**
 * Contoh 3 pencarian dengan parameter baris ke - n
 */

function outParamsArr(param_cek, cek, param_baris) {
    let getResult = param_cek.includes(`${cek}`, `${param_baris}`);
    console.info(getResult);
}

let srcData = 'Anarkis adalah metode penyampaian pendapat yang bersifat negatif';
outParamsArr(srcData, 'adalah', 1);