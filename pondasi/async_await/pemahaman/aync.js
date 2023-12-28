/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

async function valueChecking(value) {
    return new Promise((resolve, reject)=>{
        if (typeof  value !== 'number') {
            reject({
                respon_code : 404,
                msg :'Value type isnt number'
            });
        }else{
            resolve(value);
        }
    });
}

let getes = valueChecking('p');
getes.then(console.log).catch(console.log);