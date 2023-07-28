const titleCase = (str) => {
  const arr = str.split(" ");
  const titleArr = arr.map((word) => {
    let normalWord = word.split("");
    normalWord[0] = word[0].toUpperCase();
    return normalWord.join("");
  });
  return titleArr.join(" ");
};

console.log(titleCase("hello world"));
console.log(titleCase("javascript is awesome"));
console.log(titleCase("hello, how are you?"));
