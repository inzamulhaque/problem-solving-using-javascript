const secondLargeNumber = (arr) => {
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[1];
};

console.log(secondLargeNumber([1, 5, 12, 13, 19, 21, 23, 99, 111]));
console.log(secondLargeNumber([1, 5, 12, 13, 19, 21, 23, 99, 111, 113, 999]));
console.log(secondLargeNumber([1, 5, 12, 13, 19, 21, 1999, 99, 111, 113, 999]));
