let person = {
    firstName: 'Jane',
    lastName: 'Doe'
};

person.lastName &&= 'Smith';
console.log(person);


let title = 'JavaScript Awesome';
title ||= 'untitled';

console.log(title);


let tes = '';
tes ??= 'number';

console.log(tes);