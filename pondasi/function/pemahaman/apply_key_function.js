/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};

const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};

let result = computer.turnOn.apply(server);
console.log(result);
//=========================================== keyword apply modifikasi method objek


//=========================================== keyword apply gabungkan array
let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);
console.log(arr); 
