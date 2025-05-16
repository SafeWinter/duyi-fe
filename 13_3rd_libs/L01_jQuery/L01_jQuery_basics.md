# L01：JS 第三方库之 jQuery

---



## 1 关于 prop 和 attr 方法的区别

- `$elem.prop('prop_name')`：获取 `DOM` 对象上的（完整）属性值；
- `$elem.attr('prop_name')`：获取 `HTML` 标签上的属性值（未必完整，所见即所得）。

```js
// <a href="//demo.taobao.com">Demo</a>
$('a').prop('href')  // "https://demo.taobao.com"
$('a').attr('href')  // "//demo.taobao.com"
```



## 2 示例项目：购物车事件注册

通过多选框全选、取消全选、单件商品总价、所有物品总价的实时更新，练习 `jQuery` 对 `DOM` 元素的常见操作。

通过 `CDN` 引入 `jQuery`：`https://www.bootcdn.cn/`

实现过程中尽量遵循 **先声明再使用** 的原则。

按注册事件对业务逻辑分组，可有效提高复用率。

实测时，对变更商品数量的事件注册提取通用部分：

```js
function updateSum(elem, sign) {
    const $item = $(elem).closest('.item'),
        $sum = $item.find('.sum>em'),
        $txt = $item.find('.txt'),
        unitPrice = parseFloat($item.find('.price>em').text().replace('￥', '')),
        sum = parseFloat($sum.text().replace('￥', '')),
        newSum = Math.max(unitPrice, sum + sign * unitPrice);

    // update quantity
    const newQty = parseInt($txt.val()) + sign;
    $txt.val(Math.max(1, newQty));

    // update the total price of this item
    $sum.text(`￥${newSum.toFixed(2)}`);

    $item.find('.checkItem').prop('checked', true);
    updateTotalPrices();
    checkSelectAll();
}
```

修复课堂代码中的 `Bug`：

1. 取消选中某商品，自动取消选中全选框；
2. 变更数量时自动选中该商品，同时更新总价；
3. 删除某商品后，或其余均选中，则全选复选框应选中；
4. 清除购物车后，应取消全选。



> [!tip]
>
> 更多 `jQuery` 高级用法，可参考 `jQuery in Action` 系列丛书（网盘地址：`/SoftDev/PDFs/jQuery/jQuery_in_Action/`）。

