const arr1 = [1, 5, 2, 4, 9];
const arr2 = [13, 17, 19, 15, 21];
const arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i];
}

for (let i = 0; i < arr2.length; i++) {
  arr3[i + arr1.length] = arr2[i];
}

console.log(arr3);
