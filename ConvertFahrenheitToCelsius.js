const fahrenheitToCelsius = (f) => {
  const c = ((f - 32) * 5) / 9;
  return c;
};

console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(77));
console.log(fahrenheitToCelsius(14));
