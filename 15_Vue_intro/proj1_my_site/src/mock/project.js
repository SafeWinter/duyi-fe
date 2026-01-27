import Mock from "mockjs";

const randomGithub = (p = 0.15) =>
  () => {
    if(Math.random() <= p) return null;
    const user = Mock.Random.name().toLowerCase().replaceAll(' ', '');
    const repo = Mock.Random.word().toLowerCase();
    return `https://www.github.com/${user}/${repo}`;
  };

const baidu = "https://www.baidu.com";

Mock.mock("/api/project", "get", {
  code: 0,
  msg: "项目数据加载成功",
  "data|7-10": [
    {
      id: "@guid",
      name: "@ctitle(5, 10)",
      "url|1": [baidu, baidu, baidu, null],
      github: randomGithub(0.2),
      "description|1-3": ["@cparagraph(1, 3)"],
      "thumb|1": [
        `@image('300x250', '#2f424ee1', '#FFF', '@ctitle')`,
        `@image('300x250', '#2f424ee1', '#FFF', '@ctitle')`,
        `@image('300x250', '#2f424ee1', '#FFF', '@ctitle')`,
        null,
      ],
      "order|+1": 1,
    },
  ],
});
