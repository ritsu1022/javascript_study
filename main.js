const target = document.getElementById('main').firstElementChild;

let text;

text = target.textContent;
console.log(text);

target.textContent = 'テキストが変更されました';

text = target.textContent;
console.log(text);