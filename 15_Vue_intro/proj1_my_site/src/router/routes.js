import Home from '@/views/Home';
import About from '@/views/About';
import Blog from '@/views/Blog';
import BlogDetail from '@/views/Blog/components/BlogDetail';
import Message from '@/views/Message';
import Project from '@/views/Project';

export default [
  {name: 'Home', path: '/', component: Home},
  {name: 'About', path: '/about', component: About},
  {name: 'Article', path: '/blog', component: Blog},
  {name: 'CategorizedArticle', path: '/blog/cate/:categoryId', component: Blog},
  {name: 'ArticleDetail', path: '/blog/:id', component: BlogDetail},
  {name: 'Message', path: '/message', component: Message},
  {name: 'Project', path: '/project', component: Project},
];