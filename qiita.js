const btn = document.getElementById('btn');
const list = document.getElementById('list');

btn.addEventListener('click', async () => {
  const response = await fetch(
    'https://qiita.com/api/v2/items?query=tag:JavaScript'
  );
  const data = await response.json();
  data.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
    list.appendChild(li);
  });
});