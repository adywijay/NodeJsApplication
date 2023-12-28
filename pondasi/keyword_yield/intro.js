/**
 * 
 Kata yieldkunci memungkinkan Anda untuk menjeda dan melanjutkan fungsi generator ( function*).

 Berikut ini adalah sintaks dari yield kata kunci tersebut:

    [variable_name] = yield [expression];
 */

function* introYield(prax) {
    for (let i = 0; i <= prax; i++) {
        console.log(yield i);
    }
}

let v = introYield(3);

console.log(v.next());
