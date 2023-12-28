/**
 * .trimEnd() digunakan untuk menghapus spasi di akhir kalimat parameter
 */

const str = '   JavaScript   ';

function endTrim(params) {
    let tmpEndTrim = params.trimEnd(params);
    console.log({ tmpEndTrim });
}

endTrim(str);