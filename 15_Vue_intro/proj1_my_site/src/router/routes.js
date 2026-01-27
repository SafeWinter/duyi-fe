const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home");
const About = () => import(/* webpackChunkName: "about" */ "@/views/About");
const Blog = () => import(/* webpackChunkName: "blog" */ "@/views/Blog");
const BlogDtl = () => import(/* webpackChunkName: "blogDtl" */ "@/views/Blog/components/BlogDetail");
const Message = () => import(/* webpackChunkName: "message" */ "@/views/Message");
const Project = () => import(/* webpackChunkName: "project" */ "@/views/Message");

export default [
  {
    name: "Portal",
    path: "/index.html",
    component: Home,
    meta: { title: "首页" },
  },
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: { title: "首页" },
  },
  {
    name: "About",
    path: "/about",
    component: About,
    meta: { title: "关于我" },
  },
  {
    name: "Article",
    path: "/blog",
    component: Blog,
    meta: { title: "文章" },
  },
  {
    name: "CategorizedArticle",
    path: "/blog/cate/:categoryId",
    component: Blog,
    meta: { title: "文章列表" },
  },
  {
    name: "ArticleDetail",
    path: "/blog/:id",
    component: BlogDtl,
    meta: { title: "文章详情" },
  },
  {
    name: "Message",
    path: "/message",
    component: Message,
    meta: { title: "评论列表" },
  },
  {
    name: "Project",
    path: "/project",
    component: Project,
    meta: { title: "项目&效果" },
  },
];
