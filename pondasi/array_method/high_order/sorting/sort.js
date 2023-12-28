let data = [0, 1, 2, 3, 10, 20, 30];
let setsort = data.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(setsort);

/**
 * Sorting Descending
 */

let data_sample = [1, 7, 9, 4, 5, 3];

let sortDescending = data_sample.sort((a, b) => {
    return b - a;
});

console.log(sortDescending);


/**
 * Sorting Ascending
 */

let data_sample_asc = [5, 5, 3, 6, 8, 2, 1];
let sortAscending = data_sample_asc.sort((a, b) => {
    return a - b;
});

console.log(sortAscending);
