const countVowels = (str) => {
  const count = str.match(/[aeiou]/gi).length;
  return count;
};

console.log(countVowels("hello"));
console.log(countVowels("JavaScript"));
console.log(countVowels("aEIOU"));
