const a = "global";

console.log(a);

f1();

console.log(a);
console.log(z);

function f1() {
  let a = "local-f1";
  let z = "local-f1";

  console.log(a);
  console.log(z);

  f2();

  function f2() {
    let a = "local-f2";

    console.log(a);
    console.log(z);
  }
}