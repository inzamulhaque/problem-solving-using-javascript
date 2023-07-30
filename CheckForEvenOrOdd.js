const checkNumber = (num) => {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(checkNumber(4));
console.log(checkNumber(7));
console.log(checkNumber(-2));
