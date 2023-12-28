/**
 * i =======> ignore 
 * Artinya mengabaikan case cencitive pada clue pattern 
 * Contoh : /Hi/i --> pencarian mengabaikan case cencitive jadi,
 *      bila pada contoh terdapat hi atau HI maka akan dianggap sama
 *          menghasilkan nilai true atau base logic OR
 */
let voxl = "lljhfnhfhhjhunPtSemestaRUANGIn0v45SI";

let re = /john/;
let pathrn_ig = /j/i;
let pathrn_noig = /RUANg/;
let getPathrn = new RegExp('RUANG');


let result = re.test('Hi John');
let resl = pathrn_ig.test(voxl);
let reslnoig = pathrn_noig.test(voxl);
let callget = getPathrn.test(voxl);

console.log(result);
console.log(resl);
console.log(reslnoig);
console.info(callget);



