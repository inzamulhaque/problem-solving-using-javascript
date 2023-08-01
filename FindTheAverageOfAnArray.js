const findAverage = (arr) => {
  const sum = arr.reduce((preVal, curVal) => preVal + curVal, 0);
  const avg = sum / arr.length;
  return avg;
};

console.log(findAverage([1, 2, 3, 4, 5]));
console.log(findAverage([10, 20, 30, 40, 50]));
