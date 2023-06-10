import VideoOnDemand from './views/VideoOnDemand';
import Subscribe from './views/Subscribe';
import Home from './views/Home';

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/subscribe', component: Subscribe },
  { path: '/video-on-demand', component: VideoOnDemand },
];

const router = new VueRouter({
  mode: 'history', // Use HTML5 history mode for clean URLs (optional)
  routes,
});

export default router;