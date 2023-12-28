

let xyaz = function (name) {
    console.log('Hello' + ' ' + name);
};

xyaz('asiuu');


let params = function (value) {
    console.log(typeof (value));
};

params('tt');


console.log(typeof (function (nilai) {
    nilai = 23213;
    return nilai;
}));


(function (x = 1234) {
    console.log(
      typeof (x)
    );
})();


let person = {
    firstName: 'John',
    lastName: 'Doe',
    Parent: {
        Child : 'Chunck',
        Sister: 'Abiya'
    }
};

(function () {
    console.log(person.firstName + ' ' + person.Parent.Child);
})(person.Parent);



let Mobil = {
    getMerk : 'Toyota Avanza',
    getMachine : '16 Valve full DOHC',
    getIdentity : {
        getYearProductions : 2022,
        getType : 'GearerManual',
        getPolicyNumber : 'AE 1980 IKS'
    }
};

(function() {
    console.log(
       'Merk :' + ' ' + Mobil.getMerk + ' ' + 'Machine : ' +  Mobil.getMachine + '\n' +
       'Identitys' + ' ' + Mobil.getIdentity.getYearProductions
    );
})(Mobil);