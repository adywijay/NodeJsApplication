const title = 'Jack and Jill Went Up the Hill';

// console.log(title.endsWith('Hill'));
// console.log(title.endsWith('hill'));
// console.log(title.endsWith('Up', 21));

function endWith(params_src, search) {
    let tmpDat = params_src.endsWith(params_src);
    console.log(tmpDat);
}

function endPram(params_src, search, baris_src_param) {
    let tmpDatsrcPram = params_src.endsWith(`${search}`, `${baris_src_param}`);
    console.log(tmpDatsrcPram);
}

endWith(title, 'Hill');
endPram(title, 'Up', 21);