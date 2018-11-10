import login from '../components/login.vue'
import upcoming from '../components/upcoming.vue'
import moviesDetail from '../components/moviesDetail.vue'
export default [
  {
    path: '/',
    name: 'login',
    component: login,
    beforeEnter: (to, form, next) => {
    if(!!to.params.status === false && form.name === 'upcoming'){
      next(false)
    }else{
      next()
    }
  }
  },
  {
    path: '/upcoming',
      name: 'upcoming',
    component: upcoming
  },
  {
    path: '/moviesDetail',
      name: 'moviesDetail',
    component: moviesDetail
  }
]
