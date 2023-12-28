/* 
 Synopsis :
    Dalam JavaScript, fungsi reguler dijalankan berdasarkan model run-to-completion. 
    Ia tidak dapat berhenti di tengah jalan dan kemudian melanjutkan dari tempat ia berhenti. 
    Misalnya: 

    function foo() {
        console.log('I');
        console.log('cannot');
        console.log('pause');
    }

    Fungsi ini foo() dijalankan dari atas ke bawah. 
    Satu-satunya cara untuk keluar foo() adalah dengan kembali dari sana atau melakukan kesalahan. 
    Jika Anda memanggil foo()fungsi tersebut lagi, eksekusi akan dimulai dari atas ke bawah.

    foo();

    I
    cannot
    pause
 */

function* generate() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}

let gen = generate();
console.log(gen);

let result = gen.next();
console.log(result);

result = gen.next();
console.log(result);

result = gen.next();
console.log(result);

//Karena generator dapat diubah, Anda dapat menggunakan for...of loop:

for (const g of gen) {
    console.log(g);
}
