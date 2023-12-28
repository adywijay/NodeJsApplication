/* 
 * includes() digunakan untuk memeriksa apakah array berisi elemen
 * berbedaanya Metode ini indexOf() mengembalikan indeks kemunculan pertama elemen dalam array. 
   Jika array tidak menyertakan elemen, indexOf()hasilnya adalah -1
 * sedangkan key includes() kembali true jika array berisi elemen tertentu; 
   Jika tidak, ia akan kembali false.
 */


let dataset1 = [1,2,4,5,6,7];
let ceker = {
    cek1 : dataset1.includes(3),
    cek2 : dataset1.includes(2),
    cek3 : dataset1.includes(5),
    cek4 : dataset1.includes(8),
    cek5 : dataset1.includes(9),
    cek6 : dataset1.includes(4)
};

console.log(ceker);