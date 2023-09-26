const numbers1 = [1, 3, 8];
const numbers2 = [7, 9, 13];

let result1 = 1;

numbers1.forEach(number => {
  result1 = result1 * number > 10 ? 0 : 1;
});
console.log(result1 === 0 ? true : false);

let result2 = 1;

numbers2.forEach(number =>  {
  result2 = result2 * number > 10 ? 0 : 1;
});
console.log(result2 === 0 ? true : false);