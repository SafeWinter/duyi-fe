const arr = [1, 4, 7, 1, 2, 3, 3, 6, 8];
// 数组去重：获取一个不包含重复项的新数组

const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 4, 7, 2, 3, 6, 8]