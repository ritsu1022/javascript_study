const target1 = document.getElementById('main');
const target2 = target1.firstElementChild;

target1.addEventListener('click', () => {
  console.log('target1をクリックしました')
});

target2.addEventListener('click', () => {
  console.log('target2をクリックしました')
});