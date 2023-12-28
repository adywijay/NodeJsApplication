/* 
 * Keyword Super artinya semua yang berada pada kelas induk bisa diturunkan baik (method, maupun properti)
 */

//Inheritance memakai keyword prototype
function Animal(legs) {
    this.legs = legs;
}

Animal.prototype.walk = function() {
    console.log('walking on ' + this.legs + ' legs');
};

function Bird(legs) {
    Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;


Bird.prototype.fly = function() {
    console.log('flying');
};

var pigeon = new Bird(2);
pigeon.walk(); 
pigeon.fly();  


//Inheritance memakai key extend dan super

class Honda {
    
    constructor(brand){
        this.brand = brand;
    }
    
    Running(){
        console.log('Transportations is running');
    }
    
    Stop(){
        console.log('Transportations is stop');
    }
};


class Cycle extends Honda {
    
    constructor(brand){
        super(brand);
        //this.brand = brand;
    }
    
    Brake(){
        
        console.log('Transportations is brake');
    };
    
    tesMethod(){
        super.Stop();
    }
};


let tes2 = new Cycle('Honda');
tes2.Running();
tes2.tesMethod();