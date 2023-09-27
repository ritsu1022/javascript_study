class Person {
  constructor(name, born) {
    this.name = name;
    this.born = born;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const john = new Person('John Lennon', '1940');
const paul = new Person('Paul McCartney', '1942');
const ringo = new Person('Ringo Starr', '1940');

console.log(john);
console.log(john.name);
john.greet();