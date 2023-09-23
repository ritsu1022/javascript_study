const getIsAdult = age => {
  if (age > 18) {
    return '成人です';
  } else {
    return '未成年です';
  }
};

console.log(getIsAdult(40));
console.log(getIsAdult(16));