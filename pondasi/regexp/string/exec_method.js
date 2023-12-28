let message = 'Hi, are you there? hi, HI...';
let re = /hi/gi;

let matches = [];
let match;
do {
    match = re.exec(message);
    if (match) {
        matches.push(match);
    }
} while (match != null)

console.dir(matches);