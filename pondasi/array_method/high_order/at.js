



/**
 * index positif array    0       1        2 
 * list array             5       6        7
 * index negatif array   -3      -2       -1
 * 
 * at() metode JavaScript Array untuk mengembalikan elemen berdasarkan indeks.
 * 
 * Ex : 
 * let arr = [5, 6, 7];
 * arr.at(-2) ============> hasilnya maka 6
 */

function getAtArr(list_arr, param_at = 0) {
    console.log(list_arr.at(param_at));
}

const scores = [5, 6, 7];
getAtArr(scores, -2);

//console.log(scores.at(1)); // same as scores[1]

// get the last element
//console.log(scores.at(-1)); // 7

//console.log(scores.at(-1) === scores[scores.length - 1]); // true

