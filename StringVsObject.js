let fullName = "MD IH Alif";
let myName = fullName;
fullName = "MD Inzamul Haque";

console.log(myName);
console.log(fullName);

const obj1 = {
  id: 1,
  name: "MD IH Alif",
};

const obj2 = obj1;
obj2.name = "MD Inzamul Haque";

const obj3 = { ...obj1 };
obj3.name = "MD IH Alif";

console.log(obj1);
console.log(obj2);
console.log(obj3);
