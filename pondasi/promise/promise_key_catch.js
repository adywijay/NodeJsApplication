/* 
 * keyword catch fungsinya sama dengan keyword then, namun
 * key catch untuk handling error atau rejected dari promise sedagkan then handling success dari calback resolve promise
 */


let age = 20;
let geter = new Promise(
    function (resolve, reject) {
        if (age > 20) {
           resolve('Access Invoked');    
        }else{
            reject('Access Blocked');
        }    
    }
);

geter.then((params)=>{
    console.log(params);        
}).catch((pram) => {
    console.log(pram);
});