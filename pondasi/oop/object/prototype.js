/* 
 * Prototype objek js seperti halnya polymorphisme class
 * disimbolkan dengan keyword namaFungsi.prototype.namaMethod
 */


function Segitiga(a, t) {
    
    this.alas   = a;
    this.tinggi = t;


    Segitiga.prototype.setInput = (function (...inputn) {
       let list_input = {
            Alas   : this.alas,
            Tinggi : this.tinggi
        };
        console.log(list_input);
    });
    
    Segitiga.prototype.hitungLuas = (function() {
        let luas = (this.alas * this.tinggi) / 2;
        console.log('Luas segitiga : ' + ' ' + luas);
    });
}


let x = [20, 5];
let segitiga = new Segitiga(...x);
segitiga.setInput(...x);
segitiga.hitungLuas();


//Hierarcical Extend prototype
let person = {
    name: "John Doe",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};

console.log(person.__proto__ === Object.prototype);


let person1 = {
    name: "John Doe",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};
let teacher = Object.create(person1);
teacher.name = 'Jane Doe';
teacher.teach = function (subject) {
        return "I can teach " + subject;
};
/*
let teacher = Object.create(person, {
    name: { value: 'John Doe' } ,
    teach: { value: function(subject) {
        return "I can teach " + subject;
    }}
});
console.log(Object.getPrototypeOf(teacher) === person);
 * 
 */