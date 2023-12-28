/* 
 * keyword then
 * merupakan function handle next apabila sebuah promise / atau kondisi resolve
 */


let count = false;

let countValue = new Promise(function (resolve, reject) {
    if (count !== false) {
        resolve('Kondisi Benar');
    } else {
        reject("Kondisi Salah");
    }
});

countValue.then(function successValue(result) {
    console.log(result);
}).catch(
    function errorValue(result) {
        console.log(result);
    }
);

     