/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/* 
function* forever() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

    let f = forever();
    console.log(f.next()); // 0
    console.log(f.next()); // 1
    console.log(f.next()); // 2
 */

function* latihan1(param_limit) {
    
    for (var i = 0; i < param_limit; i++) {
        yield i;
        //console.log(i);
    }
}


let paramse = latihan1(10);

console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());
console.log(paramse.next());