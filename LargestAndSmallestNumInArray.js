const arr = [5, 7, 3, 11, 15, 1, 17, 21, 33, 71, 75, 99];

const getSmallestNum = (arr) => {
  let smallNum = Number.POSITIVE_INFINITY;

  for (const num of arr) {
    if (num < smallNum) {
      smallNum = num;
    }
  }

  return smallNum;
};

console.log(getSmallestNum(arr));

// small number using reduce
const getSmallestNumUsingReduce = (arr) =>
  arr.reduce((currentVal, num) => Math.min(currentVal, num));

console.log(getSmallestNumUsingReduce(arr));

const getLargestNum = (arr) => {
  let largeNum = Number.NEGATIVE_INFINITY;

  for (const num of arr) {
    if (largeNum < num) {
      largeNum = num;
    }
  }

  return largeNum;
};

console.log(getLargestNum(arr));

// large number using reduce
const getLargestNumUsingReduce = (arr) =>
  arr.reduce((currentVal, num) => Math.max(currentVal, num));

console.log(getLargestNumUsingReduce(arr));
