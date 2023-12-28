// let re = /[A-Z]/;
// let str = 'hi There! How are you?';
// let index = str.search(re);

// console.log(index);


function printShow(param, regex) {

    let tmpshow = param.search(regex);
    return tmpshow;
    console.log(tmpshow);
}

let re = /[A-Z]/;
let str = 'hi There! How are you?';

console.log(printShow(str, re));