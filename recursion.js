const factorial = (number) => {
  if (number < 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

const result = factorial(7);
console.log(result);
