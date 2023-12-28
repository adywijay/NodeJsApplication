/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let person = {};
person.age = 25;
person.ssn = '012-38-9119';

Object.defineProperty(person, 'ssn', {
    enumerable: true
});

for (let prop in person) {
    console.log(person.propertyIsEnumerable('ssn'));
    console.log(prop + ' ' + person[prop]);
}
