const numbers = [12, 23, 12, 23, 34, 45, 54, 343, 32, 121, 232, 343, 232, 233, 15, 233, 233, 343];

const secondLarge = (array) => {
    const arr = [];
    if (!Array.isArray(array)) {
        console.log("it is not array");
        return;
    }
    for (const number of array) {
        if (typeof number === "number") {
            if (arr.indexOf(number) === -1) {
                arr.push(number);
            }
        }
    }
    if (arr.length === 0) {
        console.log("please give me valid array");
        return;
    }
    arr.sort((a, b) => a - b);
    if (arr.length >= 2) {
        arr.pop();
    }
    return Math.max(...arr);
}

const result = secondLarge(numbers);
console.log(result);