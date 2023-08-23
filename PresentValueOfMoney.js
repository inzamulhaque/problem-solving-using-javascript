const presentValue = (fv, i, n) => {
  return Math.floor(fv / Math.pow(1 + i / 100, n));
};

console.log(presentValue(1000, 10, 5));
