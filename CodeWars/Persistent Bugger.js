function persistence(num) {
  return String(num).length > 1
    ? 1 +
        persistence(
          String(num)
            .split('')
            .reduce((a, b) => a * b)
        )
    : 0;
}
