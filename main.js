class Person {
  constructor(name, born) {
    this.name = name;
    this.born = born;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

class Musician extends Person {
  constructor(name, born, part) {
    super(name, born);
    this.part = part;
  }
  introduce() {
    console.log(`My part is ${this.part}.`);
  }
}

const john = new Musician('John Lennon', '1940', 'rhythm guitar');

console.log(john.name);
john.greet();
console.log(john.part);
john.introduce();