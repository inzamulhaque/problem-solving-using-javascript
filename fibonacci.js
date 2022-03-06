const fibo = [0, 1];

function fibonacci(lastNumber) {
    for (let i = 2; i < lastNumber; i++) {
        fibo[i] = fibo[i - 2] + fibo[i - 1];
    }
}
fibonacci(20);
console.log(...fibo);