const animals =  {
  cat: 'にゃー',
  dog: 'わんわん',
  bird: 'ちゅんちゅん',
  lion: 'がおー',
  elephant: 'ぱおーん'
}

for (const k in animals) {
  console.log(`${k}は「${animals[k]}」と鳴きます`)
}