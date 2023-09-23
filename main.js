const checkBMI = (height, weight) => {
  const bmi = weight / (height * height);
  if (bmi > 25) {
    return '太りすぎです';
  } else if (bmi < 18.5) {
    return '痩せすぎです';
  } else {
    return '標準体型です';
  }
};

console.log(checkBMI(1.76, 62));