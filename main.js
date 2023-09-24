const cry = animal => {
  switch (animal) {
    case 'cat':
      console.log('にゃー');
      break;
    case 'dog':
      console.log('わんわん');
      break;
    case 'bird':
      console.log('ちゅんちゅん');
      break;
    case 'lion':
      console.log('がおー');
      break;
    case 'elephant':
      console.log('ぱおーん');
      break;
    default:
      console.log('......');
  }
};

cry('dog');