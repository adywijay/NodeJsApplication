let kv = 80;
let p = new Promise((resolve, reject) => {
        resolve(kv);
});

p.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
            resolve(result * 2);
    });
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
            resolve(result * 3);
    });
}).then(result => console.log(result));
