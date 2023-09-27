const getRandomNumber = (start, end) => Math.floor(start + Math.random() * (end + 1 - start));

console.log(getRandomNumber(50, 100));