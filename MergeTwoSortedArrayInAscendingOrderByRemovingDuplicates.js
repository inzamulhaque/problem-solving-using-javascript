let arr1 = [1, 3, 3, 5, 7, 7, 9],
  arr2 = [2, 4, 4, 6, 8, 8, 10];

let arr3 = [...arr1, ...arr2];
arr3.sort((a, b) => a - b);
arr3 = [...new Set(arr3)];
console.log(arr3);
