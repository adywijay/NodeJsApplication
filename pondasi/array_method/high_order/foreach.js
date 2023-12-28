/**
 * Base logic manual foreach
 */

let ranks = ['A', 'B', 'C'];

for (let i = 0; i < ranks.length; i++) {
    console.log(ranks[i]);
}


/**
 * Using foreach
 */

let dataforForeach = [
    { name: "X00", price: 100 },
    { name: "X01", price: 100 },
    { name: "X02", price: 100 },
    { name: "X03", price: 100 },
    { name: "X04", price: 110 },
    { name: "X05", price: 110 },
    { name: "X06", price: 110 },
    { name: "X07", price: 110 }
];

dataforForeach.forEach((value, index) => {
    console.log(value);
});
