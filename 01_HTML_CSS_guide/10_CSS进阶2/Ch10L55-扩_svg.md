# Ch10L55 扩_svg



## 1 SVG 概述

SVG：全程 **S**calable **V**ector **G**raphics，可缩放的矢量图。

SVG 特点：

1. 该图片使用代码书写而成
2. 缩放不会失真
3. 内容轻量



## 2 怎么使用

svg 可以嵌入浏览器，也可以单独成为一个文件

xml 语言，svg 使用该语言定义

引入方式：（不仅限于）

- 通过 `img`；
- 通过设置背景（`background`）；
- 通过 `embed` 元素；
- 通过 `iframe` 元素；



## 3 书写 SVG 代码

### 矩形：rect

### 圆形：circle

### 椭圆：ellipse

### 线条：line

### 折线：polyline

### 多边形：polygon

### 路径：path

前述所有图形都可以用 `path` 绘制，具体指令包括：

M = moveto
L = lineto
H = horizontal lineto
V = vertical lineto
C = curveto
S = smooth curveto
Q = quadratic Belzier curve
T = smooth quadratic Belzier curveto
A = elliptical Arc

指令 A 语法：`A{radius1} {radius2} {clockwise-deg} {0|1: small-arc | big-arc} {1|0: clockwise | counter-clockwise}`
半径1    
半径2     
顺时针旋转角度    
小弧（0）或大弧（1）   
顺时针（1）逆时针（0）

Z = closepath


### 例子

画太极图
