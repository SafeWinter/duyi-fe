# L43：补充：项目无法搭建相关问题的解决方案



在使用 `vue-cli` 搭建项目的时候，经常会遇到的一个问题：

![](../assets/43.1.png)

问题原因：

往往是因为一开始全局安装了 `Node.js`，之后又安装了 `nvm`；再通过 `nvm` 安装了其他版本的 `Node.js` ，于是产生了冲突。

解决思路：

首先卸载全局安装的 `Node.js`，然后将 `nvm` 也完全卸载，之后重新安装 `nvm`，重新通过 `nvm` 来下载新的 `Node.js`



## 步骤一：卸载全局 Node.js

组合键 <kbd>Windows</kbd> + <kbd>R</kbd> 打开【运行】窗口：

![](../assets/43.2.png)

输入 `control` + <kbd>Enter</kbd>，打开系统控制面板：

![](../assets/43.3.png)

点击【`Uninstall a program`】，打开该电脑所安装的应用程序列表；之后在该列表中，找到之前全局安装的 `Node.js`，然后鼠标右键进行卸载。



## 步骤二：卸载 nvm

步骤和上面一样，在程序列表中找到所安装的 `nvm`，将其进行卸载。

之前在安装 `nvm` 时，如果没有修改过安装路径，那么默认的安装路径为：

```markdown
C:\Users\{USER_NAME}\AppData\Roaming\nvm
```





## 步骤三：安装 nvm-desktop

根据本节课所提供的安装包（详见百度网盘 `/SoftDev/渡一前端/41期/nvmdesktop安装包(windows).zip`），安装 `nvm-desktop` 可视化工具。

安装 `nvm` 版本：`v16.14.0`。

> [!tip]
>
> 该工具包来自 `GitHub` 开源仓库：[https://github.com/1111mp/nvm-desktop](https://github.com/1111mp/nvm-desktop)，网盘中的版本为 `v2.6.2`，目前最新版已更新至 `v4.2.0`（2025-12-20 发布）。





## 步骤四：配置 npm 镜像

第一次安装 `node` 以及 `npm` 时，默认镜像为 https://registry.npmjs.org/。

需要修改该镜像，以便之后在安装依赖时，不会出现网络卡顿或者速度过慢的问题。

注意：`npm.taobao.org` 这个常用镜像已过期，最新的镜像应改为：`registry.npmmirror.com`

具体设置命令如下：

```bash
# 查看当前的镜像
npm config get registry
# https://registry.npmjs.org/

# 设置新的镜像
npm config set registry https://registry.npmmirror.com
```

如下图所示：

![](../assets/43.4.png)



## 步骤五：安装 vue-cli 脚手架

`vue-cli` 的版本统一安装 `@4.5.0`：

```bash
npm install -g @vue/cli@4.5.0
```

之后都用以下命令创建 `Vue` 项目：

```bash
vue create <project-name>
```

然后继续后面的学习即可。

