let Human = function(name, age) {
  this.name = name;
  this.age = age;

  this.talkHello = function() {
    return ("My name is " + name + "." + this.age + " years old.");
  }
}

let mike = new Human('Mike', 16);

console.log(mike.name);
console.log(mike.talkHello());