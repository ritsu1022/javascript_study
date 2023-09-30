const target = document.getElementById('main').firstElementChild;

target.addEventListener('click', () => {
  target.textContent = 'クリックされました';
});