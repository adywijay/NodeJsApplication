/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let motor = {
    merk  : 'Suprax 125',
    brand : 'Honda'
};

//const getDet = () => console.log(' mereke ' + this.merk + ' brand ' + this.brand);

const say = function (message) {
  console.log(message);
  console.log(say instanceof Function); //--------------------------> cek validasi instance dari fungsi
  console.log(' mereke ' + this.merk + ' brand ' + this.brand);
};

say.call(motor, 'Mereke opo slurd.? :'); //instance menggunakan objek terdefinisi



//==============================================================================

function add(x, y) {
  return x + y;
}

let result = add(10, 20);
console.log(result);


console.log(add.call(this, 10, 60)); //instance auto menggunakan keyword this



//==============================================================================
//implementasi key call dalam instance

function Box(height, width) {
  this.height = height;
  this.width = width;
}

function Widget(height, width, color) {
  Box.call(this, height, width);
  this.color = color;
}

let widget = new Widget('red', 100, 200);
//widget.call(motor);
console.log(widget);
