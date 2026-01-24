function delay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

/**
 * 后端模拟登录接口
 * @param {String} loginId 用户ID
 * @param {String} loginPwd 登录密码
 * @returns 登录信息
 */
export async function login(loginId, loginPwd) {
  await delay(1000);
  if (loginId !== "admin" || loginPwd !== "123123") {
    return null;
  }
  const user = {
    loginId,
    name: "管理员",
  };
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

/**
 * 后端模拟注销接口
 */
export async function logout() {
  await delay(1000);
  localStorage.removeItem("user");
}

/**
 * 后端模拟免登录验证接口
 * @returns 用户登录信息
 */
export async function whoAmI() {
  await delay(1000);
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
}
