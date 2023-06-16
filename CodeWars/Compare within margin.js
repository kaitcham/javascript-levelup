function closeCompare(a, b, margin = 0) {
  if (a > b && margin < Math.abs(a - b)) return 1;
  return margin >= Math.abs(a - b) || a === b ? 0 : -1;
}
