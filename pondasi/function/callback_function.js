/* 
 * Callback function adalah fungsi yang memakai atau diassign kepada fungsi lain
 * nested function
 */
//Contoh 1

function filter(numbers, callback) {
  let results = [];
  for (const number of numbers) {
    if (callback(number)) {
      results.push(number);
    }
  }
  return results;
};

let numbers = [1, 2, 4, 7, 3, 5, 6];

let oddNumbers = filter(numbers, (number) => number % 2 !== 0);

console.log(oddNumbers);


// Contoh 2
/*
function isOdd(number) {
  return number % 2 !== 0;
};

function filter(numbers, fn) {
  let results = [];
  for (const number of numbers) {
    if (fn(number)) {
      results.push(number);
    }
  }
  return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers, isOdd));

 * 
 */