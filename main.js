const animals =  {
  cat: 'にゃー',
  dog: 'わんわん',
  bird: 'ちゅんちゅん',
  lion: 'がおー',
  elephant: 'ぱおーん'
};

Object.values(animals).forEach(value => {
  console.log(value);
});