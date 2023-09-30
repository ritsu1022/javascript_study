const target = document.getElementById('main').firstElementChild;

target.addEventListener('click', () => {
  setTimeout(() => {
    console.log('HTMLの内容を変更します');
    target.textContent = 'クリックされました';
  }, 3000);
  console.log('クリックされました。3秒後にHTMLの内容が変更されます。')
});