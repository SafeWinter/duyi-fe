# L03：包管理器之 NPM 简易文档

> `npm` 官网：`https://www.npmjs.com/`
>
> `npm` 命令大全：`https://docs.npmjs.com/cli/v11/commands`

---

## 1 概念

1. 什么是 **包（package）**？

   **包（package）** 是一个或多个 `JS` 模块的集合，它们共同完成某一类功能。

   可以简单认为每一个工程就是一个包。

   有些包是为了给别人用的，这种包也叫 **第三方库**。

2. 什么是 **包管理器**？

   **包管理器（package manager）**是一个管理包的工具，前端常见的包管理器有 `npm`、`yarn`、`cnpm`、`pnpm` 等。

   包管理器具备以下能力：

   - 让开发者可以轻松地下载包
   - 让开发者可以轻松地升级和卸载包
   - 能够自动管理包的依赖

3. 什么是 **cli**？

   `cli` 是一个命令行界面（`command line interface`），它提供一个终端命令，通过该命令可以完成一些功能。



## 2 node 查找包的顺序

```js
require("a")
```

1. 查找是否有内置模块 `a`
2. 查找当前目录的 `node_modules` 中是否有 `a`
3. 依次查找上级目录的 `node_modules` 中是否有 `a`，直到根目录



## 3 配置源

### 3.1 查看源

```shell
npm config get registry
```



### 3.2 配置淘宝镜像源

```shell
npm config set registry https://registry.npm.taobao.org
```



### 3.3 配置官方源

```shell
npm config set registry https://registry.npmjs.org/
```



## 4 初始化

```shell
npm init # 初始化工程，帮助生成 package.json 文件
npm init -y # 初始化工程，全部使用默认配置生成 package.json 文件
```



## 5 package.json

```json
{
  "dependencies": { // 本地普通依赖
    "qrcode": "^1.4.4" // 依赖包 qrcode，版本 1.4.4，主版本号不变，次版本号和补丁版本可增
  },
  "devDenpendencies": { // 开发依赖
    "webpack": "^5.0.0" 
  }
}
```



## 6 安装

### 6.1 本地安装

会将包下载到当前命令行所在目录的 `node_modules` 中

绝大部分安装都使用本地安装

```shell
# 下面的 install 可以替换为 i
npm install 包名
npm install --save 包名
npm install 包名@版本号
```

若仅作为开发依赖，则添加参数`-D`

```shell
# 下面的 install 可以替换为 i
npm install -D 包名
npm install -D 包名@版本号
```

若要还原安装

```shell
# 下面的 install 可以替换为 i
npm install
npm install --production # 仅还原 dependencies 中的依赖
```



### 6.2 全局安装

会将包下载到一个全局的位置

**只有需要使用某个全局命令时**，才需要进行全局安装：

```shell
# 下面的 install 可以替换为 i
npm install -g 包名
npm install -g 包名@版本号
```



## 7 卸载

### 7.1 本地卸载

卸载本地的安装包

```shell
# 下面的 uninstall 均可替换为 un
npm uninstall 包名
```



### 7.2 全局卸载

卸载全局的安装包

```shell
# 下面的 uninstall 均可替换为 un
npm uninstall -g 包名
```



## 8 查看包信息

### 8.1 查看包所有的版本

```shell
# view 可以替换为 v
npm view 包名 versions
```

