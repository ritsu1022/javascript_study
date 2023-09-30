const btn = document.getElementById('btn');
const list = document.getElementById('list');

btn.addEventListener('click', () => {
  fetch('https://qiita.com/api/v2/items?query=tag:JavaScript')
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data);
    data.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
      list.appendChild(li);
    });
  });
});
