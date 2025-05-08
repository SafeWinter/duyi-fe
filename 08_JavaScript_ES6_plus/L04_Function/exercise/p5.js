// 根据下面的调用示例，完成函数 getDatas
const getDatas = ({page = 1, limit = 10, keyword = '空'} = {}) => {
  console.log(`获取第${page}页的数据，每页显示${limit}条，查询关键字为${keyword}`);
};

getDatas(); // 输出：获取第1页的数据，每页显示10条，查询关键字为空

getDatas({
  page: 2,
});
// 输出：获取第2页的数据，每页显示10条，查询关键字为空

getDatas({
  page: 2,
  limit: 30,
});
// 输出：获取第2页的数据，每页显示30条，查询关键字为空

getDatas({
  keyword: 'js',
});
// 输出：获取第1页的数据，每页显示10条，查询关键字为js

