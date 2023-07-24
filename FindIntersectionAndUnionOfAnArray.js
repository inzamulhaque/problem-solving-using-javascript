const arr1 = [1, 3, 2, 5, 7, 8, 9];
const arr2 = [4, 1, 5, 7, 3, 9, 6];

// Find Intersection
const intersectionArr = arr1.filter((val) => arr2.indexOf(val) !== -1);
console.log(intersectionArr);
