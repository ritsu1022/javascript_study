const a = '20代である';
const b = '女性である';
if (!(a === '20代である' || b === '女性である')) {
  console.log('20代でもないし女性でもない');
} else {
  console.log('20代であるか女性である');
}

if (a !== '20代である' && b !== '女性である') {
  console.log('20代でもないし女性でもない');
} else {
  console.log('20代であるか女性である');
}