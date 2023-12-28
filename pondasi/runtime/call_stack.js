/* 
 * Call Stack adalah nested function artinya suatu fungsi dapat memanggil fungsi yang lain dalam suatu block kode
 */


function getHello() {
    return 'Hello Ngab';
}

function sayHy() {
    return getHello();
}


console.log(sayHy());