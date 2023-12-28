let target = function() {
  return 'Original Function';
};

let handler = {
  apply: function(target, thisArg, argumentsList) {
    console.log('Menggunakan proxy untuk memanggil fungsi');
    return target.apply(thisArg, argumentsList);
  }
};

let proxy = new Proxy(target, handler);

let result = proxy();

console.log(result); // Output: "Original Function"
