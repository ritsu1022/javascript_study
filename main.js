const checkBMI= (height, weight) => {
  const bmi = weight / (height * height);
  if (bmi > 25) {
    if (bmi >= 40) {
      return '太りすぎです、肥満度は4度です';
    } else if (bmi > 35) {
      return '太りすぎです、肥満度は3度です';
    } else if (bmi > 30) {
      return '太りすぎです、肥満度は2度です';
    } else {
      return '太りすぎです、肥満度は1度です';
    }
  } else if (bmi < 18.5) {
    return '痩せすぎです';
  } else {
    return '標準体型です';
  }
};

console.log(checkBMI(1.5, 40));
console.log(checkBMI(1.5, 108));