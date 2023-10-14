let Human = function(name, age) {
  this.name = name;
  this.age = age;
};

let mike = new Human("Mike", 16);

// 関数オブジェクトにsleepメソッドを追加
mike.sleep = () => {
  return ("Good night!");
};

console.log(mike.sleep());