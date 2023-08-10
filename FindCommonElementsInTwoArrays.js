const findCommonElements = (arr1, arr2) => {
  const common = [];
  for (const item of arr2) {
    if (arr1.includes(item)) {
      common.push(item);
    }
  }
  return common;
};

console.log(findCommonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
console.log(
  findCommonElements(["apple", "banana", "orange"], ["banana", "kiwi", "apple"])
);
console.log(findCommonElements([1, 2, 3], [4, 5, 6]));
