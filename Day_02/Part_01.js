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
            let [game, score] = row.split(':');

            game = Number(game.split('Game ')[1]);

            score = score
                .split(';')
                .map((x) => x.trim())
                .map((x) => 
                    x.split(',').reduce((acc, x) => {
                        const [number, color] = x.trim().split(' ');
                        acc[color] = Number(number);

                        return acc;
                    }, {}))

            console.log(game, score);
            return { game, score };
        });
    console.log(input);

    const win = input.filter(row => {
        const {score} = row;

        return score.every((x) => {
            return Object.keys(x).every((color) => x[color] <= conditions[color]);
        });
    })
    .reduce((acc, row) => acc + row.game, 0);

    console.log(win);
});