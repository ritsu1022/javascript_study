let str = "This is Japan.";
let regexp1 = new RegExp("japan", "i");

let regexp2 = new RegExp("japan");
console.log(str.match(regexp1));
console.log(str.match(regexp2));