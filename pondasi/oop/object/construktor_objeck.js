/* 
 * Konstruktor Objek logicnya sama dengan konstruktor class, hanya saja konstruct di objek tidak menggunakan key 
 * construct(){} seperti halnya di class melainkan langsung menggunakan pointer (this.)
 * sedangkan asesor (geter & seter) dikombinasikan antara pointer, annonymouse funct dan objek
 */


function konstrObjk(data1,data2,data3) {
    
    //Konstruktor
    this.data1 = data1;
    this.data2 = data2;
    this.data3 = data3;
    
    //Assesor set
    this.setParams = (function (data1,data2,data3) {
        let list_data = {
            data1 : this.data1,
            data2 : this.data2,
            data3 : this.data3
        };
        return list_data;
    });
    
    //Assesor get
    this.getParams = (function() {
        return data = {
            data1 : this.data1,
            data2 : this.data2,
            data3 : this.data3
        };
    });
    
}

let datane = ['Anonying', 'Sweet', 'Grouble'];
let call = new konstrObjk(...datane);
call.setParams(...datane);
console.log(call.getParams());