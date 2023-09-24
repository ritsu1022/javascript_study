const getIsEven = num => {
  if (num % 2 === 0) {
    return '偶数';
  } else {
    return '奇数';
  }
};

console.log(getIsEven(5));