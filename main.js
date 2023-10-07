let a = "global value"; // グローバル変数宣言

function f1() {
  let a = "local value"; // ブロック内のローカル変数宣言
  return a;
}

function f2() {
  a = "value changed"; // letやvar、const省略のグローバル変数
}

console.log(a);
console.log(f1());
console.log(a);
f2();
console.log(a);