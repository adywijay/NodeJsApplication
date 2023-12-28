const { error } = require('console');
const fs = require('fs');

fs.readdir(
    './', 'utf-8', (err, content) => {
        if (err) {
            return error;
        }
        console.log(content);
    });