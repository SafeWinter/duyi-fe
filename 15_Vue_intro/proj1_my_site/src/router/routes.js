import Home from '@/views/Home';
import About from '@/views/About';
import Blog from '@/views/Blog';
import BlogDetail from '@/views/Blog/components/BlogDetail';
import Message from '@/views/Message';
import Project from '@/views/Project';

export default [
  {name: 'Home', path: '/', component: Home, meta: {title: '首页'}},
  {name: 'About', path: '/about', component: About, meta: {title: '关于我'}},
  {name: 'Article', path: '/blog', component: Blog, meta: {title: '文章'}},
  {name: 'CategorizedArticle', path: '/blog/cate/:categoryId', component: Blog, meta: {title: '文章列表'}},
  {name: 'ArticleDetail', path: '/blog/:id', component: BlogDetail, meta: {title: '文章详情'}},
  {name: 'Message', path: '/message', component: Message, meta: {title: '评论列表'}},
  {name: 'Project', path: '/project', component: Project, meta: {title: '项目&效果'}},
];