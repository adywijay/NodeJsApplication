
/**
 * ^– Jangkar sisipan cocok dengan awal teks.
   $– Jangkar dolar cocok dengan akhir teks.
   m- tanda m untuk mengaktifkan mode multiline yang menginstruksikan jangkar ^ dan $ untuk mencocokkan awal dan akhir teks serta awal dan akhir baris.
 */

let pram_cek_var = ' Compliance';
let valid = /^\s/;
let getern = valid.test(pram_cek_var);

console.log(getern === true ? 'Ya' + 'Ada Spasinya' : 'Tidak');
