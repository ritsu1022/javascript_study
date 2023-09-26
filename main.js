function sumNumbers(...args) {
  let result = 0;
  args.forEach((arg) => {
    result += arg;
  });
  return result;
}

console.log(sumNumbers(1, 2));
console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7));