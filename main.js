function closure () {
  let a = 1;

  return function() {
    return a++;
  };
}

let c = closure();

console.log(c());
console.log(c());
console.log(c());