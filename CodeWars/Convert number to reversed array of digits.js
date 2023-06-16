function digitize(n) {
  return [...String(n)].reverse().map((el) => el * 1);
}
