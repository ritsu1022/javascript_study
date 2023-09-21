const area1 = getTriangleArea(4, 5);
console.log(area1);

const getTriangleArea = function (base, height) {
  const area = (base * height) / 2;
  return area;
};
