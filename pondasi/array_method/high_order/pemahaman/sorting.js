const myArr = [
    { name: "X00", price: 100 },
    { name: "X01", price: 100 },
    { name: "X02", price: 100 },
    { name: "X03", price: 100 },
    { name: "X04", price: 110 },
    { name: "X05", price: 110 },
    { name: "X06", price: 110 },
    { name: "X07", price: 110 }
];

let goSort = myArr.sort((a, b) => {
    return b.price - a.price;
});


console.log(goSort);

