/**
 * flag global ignore ======> gi
 *       method exec merupakan anggota sejenis instance Regexp (new Regexp)
 *          melakukan pencarian kecocokan dalam sebuah string dan mengembalikan 
 *              array yang berisi informasi detail tentang kecocokan tersebut.
 */



let voxl = "lljhfnhfhhjhunPtSemestaRUANGIn0v45SI";



/**
 * Pattern
 */
let pathrnGi = /Pt/gi;
let pathrnGiMtch = /PT/;
let pathrnGi_1 = /nh/gi;
let pathern_0 = /0/gi;
let pathern_2 = /Si/gi;
let pathern_3 = /4/gi;
let pathern_4 = /ui/gi;
let pathern_5 = /fg/gi;
let pathern_6 = /In0/gi;


/**
 * test Method
 */
let caller = pathrnGi.test(voxl);
let callMatch = pathrnGiMtch.test(voxl);
let call_1 = pathrnGi_1.test(voxl);






/**
 * exec Method
 */
let callGli = pathrnGiMtch.exec(voxl);
let callex = pathern_0.exec(voxl);
let callex_0 = pathern_2.exec(voxl);
let callex_1 = pathern_3.exec(voxl);



/**
 * match Method
 */
let wthMtch = voxl.match(pathrnGi_1);
let wthMtch1 = voxl.match(pathern_4);
let wthMtch2 = voxl.match(pathern_5);
let wthMtch3 = voxl.match(pathern_6);



console.log(caller);
console.log(callMatch);
console.log(callGli);
console.log(callex);
console.log(callex_0);
console.log(callex_1);
console.log(wthMtch);
console.log(wthMtch1);
console.log(wthMtch2);
console.log(wthMtch3);
