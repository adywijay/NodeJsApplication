/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let tes = {};
tes.firstName = 'Oeng';
tes.lastName  = 'King Kong';
tes.genders   = 'Female';

Object.defineProperty(tes,'aha',{
    value : 'dsfds',
    writable : true,
    enumerable : true
});

console.log(tes.hasOwnProperty('aha'));
console.log(tes.propertyIsEnumerable('aha'));