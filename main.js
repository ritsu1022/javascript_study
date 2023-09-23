//数学と英語の点数が、どちらかが80点以上であれば合格の場合（OR条件）
const getIsSuccess = (math, english) => {
  if (math >= 80 || english >= 80) {
    return '合格';
  } else {
    return '不合格';
  }
};

console.log(getIsSuccess(60, 90));
console.log(getIsSuccess(90, 90));
console.log(getIsSuccess(60, 70));
