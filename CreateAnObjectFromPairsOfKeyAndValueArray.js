const arr = [
  ["a", "MD"],
  ["b", "IH"],
  ["c", "Alif"],
];

// output = { a: "MD", b: "IH", c: "Alif" };

const obj = Object.fromEntries(arr);
console.log(obj);
