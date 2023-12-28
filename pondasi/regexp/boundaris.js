/**
 * Boundaries dilambangkan dnegan simbol regexp /b
 */

let desc = "Nama:FitriNurHayatiAlamat:initW";
let pattern = /\bFitri/m;

let getserch = desc.match(pattern);
console.log(getserch);