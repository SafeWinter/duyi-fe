# L07：JS 第三方库之 ECharts.js

---

> 课程内容详见 `Third_libraries_manual.md` 的 `ECharts.js` 小节。

> 官网：https://echarts.apache.org/zh
>
> `CDN`：https://cdn.bootcdn.net/ajax/libs/echarts/5.1.1/echarts.min.js

具体使用方法见课程讲解。

由于 `ECharts` 内容过多，本节仅介绍六个基本图表类型的绘制：

- 折线图
- 柱状图
- 饼图
- K 线图（蜡烛图）
- 地图映射
- 数据源异步加载下的绘制方法（基于 `Axios`，以饼图为例）



基本结构：

```js
const myChart = echarts.init(domElem);
myChart.setOption(options);
myChart.showLoading(); // 显示加载效果
const { data } = await axios.get('/api/pie-datas');
myChart.hideLoading(); // 隐藏加载效果
myChart.setOption(newOptions);
```

至于前后两次渲染中的配置对象 `options` 和 `newOptions` 的具体写法，需参考 `ECharts` 官方文档（当前最新版本 `v5.6.0`，于 `2024/12/28` 发布）。