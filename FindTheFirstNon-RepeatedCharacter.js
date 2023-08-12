const firstNonRepeatedCharacter = (word) => {
  const wordArr = word.split("");
  const duplicate = wordArr.filter(
    (letter, index) => wordArr.indexOf(letter) !== index
  );
  const unique = wordArr.filter((letter) => duplicate.indexOf(letter) === -1);
  return unique[0] || null;
};

console.log(firstNonRepeatedCharacter("hello"));
console.log(firstNonRepeatedCharacter("programming"));
console.log(firstNonRepeatedCharacter("banana"));
console.log(firstNonRepeatedCharacter("aabbc"));
console.log(firstNonRepeatedCharacter("aabbcc"));
