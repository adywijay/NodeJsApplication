/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


// variabel assign to class

let var1 = class {
    
    constructor(...params){
        this.params = params;
    };
    
    getData(){
        return this.params;
    };
};

let datas = ['Ajojing.,S.Pd','3B', 'Alun-Alun Nganyuk'];
let call1 = new var1(...datas);
console.log(call1.getData());


//Class of class auto return instance

function initClass(param_class) {
    return new param_class();
};

let call2 = initClass(
      
        class {
            
            tesDicoba(){
                console.log('Ini nyaoba');
            };
        }
);

call2.tesDicoba();


//Singelton

let instace1 = new class {
    
    constructor(greeting){
        this.greeting = greeting;
    }
    
    showGreeting(){
        console.log('your says :' + this.greeting);
    };
        
}('Hallo Kuyy.!!!');


instace1.showGreeting();