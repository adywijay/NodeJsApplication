/* 
 * Recurcive function adalah seperti halnya fungsi rekursi pada umumnya
 * yang mana memanggil dirinya sendiri 
 * syntax dasar :
 * function recurse() {
        if(condition) {
            // stop calling itself
            //...
        } else {
            recurse();
        }
    }
 */



function countDown(fromNumber) {
    console.log(fromNumber);
    countDown(fromNumber-1);
}

countDown(10);


function sum(n) {
  if (n <= 1) {
    return n;
  }
  return n + sum(n - 1);
}

sum(3);



