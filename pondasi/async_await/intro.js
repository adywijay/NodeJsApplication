/* 
 * Kata “async” sebelum fungsi berarti satu hal sederhana: fungsi tersebut selalu mengembalikkan promise. 
 * Value lain dibungkus didalam promise yang resolve secara otomatis.
 * Jadi, async memastikan bahwa fungsi mengembalikkan promise, dan membungkus non-promise di dalamnya.
 * atau lebih mudahnya auto promise
 */


async function tes1(id) {
    return new Promise((resolve, reject)=>{
        if (typeof id !== 'number') {
            throw new Error("this id input isnt number");
        }
        console.log(id);
    });
}

tes1('er').then((result)=>{
    console.log(result);
}).catch(result => console.log(result));