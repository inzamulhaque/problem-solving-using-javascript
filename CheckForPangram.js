const isPangram = (string) => {
  for (let i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i);
    if (!string.toLowerCase().includes(letter)) {
      return false;
    }
  }

  return true;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("Hello, world!"));
