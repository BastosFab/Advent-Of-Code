const fs = require('fs');

const conditions = {
    red: 12,
    green: 13,
    blue: 14
}

fs.readFile('./exemple.txt', 'utf-8', (err, data) => {
    const input = data
    console.log(input);
});