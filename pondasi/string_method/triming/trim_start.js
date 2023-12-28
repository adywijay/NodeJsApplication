
/**
 * .trimStart() digunakan untuk menghapus spasi didepan kalimat
 */
const str = '   JavaScript   ';

function startTrim(params) {
    let tmpStrtTrim = params.trimStart(params);
    console.log({ tmpStrtTrim });
}

startTrim(str);