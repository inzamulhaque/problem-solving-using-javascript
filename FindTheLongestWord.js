const findLongestWord = (str) => {
  const wordArr = str.split(" ");
  let wordLength = Number.NEGATIVE_INFINITY;
  for (const word of wordArr) {
    if (wordLength < word.length) {
      wordLength = word.length;
    }
  }

  return wordLength;
};

console.log(findLongestWord("The quick brown fox jumps"));
console.log(findLongestWord("Hello world"));
console.log(findLongestWord("JavaScript is awesome"));
