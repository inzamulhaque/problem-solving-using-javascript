const removeCharacters = (word, letterArr) => {
  const wordArr = word.split("");
  const resultArr = [];
  for (let i = 0; i < wordArr.length; i++) {
    if (!letterArr.includes(wordArr[i])) {
      resultArr.push(wordArr[i]);
    }
  }

  return resultArr.join("");
};

console.log(removeCharacters("Hello, world!", ["l", "o"]));
console.log(removeCharacters("programming is fun", ["g", "m", "n"]));
