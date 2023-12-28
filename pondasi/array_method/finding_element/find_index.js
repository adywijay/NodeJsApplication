/* 
 * Metode ini findIndex() mengembalikan indeks elemen yang memenuhi 
 * fungsi pengujian atau -1 jika tidak ada elemen yang lulus pengujian.
 */


let ranks = [1, 5, 7, 8, 10, 7];
const products = [
  { name: 'Phone', price: 999 },
  { name: 'Computer', price: 1999 },
  { name: 'Tablet', price: 995 }
];

let modus = ranks.findIndex(pramout => pramout === 7);
let search_index_range = ranks.findIndex(
    (pramout, index) => pramout === 7 && index > 2
);
let cari_kriteria_index = products.findIndex(product => product.price > 1000);

let print_out = {
    fungsi_modus : modus,
    fungsi_cari_index_modus : search_index_range,
    fungsi_cari_kriteria_index : cari_kriteria_index
};

console.log(print_out);