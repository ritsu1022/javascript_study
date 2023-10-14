let adder = "return x + y;";

let adderObj = new Function("x", "y", adder);
console.log(adderObj(2, 3));