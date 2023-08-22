const futureValue = (pv, i, n) => {
  return Math.floor(pv * Math.pow(1 + i / 100, n));
};

console.log(futureValue(1000, 10, 5));
