const celsiusToFahrenheit = (c) => {
  const f = (c * 9) / 5 + 32;
  return f;
};

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));
console.log(celsiusToFahrenheit(-10));
