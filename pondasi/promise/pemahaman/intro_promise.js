
let promise = false;
let declare_promise = new Promise(
    (resolve, reject) => {
    if (promise) {
        resolve('Promise true conditions');
    }else{
        reject('Promise block');
    }
}
);

console.log(declare_promise.then());
//declare_promise.then(res => console.log(`Ok ${res} !`)).catch(res => console.log(`Its Ok ! ${res}`));