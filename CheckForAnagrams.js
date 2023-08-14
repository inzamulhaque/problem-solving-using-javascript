const areAnagrams = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }

  for (const letter of word1) {
    if (!word2.includes(letter)) {
      return false;
    }
  }

  return true;
};

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("debit card", "bad credit"));
