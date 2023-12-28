/**
 * Contoh 1
 */
let data = [1, 3, 4, 5];
let out_init = data.every(val => {
    return val > 0;
});

console.info(out_init);

/**
 * Contoh 2
 * 
 * Apabila suatu array bernilai 0 baik < maupun > maka mengembalikan 'True'
 */

let init_zero = [];
let out2 = init_zero.every(output => {
    output > 0 ? console.log('Yes') : console.log('No');
});

console.log(out2);


/**
 * Contoh 3
 * every with callback
 */

let data3 = [30, 40, 50];

function collect(data3) {
    return data3 > 50;
}

let outs = data3.every(collect);

console.info(outs);
