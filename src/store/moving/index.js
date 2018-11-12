
import {actions} from './actions'
import {mutations} from './mutations'
const state = {
  login: {
    user: "",
    pass: ""
  },
  upcomBody: {  // 即将上映的电影列表
    start: 0,
    subjects: {}
  },
  movieDetail: { // 电影详情
    rating: {},
    images: {}
  },
}

export default {
  state,
  actions,
  mutations
}
