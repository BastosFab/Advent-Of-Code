const fs = require('fs');

const getNumber = sum => {
    let firstNumber, lastNumber;
    let i = 0;
    let length = sum.length;

    do {
        if(!Number(firstNumber)) {
            if(Number(sum[i])) {
                firstNumber = Number(sum[i]);
            }
        }
        if(!Number(lastNumber)) {
            if(Number(sum[length - i])) {
                lastNumber = Number(sum[length - i]);
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