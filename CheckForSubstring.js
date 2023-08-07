const isSubstring = (word, subStr) => {
  return word.toLowerCase().includes(subStr.toLowerCase());
};

console.log(isSubstring("hello world", "lo"));
console.log(isSubstring("JavaScript is awesome", "script"));
console.log(isSubstring("racecar", "car"));
console.log(isSubstring("apple", "banana"));
