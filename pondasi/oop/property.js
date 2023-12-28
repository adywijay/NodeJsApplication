/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


class Person {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	static createAnonymous(gender) {
		let name = gender === "male" ? "John Doe" : "Jane Doe";
		return new Person(name);
	}
}

//console.log(Person.createAnonymous('male'));
this.constructor.createAnonymous('male');

//let ck = new Person('male');
//ck.createAnonymous('male');