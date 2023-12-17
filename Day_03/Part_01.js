const fs = require('fs');

fs.readFile('./exemple.txt', 'utf-8', (err, data) => {
    const input = data
    console.log(input);
});