let input_from_user = {
    name: "Lolita Anafora Angela",
    dob: "20/02/1996",
    address: "St. Kounkuma Nagakara, Shima, Tokyo "
};

let grep_pattern = /\b\dAngela\b\b/ig;
let getName = input_from_user.name;

let call_check = getName.match(grep_pattern);
call_check !== null ? console.log('Search' + `${grep_pattern}` + ' ' + 'result is match') : console.log(404);

//console.log(call_check === null);