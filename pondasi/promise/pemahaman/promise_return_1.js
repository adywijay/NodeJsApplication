let d = 42;
let ko = new Promise((resolve,reject)=>{
    resolve(d);
});

ko.then((result)=>{
    console.log('Diameter :' + ' ' + result);
    return new Promise((resolve, reject)=>{
        resolve(result / 2);
    });
}).then((result)=>{
    console.log('Jari - Jari :' + ' ' + result);
    return new Promise((resolve, reject)=>{
        const phi = 3.14;
        resolve(phi * (result * result));
    });
}).then(result => console.log('Luas Lingkaran :' + ' ' + result));