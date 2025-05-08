const obj = {
  a: 1,
  b: 2,
  c: 3,
};
// 遍历对象的所有属性名
Object.keys(obj).forEach(key => console.log(key)); // a b c

// 遍历对象的所有属性值
Object.values(obj).forEach(value => console.log(value)); // 1 2 3

// 遍历对象的所有属性名和属性值
Object.entries(obj).forEach(([key, value]) => console.log(key, value)); // a 1 b 2 c 3

// 复制obj的所有属性到一个新的对象
const newObj = { ...obj }; // 浅拷贝

// 复制obj除a以外的所有属性到一个新的对象
const { a, ...rest } = obj; // 浅拷贝
console.log(rest);
