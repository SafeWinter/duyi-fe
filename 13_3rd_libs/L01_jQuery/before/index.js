$(function() {
    // 1. select/deselect all
    $(':checkbox.checkAll').change(function({target}) {
        $(':checkbox').not($(target)).prop('checked', target.checked);
        updateTotalPrices();
    });

    // 2. remove selected item(s)
    $('.delChecked').click(function(e){
        e.preventDefault();
        const $selection = $(':checkbox.checkItem:checked');
        if($selection.length === 0) {
            alert('请先选择要删除的商品！');
            return false;
        }
        
        if (!confirm('确定要删除所选商品吗？')) return false;
        $selection.each((_, el) => $(el).closest('.item').remove());
        $(':checkbox.checkAll').prop('checked', false);
        updateTotalPrices();
    });

    // 3. empty cart
    $('.clearAll').click(function(e) {
        e.preventDefault();
        if (!confirm('确定要清空购物车吗？')) return false;
        $(':checkbox.checkAll').prop('checked', false);
        const hasChecked = $(':checkbox.checkItem:checked').length > 0;
        $('.item').remove();
        if(hasChecked) updateTotalPrices();
    });

    // 4. disable checkout button
    $('.done>a').click(e => e.preventDefault());

    // 5. remove single item from cart 
    $('.del>a').click(function(e){
        e.preventDefault();
        if (!confirm('确定要删除该商品吗？')) return false;
        const $item = $(e.target).closest('.item'),
            checked = $item.find('.checkItem').prop('checked');
        $item.remove();
        checked && updateTotalPrices();
        checkSelectAll();
    });

    // 6. change the quantity of an item
    $('.item .incr, .item .decr').click(e => {
        e.preventDefault();
        const sign = $(e.target).hasClass('incr') ? 1 : -1;
        updateSum(e.target, sign);
    });

    // 7. toggle the checkbox of an item
    $(':checkbox.checkItem').change(({target}) => {
        if(!target.checked) {
            $(':checkbox.checkAll').prop('checked', false);
        }
        checkSelectAll();
        updateTotalPrices();
    });
});

function checkSelectAll() {
    const $selectAll = $(':checkbox.checkAll'),
        $allChbx = $(':checkbox.checkItem'),
        $allChbxChecked = $allChbx.filter(':checked'),
        allChecked = $allChbx.length === $allChbxChecked.length && $allChbx.length > 0;
    if(allChecked) {
        $selectAll.prop('checked', true);
    }
}

function updateTotalPrices() {
    const $checked = $(':checkbox.checkItem:checked');
    // 1. update total quantity
    $('.footer .nums>em').text($checked.length);
    // 2. update total price
    const newSums = $checked.closest('.item').find('.sum>em').toArray()
        .reduce((sum, elem) => sum + parseFloat(elem.innerText.replace('￥', '')), 0);
    $('.footer .sums>em').text(`￥${newSums.toFixed(2)}`);
}

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