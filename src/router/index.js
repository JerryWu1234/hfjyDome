import Vue from 'vue'
import Router from 'vue-router'
import components from '../components'
Vue.use(Router)


/**
 * 路由信息配置
 */
export default new Router({
  mode: 'history',
  routes: [
    ...components
  ]
})
