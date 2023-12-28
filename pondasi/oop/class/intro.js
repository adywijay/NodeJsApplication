
//Pembuatan kelas type 1

/*
 * keyword prototype sama halnya seperti Extended
 * 
 * 
 */

function Person(name) {
    this.name = name;
};

Person.prototype.getName = function () {
    return this.name;
};

var john = new Person("John Doe");
console.log(john.getName());

//Pembuatan kelas type 2
/*
 * Penulisan kelas seperti halnya menulis kelas oop pada umumnya
 * namun tanpa keyword konstruktor maka js akan set otomatis menjadi null
 * 
 */

class Persona {
    
    //sifat; /* Property */

    setSifat(sifat) {
        this.sifat = sifat;
    }
    
    getSifat(){
        return console.log(this.sifat);
    }
}

person1 = new Persona(); /* Instance */

person1.setSifat("Ngantukan");
person1.getSifat();



class Personc {
    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }
}

let f = new Personc('dfdsfsd');
console.log(f.getName());