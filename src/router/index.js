import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import upcoming from '../components/upcoming.vue'
Vue.use(Router)


/**
 * 路由信息配置
 */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: upcoming
    }
  ]
})
