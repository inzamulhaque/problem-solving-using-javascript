const sumEvenNumbers = (arr) => {
  const evenArr = arr.filter((val) => val % 2 === 0);

  return evenArr.reduce((preVal, CurVal) => preVal + CurVal, 0);
};

console.log(sumEvenNumbers([1, 2, 3, 4, 6, 8, 7, 9, 10, 111, 112]));
console.log(sumEvenNumbers([3, 2, 1, 4, 8]));
