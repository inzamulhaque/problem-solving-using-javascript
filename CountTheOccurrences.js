const countOccurrences = (arr, elem) => {
  let count = 0;
  for (const item of arr) {
    if (item === elem) {
      count++;
    }
  }

  return count;
};

console.log(countOccurrences([1, 2, 3, 2, 4, 2, 5], 2));
console.log(
  countOccurrences(["apple", "banana", "orange", "banana", "kiwi"], "banana")
);
console.log(countOccurrences([1, 2, 3, 4, 5], 6));
