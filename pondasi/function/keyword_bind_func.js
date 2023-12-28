/* 
 * Metode mengembalikan fungsibind() baru , ketika dipanggil, memiliki set ke nilai tertentu
 * bind()metode mengembalikan salinan fungsi fndengan nilai spesifik this( thisArg) dan argumen ( arg1, arg2, …).
 * Berbeda dengan metode call()and apply(), bind() metode ini tidak langsung menjalankan fungsinya. 
 * Itu hanya mengembalikan versi baru dari fungsi yang thisdisetel ke this Argargumen.
 */


let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};

/*
 * Kode ini akan menghasilkan undefined
 * karena getName sendiri adalah merupakan function ataupun method tersendiri
 */
let call = person.getName;
setTimeout(call, 1000);
//====================================================



//Solutions
setTimeout(()=>{
    person.getName();
}, 1000);

let f = person.getName.bind(person);
setTimeout(f, 1000);


// Menggunakan bind()untuk meminjam metode dari objek yang berbeda

let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};

let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};


let run = runner.run.bind(flyer, 20);
run();

