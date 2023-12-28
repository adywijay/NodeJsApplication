
(function (umur) {

    return umur > 20 ? console.log('Allowed') : console.log('Not Allowed');

})(18);


((umur1) => {
    return umur1 > 20 ? console.log('Allowed') : console.log('Not Allowed');
})(18);


let Nyoba = (function () {

    function cek(nilai) {
        switch (nilai !== 0) {
            case nilai > 81:
                console.log('A');
                break;
            case nilai >= 70 && nilai <= 81:
                console.log('B');
                break;
            case nilai >= 55 && nilai >= 69:
                console.log('C');
                break;
            default:
                console.log('D');
                break;
        }
    };
    
    return {
        result : cek
    };

})();

let hasil = new Nyoba.result(89);
hasil;