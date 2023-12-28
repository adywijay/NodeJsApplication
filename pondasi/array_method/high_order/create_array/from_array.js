/**
 * Contoh 1
 */
function arrayFromArgs() {
    var results = [];
    for (var i = 0; i < arguments.length; i++) {
        results.push(arguments[i]);
    }
    return results;
}
var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
console.log(fruits);


/**
 * Contoh 2
 */

function addOne() {
    return Array.from(arguments, x => x + 1);
}
console.log(addOne(1, 2, 3));