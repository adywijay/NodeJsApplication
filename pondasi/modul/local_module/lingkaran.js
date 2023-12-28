

    exports luasLingkaran(r) {
        let phi = 3.14;
        let callphi = parseFloat(phi);

        if (r !== '') {
            let luas = parseFloat(callphi * Math.pow(r, 2));
            return luas;
        } else {
            return 404;
        }
    };

module.exports = { lingkaran };