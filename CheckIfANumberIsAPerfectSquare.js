const isPerfectSquare = (num) => {
  const sqrt = Math.sqrt(num);
  const floor = Math.floor(sqrt);
  if (sqrt === floor) {
    return true;
  } else {
    return false;
  }
};

console.log(isPerfectSquare(4));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(5));
console.log(isPerfectSquare(25));
