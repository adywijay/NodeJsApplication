/**
 * Flat array
 * bassic syntax : let newArray = arrayObject.flat([depth])
 * [depth]----> default 1
 */

function getDetail(initials, additionals = '') {

    if (additionals !== '') {
        console.log(
            initials + ' ',
            additionals
        );
    }
    return console.log(initials);
}


const numbers = [1, 2, [3, 4, 5]];
const flatNumbers = numbers.flat();

console.log(flatNumbers);


/**
 * Membuat sequence dengan flat array deep
 */

const num = [1, 2, [3, 4, 5, [6, 7]]];
let deepSequence1 = num.flat(1);
let deepSequence2 = num.flat(2);

/* Lihat perbedaan dengan deeper yang berbeda */
getDetail(deepSequence1, 'Deeper === 1');
getDetail(deepSequence2, 'Deeper === 2');


/**
 * Contoh 2 
 * Flat Array dengan deep tak terhingga
 */

const dataSqc = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
const flatinf = dataSqc.flat(Infinity);

getDetail(flatinf, 'Deeper === Tak terhingga');


/**
 * Contoh 3 
 * jumping sequence with flat()
 */


const numJump = [1, 2, , 4, , 5];
const sequence = numJump.flat();
let countList = numJump.length;


getDetail(sequence);
getDetail(countList);