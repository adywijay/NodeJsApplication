
let nums = null, valuess = 20;

function tesA(nums = null, valuess) {
    if (nums !== null && valuess !== null) {
        console.log(   
            'Variabel Pertama' + ' ' + nums + '\n' +
            'Variabel Kedua' + ' ' + valuess + '\n' 
        );
    }
    console.log(nums || valuess || 'AHAGAGA');
}

tesA(30, 40);



function greetings(ucapan) {
    let getout = console.log(
            'Hallo' + ' ' + ucapan
    );
    
    return getout;
}

let ucapan = greetings('Selamat Pagi');


function introduct(nama, alamat, umur) {
    let getData = console.log(
            'Nama' + ' ' + nama + '\n',
            'Alamat' + ' ' + alamat + '\n',
            'Umur' + ' ' + umur + '\n',
    );
    return getData;
}

let getIntro = introduct('Kuniman','Gamping, Sleman, Yogyakarta',30);


function outputAll(ucapan,getIntro) {
    console.log(
        ucapan + ' ' + getIntro
    );
}

let getAll = outputAll;

console.log(getAll);