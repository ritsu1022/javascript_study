const element = document.createElement('p');
element.textContent = 'これは追加された要素です';

const target = document.getElementById('main');
target.appendChild(element);