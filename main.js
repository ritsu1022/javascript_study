const getCry = animal => {
  switch (animal) {
    case 'cat':
      return 'にゃー';
    case 'dog':
      return 'わんわん';
    case 'bird':
      return 'ちゅんちゅん';
    case 'lion':
      return 'がおー';
    case 'elephant':
      return 'ぱおーん';
    default:
      return '......';
  }
};

console.log(getCry('elephant'));