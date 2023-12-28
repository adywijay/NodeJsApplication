/* 
 * Immediately Invoked Function Expression (IFE)
 * Ekspresi fungsi yang segera dipanggil JavaScript adalah fungsi yang didefinisikan 
 * sebagai ekspresi dan dieksekusi segera setelah dibuat
 * ife function merupakan annonimouse function
 * 
 * (function(){

        

    })();


        versi arrow :

        (() => {
            //...
        })();

 */

// Contoh 1 fungsi biasa

/*
    let sum = function(a, b) {
       return a + b;
   };

   console.log(sum(30, 10));


        Diubah menjadi annonimouse fungsi =======> Contoh 2
*/

// Contoh 2

let sum = (function(a, b) {
    return a + b;
});

console.log(sum(40, 40));


let sum2 = (nilaia, nilaib) => {
    return nilaia * nilaib;
};

console.log(sum2(40, 50));


//Contoh 3
//Penerapan IFE ====> assign dan langsung digunakan melalui variabel

let sum4 = (function(a,b){
    return a + b;
})(10, 20);

console.log(sum4);


let sum5 = ((a,b) => {
    return a + b;
})(10, 20);

console.log(sum5);

//Contoh 4
//Penerapan IFE ====> assign dan langsung digunakan dengan parameter langsung pada fungsi IFE
(function(x,y){
        return console.log(x + y);
})(50,20);

((c, n) => {
    return console.log(c + n);
})(50,20);


//Contoh 5
//Penerapan IFE ====> pada closure

const calculator = (function () {
    function add(a, b) {
        return a + b;
    };

    function multiply(a, b) {
        return a * b;
    };
    return {
        add: add,
        multiply: multiply
    };
})();

console.log(calculator.multiply(50, 7));