const arr1 = [1, 3, 5, 7, 9, 11, 13];
const arr2 = [2, 4, 6];
const arr3 = [];

let i1 = 0;
let i2 = 0;
let i3 = 0;

while (i1 < arr1.length && i2 < arr2.length) {
  if (arr1[i1] < arr2[i2]) {
    arr3[i3] = arr1[i1];
    i1++;
  } else {
    arr3[i3] = arr2[i2];
    i2++;
  }

  i3++;
}

while (i1 < arr1.length) {
  arr3[i3] = arr1[i1];
  i1++;
  i3++;
}

console.log(arr3);
