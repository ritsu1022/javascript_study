let a = "global value"; // グローバル変数宣言

function f1() {
  let a = "local value in function"; // ブロック内のローカル変数宣言
  console.log(a);

  for (var i = 0; i < 2; i++) {
    let a = "value in for loop"; // ブロック内のローカル変数宣言
    console.log(a);
  }
}

f1();
