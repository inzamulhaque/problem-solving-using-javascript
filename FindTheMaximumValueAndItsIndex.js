const findMaxValueAndIndex = (arr) => {
  const maxValue = Math.max(...arr);
  const maxValueIndex = arr.indexOf(maxValue);
  return { maxValue, maxValueIndex };
};

console.log(findMaxValueAndIndex([4, 2, 7, 1, 9]));
console.log(findMaxValueAndIndex([-5, 10, 3, -2, 8]));
