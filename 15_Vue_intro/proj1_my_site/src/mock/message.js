import Mock from "mockjs";
import qs from "querystring";

/**
 * 提交留言模拟接口
 */
Mock.mock(/^\/api\/message$/, "post", function (options) {
  const { nickname, content } = JSON.parse(options.body);
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      id: "@guid", // <id>,
      nickname, // "@cname",
      content, // "@csentence(1, 5)",
      createDate: () => parseInt(Mock.Random.date('T')),
      "avatar|1": [
        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
      ]
    },
  });
});


Mock.mock(/^\/api\/message\/?(\?.+)?$/, 'get', function({ url }) {
  const query = url.split('?')[1];
  const params = qs.parse(query);
  const limit = parseInt(params.limit) || 10; // 每页数量

  return Mock.mock({
    code: 0,
    msg: '获取网站评论数据成功',
    data: {
      total: 15, // 总数
      [`rows|${limit}`]: [ // 当前页列表数据
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 3)",
          createDate: () => parseInt(Mock.Random.date('T')),
          "avatar|1": [
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
          ],
        }
      ]
    },
  });
});