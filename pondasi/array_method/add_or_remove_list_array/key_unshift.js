/* 
 * menambahkan satu atau lebih elemen ke awal array dan mengembalikan panjang array baru
 */


let numbers = [30, 40];

const length = numbers.unshift(20);

console.log({ length });
console.log({ numbers });



let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];

for (const weekend of weekends) {
  days.unshift(weekend);
}

console.log(days);