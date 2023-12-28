/* 
 * Promise adalah callback untuk menghandle pembentukan kondisi , seperti halnya try....catch
 * yang mana library penunjang pembentukan kondisi berasal dari bagan flow block kode callback tsb
 */



let count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count !== false) {
        resolve('Kondisi Benar');
    } else {
        reject("Kondisi Salah");
    }
});

console.log(countValue);