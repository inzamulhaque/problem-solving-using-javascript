const arr = [3, 1, 5, 7, 2, 9, 8, 3];

const [ind0, ind1, ...other] = arr;

console.log(ind0, ind1, other);

let num1 = 11,
  num2 = 77;

[num1, num2] = [num2, num1];
console.log(num1, num2);
