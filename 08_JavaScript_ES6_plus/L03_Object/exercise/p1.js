/**
 * 创建一个用户对象
 * 对象格式：
 * {
 *    firstName: xxx,
 *    lastName: xxx,
 *    fullName: xxx,
 *    sayHello: fn
 * }
 */
function createUser(firstName, lastName) {
    // 调用createUser函数，使用解构得到fullName
    return {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        sayHello() {
            console.log(`Hello, my name is ${this.fullName}`);
        }
    }
}

const user = createUser('John', 'Doe');
user.sayHello(); // Hello, my name is John Doe