const numbers = [4, 5, 7, 8, 10];
const output = [];

const tribleOld = (number)=> number * 3;

for (const number of numbers) {
    // const result = number * 3;
    // const result = tribleOld(number);
    output.push(tribleOld(number));
}

// const result = numbers.map(tribleOld);
const result = numbers.map(x => x*x);
console.log(result);