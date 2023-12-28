/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


//Promise All
let prm_all1 = new Promise((resolve, reject)=>{
    resolve(200);
});

let prm_all2 = new Promise((resolve, reject)=>{
    resolve(200);
});

let prm_all3 = new Promise((resolve, reject)=>{
    reject(404);
});

let definite_all = Promise.all([prm_all1,prm_all2,prm_all3]);
definite_all.then((rest_all)=>{
    console.log(rest_all);
}).then((rest_all)=>{
    console.log(rest_all);
}).catch((rest_all)=>{
    console.log(rest_all);
});

//Promise Race
let prm_race1 = new Promise((resolve, reject)=>{
    console.log('Successed');
    resolve(200);
});

let prm_race2 = new Promise((resolve, reject)=>{
    console.log('Successed');
    resolve(200);
});

let prm_race3 = new Promise((resolve, reject)=>{
    console.log('Nok');
    reject(404);
});

let definite_race = Promise.race([prm_race1,prm_race2,prm_race3]);
definite_race.then((result)=>{
  console.log(result);
}).catch((result)=>{
  console.log(result);
});


//Promise Any
let prm_any1 = new Promise((resolve, reject)=>{
    console.log('Successed');
    resolve(200);
});

let prm_any2 = new Promise((resolve, reject)=>{
    console.log('Successed');
    resolve(200);
});

let prm_any3 = new Promise((resolve, reject)=>{
    console.log('Nok');
    reject(404);
});

let definite_any = Promise.any([prm_any1,prm_any2,prm_any3]);
definite_any.then((result)=>{
  console.log(result);
}).catch((result)=>{
  console.log(result);
});
