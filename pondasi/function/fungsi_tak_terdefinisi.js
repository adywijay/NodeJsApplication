/* 
 *syntax dasar anonim fungsi :
 *
 * (function () {
        //...
    }); 

    tidak boleh menggunakan arrow fungsi

    1. Event handlers
    2. Object methods
    3. Prototype methods
    4. Functions that use the arguments object
 */


let show = function() {
    console.log('Anonymous function');
};

show();


let dna = function setA() { 
    console.log("Ini Tes");
};

dna();

setTimeout(function() {
    console.log('Execute later after 1 second');
}, 1000);


//Anonnymouse function base ++ ()

(function() {
    console.log('dsfgn');
})(); //---> jika tanpa tanda () maka akan menampilkan output annonympuse function bukan 'dsfgn'

(function() {
    console.log('tanpa tanda()');
});


let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);


//Arrow functions

let show = function () {
    console.log('Anonymous function');
};

let show = () => console.log('Anonymous function');



//Arrow functions with params
let add = function (a, b) {
    return a + b;
};

let add = (a, b) => a + b;   


// Annonymouse function > 1 baris

let nilai = (angka) => {
    if (angka >= 81) {
        console.log('A');
    }else if (angka >= 70 && angka <= 80) {
        console.log('B');
    }else{
        console.log('C');
    }
};

nilai(90);