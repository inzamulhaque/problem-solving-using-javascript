const array = [3, 1, 5, 0, 7, 13, 17, 21, 31, 19, 15];

// [0, 1, 3, 5, 7, 13, 15, 17, 19, 21, 31];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] > array[j + 1]) {
      const temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(array);
