const box = document.getElementById('box');

const getRandomColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

box.addEventListener('click', () => {
  const color = getRandomColor();
  console.log(color);
  box.style.backgroundColor = color;
});