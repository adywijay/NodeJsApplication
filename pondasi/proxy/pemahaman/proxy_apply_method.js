function rectangleArea(width, height) {
    return width * height;
}
const handler = {
    apply: function (target, thisArgs, argsList) {
        console.log(argsList);
        if (argsList.length === 2) {
            return Reflect.apply(target, thisArgs, argsList);
        } else {
            throw new Error ('Invalid no of arguments to calculate');
        }
    }
};

const proxyf = new Proxy(rectangleArea, handler);
const result = proxyf(10, 20);
console.log('area is ', result);
proxyf(10); // Error