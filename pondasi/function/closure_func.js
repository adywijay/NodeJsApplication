/* 
 * Closure adalah penutup atau dengan kata lain batasan 
 */

// #Contoh 1 
let motor = 'Beat Cw 110';
function showDetail() {
    let brand = 'honda';
    console.log(brand + ' ' + motor);
}

let cek = new showDetail();
console.log(cek);

console.log('\n\n\n\n\n');

// #Contoh 2
function Person() {
    
        let nama = 'Anane mung iki';

            function getDetail() {
                console.log(nama);
            };

    //return getDetail();
    return getDetail;
};

//Person();

let get = Person();
get();

console.log('\n\n\n\n\n');

// #Contoh 3 
function greeting(message) {
   return function(name){
        return message + ' ' + name;
   };
};
let sayHi = greeting('Hi');
let sayHello = greeting('Hello');

console.log(sayHi('John')); // Hi John
console.log(sayHello('John')); // Hello John
console.log('\n\n\n\n\n');


// #Contoh 4 closure dalam perulangan 
for (var index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
};

console.log('\n\n\n\n\n');

for (let index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 4000);
}