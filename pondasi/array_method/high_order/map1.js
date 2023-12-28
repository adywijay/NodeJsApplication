let circles = [
    10, 30, 50
];


function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);
}

let areas = circles.map(circleArea);
console.log(areas);
