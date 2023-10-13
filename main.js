function Person(name) {
  this.name = name;
}

// コンストラクタを呼び出し、オブジェクトnewPersonを作成
let newPerson = new Person("Mike");

// コンストラクタのprototypeプロパティにプロパティsexを追加
Person.prototype.sex = "male";

// オブジェクトnewPersonにsexプロパティが追加されている
console.log(newPerson.sex);