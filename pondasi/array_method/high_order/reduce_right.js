/**
 * mereduksi array menjadi satu nilai dengan menjalankan fungsi panggilan balik pada dua nilai array 
 * (dari kanan ke kiri).
 */


let numbers = [1, 2, 3];

let sum = numbers.reduceRight(function (previousValue, currentValue) {
    console.log({ previousValue, currentValue });
    return previousValue + currentValue;
});

console.log(`Result:${sum}`);