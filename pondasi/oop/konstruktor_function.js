
function getDetails(name, address) {
    console.log(new.target); // dump cek sebuah function apakah sudah dipanggil dengan instance
    this.name = name;
    this.address = address;
}


let data = new getDetails('Gundri', 'Ngaben 23 Sologablok');
console.log(data.name);



getDetails.prototype.getFullName = function () {
  return this.name + ' ' + this.address;
}; 
