const a = 'グローバルスコープにおいてのa';

const func1 = () => {
  const a = 'func1関数においてのa';
  console.log(a);

  const func2 = () => {
    const a = 'func2関数においてのa';
    console.log(a);
  };
  func2();
};

console.log(a);
func1();