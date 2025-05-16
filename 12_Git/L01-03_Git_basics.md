# L01：Git 基本概念

本节内容参考 `Git_manual.md` 相关内容。

课件图片可通过 `VSCode` 的 `drawio` 插件打开（或重命名为 `XXX.drawio.png`）。

# L02：Git 分支

合并分支时，先切到分支完成后的目标分支，再将待合并分支通过 `git merge` 命令并入。

# L03：Git 远程分支

查看远程仓库地址：`git remote -v`：

```shell
origin  https://github.com/SafeWinter/duyi-fe.git (fetch)
origin  https://github.com/SafeWinter/duyi-fe.git (push)
```

查看远程分支详细信息：`git remote show origin`：

```shell
* remote origin
  Fetch URL: https://github.com/SafeWinter/duyi-fe.git
  Push  URL: https://github.com/SafeWinter/duyi-fe.git
  HEAD branch: main
  Remote branch:
    main tracked
  Local branch configured for 'git pull':
    main merges with remote main
  Local ref configured for 'git push':
    main pushes to main (up to date)
```

> [!tip]
>
> 这三节内容核心在于会查询 `Git` 命令，未对 `Git` 的原理作深入剖析。想深入底层原理，可参考我的 `Git` 技术专栏《[Git Version Control Cookbook 2](https://blog.csdn.net/frgod/category_12716684.html)》。

