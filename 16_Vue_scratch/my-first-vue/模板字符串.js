var person = {
  name: "成哥",
  age: 18,
};
var str1 = "my name is " + person.name + "\nmy age is " + person.age;

var str2 = `my name is ${person.name}
my age is ${person.age}`;

console.log(str1);

console.log(str2);

// DIY:
var str3 = 'aaaa\
\
bbbb\
';
console.log(str3); // aaaabbbb