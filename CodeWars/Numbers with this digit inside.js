function numbersWithDigitInside(x, d) {
  if (d > x) return [0, 0, 0];
  if (d === x) return [1, d, d];

  let count = 0;
  let sum = 0;
  let multy = 1;
  for (let i = 1; i <= x; i++) {
    if (String(i).includes(`${d}`)) {
      count++;
      sum += i;
      multy *= i;
    }
  }
  return count > 0 ? [count, sum, multy] : [0, 0, 0];
}
