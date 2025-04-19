(function () {
    const container = document.querySelector('.table-container');
    const $ = container.querySelector.bind(container);
    const $$ = selector => container.querySelectorAll(`tbody ${selector}`);
    
    const doms = {
        checkAll: $('.checkAll'),
        tbody: $('tbody'),
        chboxes: $$('input[type="checkbox"]'),
        ths: container.querySelectorAll('th'),
    };

    function toggleCheckAll({target}) {
        const checked = target.checked;
        Array.from(doms.chboxes).forEach(chbox => 
            chbox.checked = checked);
    }

    function chbxClickHandler(chboxes) {
        return ({target}) => {
            const checked = target.checked;
            const allChecked = Array.from(chboxes)
                .every(chbox => chbox.checked);
            doms.checkAll.checked = (checked && allChecked);
        }
    }

    const extractStr = (tr, index) => tr.querySelector(`td:nth-child(${index})`).innerText.trim();
    const extractNum = (tr, index) => parseInt(extractStr(tr, index), 10);
    
    let orderByAsc = true;
    function headerSortHandlerWith(index) {
        return ev => {
            if(index === 0) return; // skip the first header (checkbox)
            const trs = Array.from($$('tr'))
                .sort((t1, t2) => {
                    let res = (index % 2 === 0) // column with string data
                        ? extractStr(t1, index + 1).localeCompare(extractStr(t2, index + 1), 'zh')
                        : extractNum(t1, index + 1) - extractNum(t2, index + 1);
                    return orderByAsc ? res : -res;
                });
            orderByAsc = !orderByAsc;
            trs.forEach(tr => doms.tbody.appendChild(tr));
        };
    }

    function init() {
        // 1. 注册标题行复选框点击事件
        doms.checkAll.addEventListener('click', toggleCheckAll);
        // 2. 注册正文行复选框点击事件
        doms.chboxes.forEach((chbox, _ ,arr) => chbox.addEventListener('click', chbxClickHandler(arr)));
        // 3. 批量注册表头字段点击事件
        doms.ths.forEach((th, index) => th.addEventListener('click', headerSortHandlerWith(index)));
    }

    init();
}());