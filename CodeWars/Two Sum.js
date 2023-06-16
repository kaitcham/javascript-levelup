function twoSum(numbers, target) {
  let result = [];
  for (let num of numbers) {
    if (numbers.slice(numbers.indexOf(num) + 1).includes(target - num)) {
      result.push(numbers.indexOf(num));
      result.push(numbers.lastIndexOf(target - num));
      break;
    }
  }
  return result;
}
