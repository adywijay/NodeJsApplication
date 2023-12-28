const message = ["JavaScript ", "is ", "fun."];
function joinStrings(accumulator, currentValue) {
    return accumulator + currentValue;
}

let joinedString = message.reduce(joinStrings);
console.log(joinedString);