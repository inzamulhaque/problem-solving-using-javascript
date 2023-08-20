// function findMissingNumber(arr) {
//   if (arr.length < 2) {
//     // If there are less than 2 elements, we can't find a missing number
//     return null;
//   }

//   const commonDifference = arr[1] - arr[0];

//   const firstNumber = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     const expectedValue = (firstNumber + commonDifference) * i;

//     if (arr[i] !== expectedValue) {
//       return expectedValue;
//     }
//   }

//   return null; // No missing number found
// }

function findMissingNumber(array) {
  if (array.length < 2) {
    // If there are less than 2 elements, we can't find a missing number
    return null;
  }
  // Calculate the common difference between any two consecutive terms of the sequence.
  const commonDifference = array[1] - array[0];

  // Initialize the first number in the sequence.
  let firstNumber = array[0];

  // Iterate through the array and check for the missing number based on the common difference.
  for (let i = 0; i < array.length; i++) {
    // Calculate the next number in the sequence.
    const nextNumber = firstNumber + commonDifference * i;

    // If the next number is not in the array, then it is the missing number.
    if (nextNumber !== array[i]) {
      return nextNumber;
    }
  }

  // If the missing number is not found, return -1.
  return null;
}

console.log(findMissingNumber([2, 4, 8, 10, 12])); // Output: 6 (missing number)
console.log(findMissingNumber([5, 10, 20, 30, 40])); // Output: 15 (missing number)
console.log(findMissingNumber([5, 10, 15, 20, 30, 40, 60])); // Output: 50 (missing number)
