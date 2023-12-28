/**
 * FlatMap merupakan sequence dengan mapping
 * 
 * Syntax dasar : 
 * array.flatMap(function(currentValue, index, arr), thisValue)
 */

const myArr = [1, 2, 3, 4, 5, 6];

//const newArr = myArr.flatMap((x) => console.log(x));

//console.log(newArr);

myArr.flatMap(
    (x) => console.log(x * 4)
);
