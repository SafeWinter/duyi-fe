# 练习1：全局安装练习

1. 全局安装 `moeda`
2. 运行命令 `moeda 1 cny`，查看当前人民币汇率

# 练习2：开发流程练习

1. 创建一个工程，名为 `qr-shower`

2. 使用 `Git` 初始化

3. 使用 `npm` 初始化

4. 添加 `.gitignore` 文件，内容如下：

   ```
   node_modules
   .DS_Store
   ```

5. `Git` 提交：`init proj`

6. 关联并推送到 `Gitee`

7. 新建 `index.js`

8. 设置 `package.json` 的 `start` 脚本，用于运行 `index.js` 命令

9. 安装 `qrcode`

10. 编写如下代码：

    ```js
    const QRCode = require('qrcode');
    
    QRCode.toString('I am a pony!', { type: 'terminal' }, function (err, data) {
      console.log(data);
    });
    ```

11. 运行脚本 `npm start`，查看效果

12. 开发完成，提交，然后推送到 `Gitee`

13. 删除本地工程

14. 从 `Gitee` 拉取工程

15. 还原依赖（`npm i`）

16. 重新运行。

