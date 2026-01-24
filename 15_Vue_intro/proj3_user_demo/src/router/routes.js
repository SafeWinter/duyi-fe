import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import User from '../views/User.vue';
import Loading from '../views/Loading.vue';
import News from '../views/News.vue';

export default [
  { path: "/", name: 'Home', component: Home },
  { path: "/login", name: 'Login', component: Login },
  { path: "/loading", name: 'Loading', component: Loading },
  { path: "/user", name: 'User', component: User, meta: {requireAuth: true} },
  { path: "/news", name: 'News', component: News, meta: {requireAuth: true} },
];
