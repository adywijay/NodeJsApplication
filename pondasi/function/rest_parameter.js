/* 
 * rest parameter ditandai dengan awalan ... atau symbol (dot 3) diikuti nama parameter
 * misal : ...data
 * rest parameter memuat data dalam bentuk array
 */


function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result)
            result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));


function alolo(key,...molu) {
    
    molu = {
       nama : 'Sarjono',
       nim  : '15.01.909'
    };
    
    console.log(key,molu);
}

let red = new alolo('ini parameters rest', 2,3,3,3,3,4,5,6,7,8,8);
red;