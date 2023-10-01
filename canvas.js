const canvas = document.getElementById('sample');

const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.rect(10, 20, 50, 100);
ctx.fillStyle = '#000';
ctx.stroke();
ctx.fill();

console.log(ctx);