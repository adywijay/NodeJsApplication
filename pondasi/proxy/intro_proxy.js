/* 
 * Proxy JavaScript adalah objek yang membungkus objek lain (target) dan memotong operasi dasar objek target.
 Operasi mendasar dapat berupa pencarian properti, penugasan, enumerasi, dan pemanggilan fungsi, dll.
 
 Secara lain proxy adalah replikasi objek yang mana objek asli dapat redefininisi maupun mengubah bentuk, 
 sifat dari objek asli tsb
 
 Syntax dasar :
 let proxy = new Proxy(target, handler);
 
 Dalam sintaks ini:
 
 target – adalah objek yang akan dibungkus.
 handler – adalah objek yang berisi metode untuk mengontrol perilaku target. 
 Metode di dalam handler objek disebut jebakan.
 */




let tempInput = {
    name: 'Shu Felix Xien',
    age: 22,
    status: 'Single'
};

let handler = {
    
    /* Handling user request by Method Get */
    
    get(target, property) {
        if (property === 'age' || property === 'status') {
            return 'Blocked';
        }
        return target[property];
    },
    
    /* Handling user request by Method Set */
    set(target, property, value) {
        
        if (property === 'age') {
            if (value < 18) {
                return 'The user must be 18 or older.';
            }
        }
        return target[property] = value;
    }
};

let testing1 = new Proxy(tempInput, handler);
console.log(testing1.name);


testing1.name = 'Stringos';
console.log(testing1.age);


