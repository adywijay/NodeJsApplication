function SearchJari(diameter) {
    let d = diameter / 2;
    console.log(
       "\n" +
       "Diket Diameter =" + " " + diameter + "\n" +
       "Jari - Jarinya Adalah" + " " + d
    );
    return d;
}

function LuasLingkaran(d) {
    let phi = 3.14;
    let luas = phi * Math.pow(SearchJari(d), 2);
    return luas;
}

let luas_lingkar = LuasLingkaran(12.7);
console.log(
    "\n" + "Luas Lingkaran = " +
    luas_lingkar
);