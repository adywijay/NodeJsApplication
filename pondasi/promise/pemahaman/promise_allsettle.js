/* 
 * Promise.allSettled menampilkan semua promise hasil, baik resolve maupun reject
 */

let settle1 = new Promise((resolve, reject)=>{
    resolve(200);
});

let settle2 = new Promise((resolve, reject)=>{
    reject(404);
});

let def = Promise.allSettled([settle1, settle2]);
def.then((result)=>{
    console.log(result);
});
