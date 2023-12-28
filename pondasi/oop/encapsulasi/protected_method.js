/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


class Previlege {
    _umur = 18;
    
//    constructor(umur){
//        this.umur = umur;
//    }
    
    set valueUmur(umur){
       this._umur = umur;
    }
    
    get previlegeUmur(){
        this._umur < 20 ? console.log(this._umur + ' ' + 'Access blocked'): console.log(this._umur + ' ' + 'Access Granted');
    }
}

let calldata = new Previlege();
calldata.valueUmur = 20;
calldata.previlegeUmur;