
let words = "Yakatori Gunma Yoshi adalah seorang programmer handal marindal mangan sandal dari kota Yukitora Tokyo";
let patth = /\smarindal{1,}?/m;
let gets = words.match(patth);

gets.forEach((value => {
    console.log(value)
}));