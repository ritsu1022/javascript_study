const animals =  {
  cat: 'にゃー',
  dog: 'わんわん',
  bird: 'ちゅんちゅん',
  lion: 'がおー',
  elephant: 'ぱおーん'
}

Object.keys(animals).forEach(k => {
  console.log(`${k}は「${animals[k]}」と鳴きます`)
});