const obj = {
  a: 1,
  b: null,
  c: undefined,
  d: "hello",
};

const objToArr = Object.entries(obj).filter(
  ([key, value]) => value !== null && value !== undefined
);

const newObj = Object.fromEntries(objToArr);

console.log(newObj);
