/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


/**
 * Comment
 */
function luasSegiTiga(params_r, phi) {
    //let param = params_r;
    if (params_r %7 !== 0) {
        phi = 3.14;
        console.log(phi);
        return luasSegiTiga(this, phi);
    }
    console.log(phi);
    return luasSegiTiga(this, phi === (params_r * 22) / 7);
};


luasSegiTiga(14);