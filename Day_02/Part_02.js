const fs = require('fs');

const conditions = {
    red: 12,
    green: 13,
    blue: 14
}

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    const input = data
        .split('\n').filter((line) => line)
        .map((row) => {
            let [, score] = row.split(':');

            score = score
                .split(';')
                .map((x) => x.trim())
                .map((x) => 
                    x.split(',').reduce((acc, x) => {
                        const [number, color] = x.trim().split(' ');
                        acc[color] = Number(number);

                        return acc;
                    }, {}))
            return score;
        }).map((score) => {
            return score.reduce((acc, x) => {
                Object.keys(x).forEach((color) => {
                    acc[color] = Math.max(acc[color] || 0, x[color]);
                })

                return acc;
            })
        })
        .reduce((acc, row) => 
            acc += Object.values(row).reduce((mul, item) => mul * item, 1), 
            0
        );

    console.log(input);
});