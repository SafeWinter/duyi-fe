// 遍历对象 user， 将其每一个属性变为 getter 和 setter， 保持读写功能不变
// 读取属性时，输出：正在读取xxx属性，值为xxx
// 给属性赋值时，输出：正在设置xxx属性，新的值为xxx
const user = {
  name: 'monica',
  age: 17,
  sex: 'female',
};

Object.entries(user).forEach(([key, value]) => {
  Object.defineProperty(user, key, {
    get() {
      console.log(`正在读取 ${key} 属性，值为 ${value}`);
      return value;
    },
    set(newValue) {
      console.log(`正在设置 ${key} 属性，新的值为 ${newValue}`);
      value = newValue;
    },
  });
});

// 测试
user.name; // 正在读取 name 属性，值为 monica
user.name = 'monica2'; // 正在设置 name 属性，新的值为 monica2
user.age += 3;
/*
正在读取 age 属性，值为 17
正在设置 age 属性，新的值为 20
*/