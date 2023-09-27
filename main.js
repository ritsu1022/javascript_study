const myProfile = {
  lastName: '右寺',
  firstName: '隆信',
  birthyear: '1982',
  hometown: '佐賀',
  sayHello() {
    console.log('Hello');
  },
  greet() {
    console.log(
      `私の名前は${this.lastName}${this.firstName}です。${this.birthyear}年生まれで、${this.hometown}出身です。`
    );
  },
};

myProfile.greet();