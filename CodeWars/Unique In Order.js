var uniqueInOrder = function (iterable) {
  if (!iterable.length) return [];
  let result = [iterable[0]];
  for (let str of iterable) {
    if (result[result.length - 1] !== str) {
      result.push(str);
    }
  }
  return result;
};
