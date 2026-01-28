import 'nprogress/nprogress.css';
import {start, done, configure} from 'nprogress';
import NotFound from '@/views/NotFound';

// Docs: https://github.com/rstacruz/nprogress
configure({
  trickleSpeed: 100,
  showSpinner: false
});

const delay = (duration = 3000) => new Promise(
  (res, _) => setTimeout(res, duration));

const makeAsyncComp = (asyncFactory, fakeDelay = delay) => async () => {
  start();
  const comp = await asyncFactory();
  if(process.env.NODE_ENV === 'development') {
    await fakeDelay();
  }
  done();
  return comp;
};

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home");
const About = () => import(/* webpackChunkName: "about" */ "@/views/About");
const Blog = () => import(/* webpackChunkName: "blog" */ "@/views/Blog");
const BlogDtl = () => import(/* webpackChunkName: "blogDtl" */ "@/views/Blog/components/BlogDetail");
const Message = () => import(/* webpackChunkName: "message" */ "@/views/Message");
const Project = () => import(/* webpackChunkName: "project" */ "@/views/Project");

export default [
  {
    name: "Portal",
    path: "/index.html",
    component: makeAsyncComp(Home),
    meta: { title: "首页" },
  },
  {
    name: "Home",
    path: "/",
    component: makeAsyncComp(Home),
    meta: { title: "首页" },
  },
  {
    name: "About",
    path: "/about",
    component: makeAsyncComp(About),
    meta: { title: "关于我" },
  },
  {
    name: "Article",
    path: "/blog",
    component: makeAsyncComp(Blog),
    meta: { title: "文章" },
  },
  {
    name: "CategorizedArticle",
    path: "/blog/cate/:categoryId",
    component: makeAsyncComp(Blog),
    meta: { title: "文章列表" },
  },
  {
    name: "ArticleDetail",
    path: "/blog/:id",
    component: makeAsyncComp(BlogDtl),
    meta: { title: "文章详情" },
  },
  {
    name: "Message",
    path: "/message",
    component: makeAsyncComp(Message),
    meta: { title: "评论列表" },
  },
  {
    name: "Project",
    path: "/project",
    component: makeAsyncComp(Project),
    meta: { title: "项目&效果" },
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
    meta: { title: "404 - 找不到页面"}
  }
];
