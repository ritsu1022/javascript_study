const storage = localStorage;
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
  storage.setItem('backgroundColor', color);
});

const bg = storage.getItem('backgroundColor');
console.log(bg);
if (bg) {
  box.style.backgroundColor = bg;
}