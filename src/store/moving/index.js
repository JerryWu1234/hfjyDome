
import {getters} from './getters'
import {actions} from './actions'
import {mutations} from './mutations'
const state = {
  title: 'doubanMovie', // App 标题
  login: {
    user: "",
    pass: ""
  },
  upcomBody: {  // 即将上映的电影列表
    start: 0,
    subjects: {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
