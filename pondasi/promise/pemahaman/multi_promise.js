let inputs = [50, 78];
let psgPanjang = new Promise(
    function(resolve, reject) {
        if (inputs.length !== 0) {
            let p = inputs[0];
            let l = inputs[1];
            temp_data = {
                panjang : p,
                lebar   : l,
                execute(){
                    return this.panjang * this.lebar;
                }
            };
            resolve('Luas : ' + ' ' + temp_data.execute());
        }else{
            reject('This datas is : ' + ' ' + inputs.length);
        }    
    }
);

psgPanjang.then((rsltOk)=>{
    console.info(rsltOk);
}).catch((rsltNok)=>{
    console.info(rsltNok);
});