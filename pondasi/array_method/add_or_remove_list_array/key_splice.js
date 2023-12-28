/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


let scores = [1, 2, 3, 4, 5];
let deletedScores = scores.splice(1, 3);

console.log(deletedScores);

/* Mode Mengambil */

/* Mode Insertions */
let insertion = scores.splice(1,2,'Fitri','Ayub');
console.log(scores);

/* Mode Replace */

let replacement = scores.splice(1, 1, 'Ini replace');
console.log(scores);
