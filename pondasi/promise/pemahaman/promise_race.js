
let getDatas = [];

let mod1 = new Promise((resolve, reject)=>{
    if (getDatas.length !== 0) {
        resolve(getDatas);
    }else{
        reject(function () {
            let respon_code = 404, msg = 'Data Not Found';
            return respon_code;
        });
    }
});

Promise.race([mod1]).then((result)=>{
    console.log(result);
}).catch(result => console.log(result));