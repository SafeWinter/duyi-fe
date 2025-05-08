// 得到一个随机数组成的数组，数组长度为10，随机数的范围在0-1之间
// 结果类似于：[0.262, 0.167, 0.841, ...]
const randArr = Array(10).fill(0)
    .map(Math.random)
    .map(n => Math.floor(n * 1000) / 1000);
console.log(randArr);

// 得到一个随机数组成的数组，数组长度为10，随机数的范围在10-100之间
// 结果类似于：[35, 66, 45, ...]
const randArr2 = Array(10).fill(0)
    .map(Math.random)
    .map(n => Math.floor(n * 91) + 10);
console.log(randArr2);

// 判断某个字符串s是否为 .jpg、.png、.bmp、.gif 中的一个
const excludes = ['.jpg', '.png', '.bmp', '.gif'];
const s = 'abc.jpg';
const isValid = excludes.some(ext => s.endsWith(ext));
console.log(isValid); // true
