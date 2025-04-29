const container = document.querySelector('.container');

const pager1 = new MyPager({
    page: 1,
    pageSize: 10,
    total: 15,
});

pager1.createPager(container);

const pager2 = new MyPager({
    page: 1,
    pageSize: 5,
    total: 8,
});
pager2.createPager(container);

const pager3 = new MyPager({
    page: 1,
    pageSize: 10,
    total: 8,
});
pager3.createPager(container);