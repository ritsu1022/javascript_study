const obj = {
  str: 'abc',
  func1() {
    console.log(this.str); // メソッド呼び出し
    
    const func2 = () => {
      console.log(this.str); // 関数呼び出し
    };
    func2();
  }
}

obj.func1();