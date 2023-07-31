const sumDigits = (num) => {
  const str = num + "";
  const numArr = str.split("").map((num) => Number(num));

  const sum = numArr.reduce((preVal, curVal) => preVal + curVal, 0);

  return sum;
};

console.log(sumDigits(123));
console.log(sumDigits(456));
console.log(sumDigits(7890));
console.log(sumDigits(78901));
console.log(sumDigits(98901));
