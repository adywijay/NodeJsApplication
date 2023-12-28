/* 
 * Perbedaan antara apply()dan call()
 * adalah bahwa Anda harus meneruskan argumen ke apply()metode sebagai objek mirip-array, 
 * sedangkan Anda meneruskan argumen ke fungsi call()satu per satu.
 */

function add(x, y) {
  return x + y;
}

console.log(add instanceof Function); // true

function add(x, y) {
  return x + y;
}

let result = add.call(this,10, 20);
console.log(result); // 30

console.log('\n\n\n');

let cat = { type: 'Cat', sound: 'Meow' };
let dog = { type: 'Dog', sound: 'Woof' };

const say = function (message) {
  console.log(message);
  console.log(this.type + ' says ' + this.sound);
};

console.log('\n\n\n');
console.log('Keyword apply');
console.log('\n');
say.apply(cat, ['What does a cat say?']);
say.apply(dog, ['What does a dog say?']);

console.log('\n\n\n');
console.log('Keyword call');
console.log('\n');
say.call(cat, 'What does a cat say?');
say.call(dog, 'What does a dog say?');


//Implementasi key call dalam kontruktor funngsi
function fncCall(nama, umur) {
    this.nama = nama;
    this.umur = umur;
}


function getFnCall(nama, umur, status) {
   fncCall.call(this, nama, umur);
   this.status = status;
}

let aha = new getFnCall('ajojing', 22, 'kamu nanyea.?');
console.log(aha);



//Implementasi key call untuk meminjam fungsi lain

const car = {
  name: 'car',
  start() {
    console.log('Start the ' + this.name);
  },
  speedUp() {
    console.log('Speed up the ' + this.name);
  },
  stop() {
    console.log('Stop the ' + this.name);
  }
};

const aircraft = {
  name: 'aircraft',
  fly() {
    console.log('Fly');
  }
};

car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.fly();