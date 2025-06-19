import Mock from 'mockjs';
import qs from 'querystring';

// 获取博客分类列表模拟数据
Mock.mock('/api/blogtype', 'get', function (options) {
  const params = options.url.split('?')[1];
  const query = qs.parse(params);
  console.log(query);
  return Mock.mock({
    code: 0,
    msg: '获取模拟博客类型成功',
    'data|10-20': [{
      'id|+1': 1,
      name: "分类@id",
      'articleCount|0-300': 10, // 该分类下文章的数量
    }]
  });
});


// 获取博客文章列表模拟数据
Mock.mock(/\/api\/blog(\?.+)?/, 'get', function (options) {
  const query = options.url.split('?')[1];
  const params = qs.parse(query);
  console.log(params); // {page: '1', limit: '15', categoryId: '-1'}
  const limit = parseInt(params.limit) || 10; // 每页数量

  return Mock.mock({
    code: 0,
    msg: '获取模拟博客文章列表成功',
    'data|10-20': {
      'total|2000-3000': 1, // 总数
      [`rows|${limit}`]: [ // 当前页列表数据
        {
          id: '@guid',
          title: "@ctitle(15, 20)",
          description: "@cparagraph(1, 3)",
          category: { // 所属分类
            'id|+1': 3,
            name: "分类@id"
          },
          'scanNumber|0-3000': 0,
          'commentNumber|0-300': 0,
          thumb: Mock.Random.image('300x250', '#000', '#FFF', 'Demo Image'),
          createDate: new Date(Mock.Random.datetime()).getTime()
        }
      ]
    },
  });
});