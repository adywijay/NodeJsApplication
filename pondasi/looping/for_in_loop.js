/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let dat = {
    nama   : 'She_XJax',
    alamat : 'Jl.Gondopuro, Bangke, Ngesor Langit',
    phone  : '098373636353'
};

for (var a in dat) {
    let d = Symbol.for(a);
    console.log(d.toString());
}