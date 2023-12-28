let sks = [2, 3, 2, 4, 4, 4, 4, 2, 2, 2, 3];

let counter = sks.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
});

console.log(counter);
