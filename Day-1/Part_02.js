const fs = require('fs');

const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const getNumber = sum => {
    let firstNumber, lastNumber;
    let i = 0;
    let length = sum.length;

    do {
        if(!Number(firstNumber)) {
            if(Number(sum[i])) {
                firstNumber = Number(sum[i]);
            } else {
                for(n of numbers) {
                    if(sum.substring(i).startsWith(n)) {
                        firstNumber = numbers.indexOf(n);
                    }
                }
            }
        }
        if(!Number(lastNumber)) {
            if(Number(sum[length - i])) {
                lastNumber = Number(sum[length - i]);
            } else {
                for(n of numbers) {
                    if(sum.substring(length - i).startsWith(n)) {
                        lastNumber = numbers.indexOf(n);
                    }
                }
            }
        }
    } while(i++ < length);

    console.log(firstNumber, lastNumber);
    return (firstNumber * 10) + lastNumber;
}

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    const input = data.split('\n').filter((line) => line);

    console.log(input.reduce((acc, sum) => (acc = acc + getNumber(sum)), 0));
});