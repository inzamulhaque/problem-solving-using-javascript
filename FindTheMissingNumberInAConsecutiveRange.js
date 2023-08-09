const findMissingNumber = (arr) => {
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);
  let missingVal;
  for (let i = minValue; i < maxValue; i++) {
    if (!arr.includes(i)) {
      missingVal = i;
    }
  }
  return missingVal;
};

console.log(findMissingNumber([1, 2, 4, 5]));
console.log(findMissingNumber([10, 8, 7, 6, 9, 5, 4, 2, 1]));
console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([1, 2, 3, 4, 6]));
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9]));
