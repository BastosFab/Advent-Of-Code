const fs = require('fs');

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    const input = data.split('\n').filter((n) => n);

    const rows = input.length;
    const columns = input[0].length;

    const gearsDic = {};

    const findGears = (str, num, i, j) => {
        j = j === -1 ? 0 : j;
        for(let k = 0; k < str.length; k++) {
            const char = str.charAt(k);
            if(char === '*') {
                const ind = `${i}-${j + k}`;
                gearsDic[ind] = gearsDic[ind] ? [...gearsDic[ind], parseInt(num)] : [parseInt(num)];
            }
        }
    };

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

            findGears(top, num, i-1, j-num.length-1)
            findGears(bottom, num, i+1, j-num.length-1)
            findGears(left, num, i, j-num.length-1)
            findGears(right, num, i, j)
        }
    }

    const value = Object.values(gearsDic)
        .filter((n) => n.length === 2)
        .map((n) => n[0] * n[1])
        .reduce((a, b) => a + b, 0);

    console.log(value);
});