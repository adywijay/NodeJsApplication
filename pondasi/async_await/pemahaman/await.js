/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function checkNilai(val_input) {
    return new Promise((resolve, reject)=>{
        if (typeof  val_input !== 'number' && val_input === 0) {
            reject({
                respon_code : 404,
                msg : 'Data isnt valid, value type of input isnt number or value is null'
            });
        }else{
            resolve(val_input);
        }
    });
}

function seachJari(val_d) {
    return new Promise((resolve, reject)=>{
      resolve(val_d / 2);
    });
}

function getLuas(param_from_d) {
    const phi = 3.14;
    
        let gen_luas = phi * (param_from_d * param_from_d);
        
            return new Promise((resolve, reject)=>{
                resolve(gen_luas);
            });
}

async function getLuasSegitiga() {
    let getInput =  await checkNilai(30);
    let setJari  =  await seachJari(getInput);
    let compute  =  await getLuas(setJari);
    
    console.log(compute);
};

getLuasSegitiga();