let angka = [2, 4, 8, 10];

let kalkulasi = angka.reduceRight((previousValue, currentValue) => {
    return currentValue + previousValue;
});

console.log(kalkulasi);