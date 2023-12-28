/* 
 



try {
    
} catch (e) {
    //pada blok ini boleh langsung lempar custom pesan dari definisi kita
    //misal : console.log('Ini Errornya apa..?');  
}finally{
    console.log('Ini selalu dirunning apapun kondisinya');  
}

 */

let result = 0;
try {
  result = add(10, 20);
} catch (e) {
  console.log(e.message);
} finally {
  console.log({ result });
}