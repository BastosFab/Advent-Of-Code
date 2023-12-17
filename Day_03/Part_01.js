const fs = require('fs');

const hasSymbol = (str) => {
    if(str?.length && str.split('').find((s) => isNaN(s) && s !== '.')) return true;
    return false;
}

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    const input = data.split('\n').filter((n) => n);

    const rows = input.length;
    const columns = input[0].length;

    let founds = [];

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            const number = "" + input[i][j];

            if (isNaN(number)) {
                continue;
            }

            let num = number;

            while(++j < columns) {
                if(Number.isInteger(parseInt(input[i][j]))) {
                    num += input[i][j];
                } else break;
            }

            const top = i === 0 ? "" : input[i - 1].substring(j - num.length - 1, j + 1);
            const bottom = i === rows - 1 ? "" : input[i + 1].substring(j - num.length - 1, j + 1);
            const left = input[i][j - num.length - 1] || "";
            const right = input[i][j] || "";

            // console.log(num, top, bottom, left, right);
            if (hasSymbol(top) || hasSymbol(bottom) || hasSymbol(left) || hasSymbol(right)) {
                founds.push(Number(num));
            }
        }
    }
    console.log(founds.reduce((a, b) => a + b, 0));
});