/* 
 * Objek adalah kumpulan pasangan kunci/nilai atau properti . Ketika nilainya adalah fungsi, properti menjadi metode. 
 * Biasanya, Anda menggunakan metode untuk mendeskripsikan perilaku objek.

    Misalnya, berikut ini menambahkan greet metode ke personobjek:
 */


let person = {
    firstName: 'John',
    lastName: 'Doe',
    getDetails : function () {
        return 'First Name :' + ' ' + this.firstName + ' ' + 'Last Name :' + this.lastName;
    }
};

person.greet = function () {
    console.log('Hello!');
};

person.greet = 'Helllllllllllllllo';

console.log(person.greet); // rechange value
console.log(person.getDetails()); 