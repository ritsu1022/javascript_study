let member = {
  foo:{
    number : 1,
    name   :"foo",
  },
  bar:{
    count  : 2,
    name   :"bar",
  },
  hoge:{
    count  : 3,
    name   :"hoge",
  }
};

let json_str = JSON.stringify(member);

console.log(json_str);